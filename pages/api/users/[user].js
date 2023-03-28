import { get_user } from '../../../controllers/Users';
import connectMongo from '../../../database/dbconnect';

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'Error in the Connection' })
  );

  switch (req.method) {
    case 'GET':
      get_user(req, res);
      break;

    default:
      break;
  }
}
