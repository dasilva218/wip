import { get_individual } from "../../../controllers/Controller_individuals";
import { dbConnect } from "../../../database/dbconnect";


export default async function handler(req, res) {
  const { method } = req;

  dbConnect()

  switch (method) {
    case "GET":
      get_individual(req, res);
      break;
    case "POST":
      break;
    case "PUT":
      break;
    case "DELETE":
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowd`);
      break;
  }
}
