import { post_user } from '../../../controllers/Users';
import connectMongo from '../../../database/dbconnect';

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'Error in the Connection' })
  );

  switch (req.method) {
    case 'GET':
      break;
    case 'POST':
      post_user(req, res);
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowd`);
      break;
  }
}
