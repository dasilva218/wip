import { model, models, Schema } from "mongoose";

const PartnerSchema = new Schema(
  {
    name: { type: String, require: true, unique: true },
    telephone: [String],
    email: [String],
    logo: String,
    commune: { type: String, require: true },
    quartier: { type: String, require: true },
    horaire: { ouverture: Number, fermeture: Number },
    location: { type: Boolean, default: false },
    vente: { type: Boolean, default: false },
    status: {
      type: String,
      require: true,
      enum: ["concessionnaire", "particulier"],
    },
  },
  { timestamps: true }
);

const Partners = models.partners || model("partners", PartnerSchema);

export default Partners;
