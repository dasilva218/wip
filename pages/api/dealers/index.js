import {
  dealers_location,
  post_dealers,
} from '../../../controllers/controllerD';
import connectMongo from '../../../database/dbconnect';

export default async function handler(req, res) {
  const { method } = req;

  connectMongo().catch(() =>
    res.status(405).json({ error: 'Error in the Connection' })
  );

  switch (method) {
    case 'GET':
      dealers_location(req, res);
      break;
    case 'POST':
      post_dealers();
      break;
    case 'PUT':
      break;
    case 'DELETE':
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowd`);
      break;
  }
}
