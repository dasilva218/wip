import { get_partner } from "../../../controllers/Partners";
import connectMongo from "../../../database/dbconnect";

export default async function handler(req, res) {
  const { method } = req;

  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  );

  switch (method) {
    case "GET":
      get_partner(req, res);
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
