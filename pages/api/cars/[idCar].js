import { deleteCar, getCar, putCar } from '../../../controllers/Cars';
import connectMongo from '../../../database/dbconnect';

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'Error in the Connection' })
  );

  switch (req.method) {
    case 'GET':
      getCar(req, res);
      break;
    case 'PUT':
      putCar(req, res);
      break;
    case 'POST':
      break;
    case 'DELETE':
      deleteCar(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowd`);
      break;
  }
}
