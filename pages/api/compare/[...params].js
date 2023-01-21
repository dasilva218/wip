import { dbConnect } from '../../../database/dbconnect';
import CarRent from '../../../models/carRent';
import CarSale from '../../../models/carSale';

export default async function handler(req, res) {
  dbConnect();

  const [marque, model, service] = req.query.params;

  switch (req.method) {
    case 'GET':
      if (service === 'location') {
        try {
          const car_compar = await CarRent.find().and([
            { marque },
            { model },
          ]);
          if (!car_compar)
            return res
              .status(400)
              .json({ error: 'données introuvables' });

          res.status(200).json(car_compar);
        } catch (error) {
          res.status(404).json({
            error: 'erreur dans la récupération des données',
          });
        }
      } else if (service === 'vente') {
        try {
          const car_compar = await CarSale.find().and([
            { marque },
            { model },
          ]);
          if (!car_compar)
            return res
              .status(400)
              .json({ error: 'données introuvables' });

          res.status(200).json(car_compar);
        } catch (error) {
          res.status(404).json({
            error: 'erreur dans la récupération des données',
          });
        }
      }
      break;

    default:
      break;
  }
}
