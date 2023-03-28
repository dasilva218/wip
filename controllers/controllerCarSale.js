import Cars from '../models/cars';

/**
 * * ajoute un véhicule
 */
export async function post_car(req, res) {
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

// get : http://localhost:3000/api/carsale/[id]
export async function get_cars_sale_id(req, res) {
  try {
    const carsale = await Cars.find({
      foreign_key_partners: req.query.id,
      service: 'vente',
    });

    if (!carsale)
      return res.status(404).json({ error: 'Data not Found' });

    res.status(200).json(carsale);
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' });
  }
}

// delete : http://localhost:3000/api/cars/[idCar]
export async function delete_car_sale(req, res) {
  try {
    const { idCar } = req.query;

    if (idCar) {
      const car = await Cars.findByIdAndDelete(idCar);
      return res.status(200).json(car);
    }

    res.status(404).json({ error: 'User Not Selected...!' });
  } catch (error) {
    res
      .status(404)
      .json({ error: 'Error While Deleting the User...!' });
  }
}
