import Cars from '../models/cars';

/**
 * * post : http://localhost:3000/api/cars/
 * * ajoute un véhicule
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

/**
 ** get : http://localhost:3000/api/cars/[idCar]
 ** récupère un véhicule
 * @param {*} req
 * @param {*} res
 */
export async function getCar(req, res) {
  try {
    const { idCar } = req.query;

    if (idCar) {
      const car = await Cars.findById(idCar);
      res.status(200).json(car);
    }
    res.status(404).json({ error: 'User not Selected...!' });
  } catch (error) {
    res.status(404).json({ error: 'Cannot get the User...!' });
  }
}

/**
 * * delete http://localhost:3000/api/cars/[idCar]
 * * delete single car
 * @param {*} req
 * @param {*} res
 * @returns
 */
export async function deleteCar(req, res) {
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

/**
 * http://localhost:3000/api/cars/[idCar]
 * @param {*} req
 * @param {*} res
 */
export async function putCar(req, res) {
  try {
    const { idCar } = req.query;
    const formData = req.body;

    if (idCar && formData) {
      const car = await Cars.findByIdAndUpdate(idCar, formData, {
        new: true,
        runValidators: true,
      });
      res.status(200).json(car);
    }
    res.status(404).json({ error: 'User Not Selected...!' });
  } catch (error) {
    res
      .status(404)
      .json({ error: 'Error While Updating the Data...!' });
  }
}
