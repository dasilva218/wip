import Dealers from "../models/dealers";

// get : http://localhost:3000/api/location/dealers
export async function dealers_location(req, res) {
  const { commune } = req.query;

  if (commune) {
    try {
      const dealers = await Dealers.find().and([
        {
          location: true,
        },
        {
          commune,
        },
      ]);

      if (!dealers) return res.status(404).json({ error: "données non trouvées" });

      res.status(200).json(dealers);
    } catch (error) {
      res
        .status(404)
        .json({ error: "erreur dans la récupération des données" });
    }
  } else {
    try {
      const dealers = await Dealers.find({ location: true });

      if (!dealers)
        return res.status(404).json({ error: "données non trouvées " });

      res.status(200).json(dealers);
    } catch (error) {
      res
        .status(404)
        .json({ error: "erreur dans la récupération des données" });
    }
  }
}

// get : http://localhost:3000/api/dealers/[dealer]
export async function get_dealer(req, res) {
  try {
    const dealer = await Dealers.findById(req.query.dealer);

    if (!dealer) return res.status(404).json({ error: "Data not Found" });

    res.status(200).json(dealer);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}

// get : http://localhost:3000/api/vente/dealers
export async function dealers_vente(req, res) {
  const { commune } = req.query;

  if (commune) {
    try {
      const dealers = await Dealers.find().and([
        {
          vente: true,
        },
        {
          commune,
        },
      ]);

      if (!dealers) return res.status(404).json({ error: "Data not Found" });

      res.status(200).json(dealers);
    } catch (error) {
      res.status(404).json({ error: "Error While Fetching Data" });
    }
  } else {
    try {
      const dealers = await Dealers.find({
        vente: true,
      });

      if (!dealers) return res.status(404).json({ error: "Data not Found" });

      res.status(200).json(dealers);
    } catch (error) {
      res.status(404).json({ error: "Error While Fetching Data" });
    }
  }
}

// post : http://localhost:3000/api/dealers
export async function post_dealers(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form Data Not Provided...!" });
    Dealers.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}
