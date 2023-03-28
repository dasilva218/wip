import { post_car_sale } from '../../../controllers/controllerCarSale';
import connectMongo from '../../../database/dbconnect';

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'Error in the Connection' })
  );

  switch (req.method) {
    case 'GET':
      break;
    case 'POST':
      post_car_sale(req, res);
      break;

    default:
      break;
  }
}
