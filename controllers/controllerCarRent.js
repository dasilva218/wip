import Cars from '../models/cars';

// get : http://localhost:3000/api/carrent/
export async function get_car_rent(req, res) {
  try {
    const carRent = await Cars.find({
      foreign_key_partners: req.query.id,
      service: 'location',
    });

    if (!carRent)
      return res.status(404).json({ error: 'Data not Found' });

    res.status(200).json(carRent);
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' });
  }
}

// get : http://localhost:3000/api/carrent/[id]
export async function get_car_rent_id(req, res) {
  try {
    const carRent = await Cars.find({
      foreign_key_partners: req.query.id,
      service: 'location',
    });

    if (!carRent)
      return res.status(404).json({ error: 'Data not Found' });

    res.status(200).json(carRent);
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' });
  }
}

// post : http://localhost:3000/api/carrent
/**
 * * controleure qui ajoute un véhicule louer
 * @param {*} req
 * @param {*} res
 * @returns
 */
export async function postCar(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res
        .status(404)
        .json({ error: 'Form Data Not Provided...!' });

    Cars.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}
