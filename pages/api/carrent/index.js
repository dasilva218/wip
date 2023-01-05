import {
  get_car_rent,
  post_car_rent,
} from "../../../controllers/controllerCarRent";
import dbConnect from "../../../database/dbconnect";

export default async function handler(req, res) {
  dbConnect();

  switch (req.method) {
    case "GET":
      get_car_rent(req, res);
      break;
    case "POST":
      post_car_rent(req, res);
      break;

    default:
      break;
  }
}
