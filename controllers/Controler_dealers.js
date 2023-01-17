import Partners from "../models/partners";

// get : http://localhost:3000/api/location/dealers
export async function dealers_location(req, res) {
  const { commune } = req.query;

  if (commune) {
    try {
      const Dealer = await Partners.find().and([
        { location: true },
        { commune },
        { status: "concessionnaire" },
      ]);
      if (!Dealer)
        return res.status(404).json({ error: "données introuvable" });
      res.status(200).json(Dealer);
    } catch (error) {
      res
        .status(404)
        .json({ error: "erreur dans la récupération des données" });
    }
  } else {
    try {
      const Dealers = await Partners.find().and([
        { location: true },
        { status: "concessionnaire" },
      ]);

      if (!Dealers)
        return res.status(404).json({ error: "données non trouvées " });

      res.status(200).json(Dealers);
    } catch (error) {
      res
        .status(404)
        .json({ error: "erreur dans la récupération des données" });
    }
  }
}

// get : http://localhost:3000/api/vente/dealers
export async function dealers_vente(req, res) {
  const { commune } = req.query;

  if (commune) {
    try {
      const dealers = await Partners.find().and([
        {
          vente: true,
        },
        {
          commune,
        },
        {
          status: "concessionnaire",
        },
      ]);

      if (!dealers) return res.status(404).json({ error: "Data not Found" });

      res.status(200).json(dealers);
    } catch (error) {
      res.status(404).json({ error: "Error While Fetching Data" });
    }
  } else {
    try {
      const dealers = await Partners.find().and([
        {
          vente: true,
        },
        {
          status: "concessionnaire",
        },
      ]);

      if (!dealers) return res.status(404).json({ error: "Data not Found" });

      res.status(200).json(dealers);
    } catch (error) {
      res.status(404).json({ error: "Error While Fetching Data" });
    }
  }
}

// get : http://localhost:3000/api/dealers/[dealer]
export async function get_dealer(req, res) {
  console.log(req.query.dealer);
  try {
    const Dealer = await Partners.findById(req.query.dealer);

    if (!Dealer) return res.status(404).json({ error: "Data not Found" });

    res.status(200).json(Dealer);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}
