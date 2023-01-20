import { get_cars_sale_id } from '../../../controllers/controllerCarSale';
import { dbConnect } from '../../../database/dbconnect';

export default async function handler(req, res) {
  dbConnect();

  switch (req.method) {
    case 'GET':
      get_cars_sale_id(req, res);
      break;
    case 'POST':
      break;

    default:
      break;
  }
}
