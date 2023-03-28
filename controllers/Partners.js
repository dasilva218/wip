import Partners from "../models/partners";

/**
 * ! retourne les partenaires get : http://localhost:3000/api/partners
 * @param {*} req
 * @param {*} res
 */
export async function get_partners(req, res) {
  try {
    const partners = await Partners.find();

    if (!partners) return res.status(404).json({ error: "Data not Found" });

    res.status(200).json(partners);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns un partenaire par le nom
 */
export async function get_partner(req, res) {
  try {
    const partner = await Partners.findOne({ name: req.query.nom });

    if (!partner) return res.status(404).json({ error: "Data not Found" });

    res.status(200).json(partner);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}
