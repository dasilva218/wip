import {
  delete_car_sale,
  get_cars_sale_id,
} from '../../../controllers/controllerCarSale';
import connectMongo from '../../../database/dbconnect';

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'Error in the Connection' })
  );

  switch (req.method) {
    case 'GET':
      get_cars_sale_id(req, res);
      break;
    case 'POST':
      break;
    case 'DELETE':
      delete_car_sale(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowd`);
      break;
  }
}
