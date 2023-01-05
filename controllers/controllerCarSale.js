import CarSale from "../models/carSale";


// post : http://localhost:3000/api/carsale
export async function carSale(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form Data Not Provided...!" });

    CarSale.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}


// get : http://localhost:3000/api/carsale/[id]
export async function get_cars_sale_id(req, res) {
  try {
    const carsale = await CarSale.find({ foreign_key_partners: req.query.id });

    if (!carsale) return res.status(404).json({ error: "Data not Found" });

    res.status(200).json(carsale);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}