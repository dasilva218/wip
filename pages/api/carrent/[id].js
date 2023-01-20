import { get_car_rent_id } from '../../../controllers/controllerCarRent';
import { dbConnect } from '../../../database/dbconnect';

export default async function handler(req, res) {
  dbConnect();

  switch (req.method) {
    case 'GET':
      get_car_rent_id(req, res);
      break;

    default:
      break;
  }
}
