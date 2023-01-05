import { Schema, models, model } from "mongoose";

const carSaleSchema = new Schema(
  {
    marque: { type: String, require: true },
    model: { type: String },
    fuel: { type: String, require: true },
    transmission: String,
    types: { type: String, require: true },
    annee: String,
    prix: Number,
    constructor: String,
    img: [String],
    portiere: Number,
    foreign_key_partners: String,
  },
  { timestamps: true }
);

const CarSale = models.carSales || model("carSales", carSaleSchema);
export default CarSale;
