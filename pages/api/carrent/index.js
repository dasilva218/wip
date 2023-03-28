import {
  get_car_rent,
  post_car_rent,
} from '../../../controllers/controllerCarRent';
import connectMongo from '../../../database/dbconnect';

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'Error in the Connection' })
  );

  switch (req.method) {
    case 'GET':
      get_car_rent(req, res);
      break;
    case 'POST':
      postCar(req, res);
      break;

    default:
      break;
  }
}
