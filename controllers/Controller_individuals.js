import Partners from "../models/partners";

// get : http://localhost:3000/api/location/individuals
export async function get_individuals_location(req, res) {
  const { commune } = req.query;

  if (commune) {
    try {
      const individuals = await Partners.find().and([
        { commune },
        { location: true },
        { status: "particulier" },
      ]);

      if (!individuals)
        return res.status(404).json({ error: "données non trouvées" });

      res.status(200).json(individuals);
    } catch (error) {
      res
        .status(404)
        .json({ error: "erreur dans la récupération des données" });
    }
  } else {
    try {
      const individuals = await Partners.find().and([
        { location: true },
        { status: "particulier" },
      ]);

      if (!individuals)
        return res.status(404).json({ error: "données non trouvées " });

      res.status(200).json(individuals);
    } catch (error) {
      res
        .status(404)
        .json({ error: "erreur dans la récupération des données" });
    }
  }
}

// get : http://localhost:3000/api/vente/individuals
export async function get_individuals_vente(req, res) {
  const { commune } = req.query;

  if (commune) {
    try {
      const individuals = await Partners.find().and([
        {
          vente: true,
        },
        {
          commune,
        },
        {
          status: "particulier",
        },
      ]);

      if (!individuals)
        return res.status(404).json({ error: "Data not Found" });

      res.status(200).json(individuals);
    } catch (error) {
      res.status(404).json({ error: "Error While Fetching Data" });
    }
  } else {
    try {
      const individuals = await Partners.find().and([
        {
          vente: true,
        },
        {
          status: "particulier",
        },
      ]);

      if (!individuals)
        return res.status(404).json({ error: "Data not Found" });

      res.status(200).json(individuals);
    } catch (error) {
      res.status(404).json({ error: "Error While Fetching Data" });
    }
  }
}

// get : http://localhost:3000/api/individuals/[individual]
export async function get_individual(req, res) {
  try {
    const individual = await Partners.findById(req.query.individual);

    if (!individual) return res.status(404).json({ error: "Data not Found" });

    res.status(200).json(individual);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}
