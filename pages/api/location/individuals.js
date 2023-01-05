import { get_individuals_location } from "../../../controllers/Controller_individuals";
import dbConnect from "../../../database/dbconnect";

export default async function handler(req, res) {
  dbConnect();

  switch (req.method) {
    case "GET":
      get_individuals_location(req, res);
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowd`);
      break;
  }
}
