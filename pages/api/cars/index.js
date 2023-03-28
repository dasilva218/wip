import { postCar, post_car } from '../../../controllers/Cars';
import connectMongo from '../../../database/dbconnect';

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'Error in the Connection' })
  );

  switch (req.method) {
    case 'GET':
      break;
    case 'POST':
      postCar(req, res);
      break;

    default:
      break;
  }
}
