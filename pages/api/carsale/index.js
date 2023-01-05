import { carSale } from "../../../controllers/controllerCarSale";
import dbConnect from "../../../database/dbconnect";

export default async function handler(req, res) {
  dbConnect();

  switch (req.method) {
    case "GET":
      break;
    case "POST":
      carSale(req, res);
      break;

    default:
      break;
  }
}
