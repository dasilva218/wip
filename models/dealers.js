import { Schema, models, model } from "mongoose";

const dealerSchema = new Schema(
  {
    dealer_name: { type: String, require: true },
    tel: [String],
    email: [String],
    logo: [String],
    commune: { type: String, require: true },
    quartier: { type: String, require: true },
    horaire: { ouverture: Number, fermeture: Number },
    location: { type: Boolean, default: false },
    vente: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Dealers = models.dealers || model("dealers", dealerSchema);

export default Dealers;
