import {
  dealers_location,
  post_dealers,
} from "../../../controllers/controllerD";
import dbConnect from "../../../database/dbconnect";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  switch (method) {
    case "GET":
      dealers_location(req, res);
      break;
    case "POST":
      post_dealers();
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
