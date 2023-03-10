import { dealers_location } from '../../../controllers/Controler_dealers';
import { dbConnect } from '../../../database/dbconnect';

export default async function handler(req, res) {
  dbConnect();
  switch (req.method) {
    case 'GET':
      dealers_location(req, res);
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowd`);
      break;
  }
}
