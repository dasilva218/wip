import { Schema, models, model } from 'mongoose';

const carSchema = new Schema(
  {
    marque: { type: String, require: true },
    model: { type: String },
    fuel: { type: String, require: true },
    transmission: String,
    service: {
      type: String,
      require: true,
      enum: ['location', 'vente'],
    },
    types: { type: String, require: true },
    annee: String,
    prix: Number,
    constructor: { type: String },
    img: [String],
    portiere: Number,
    foreign_key_partners: String,
  },
  { timestamps: true }
);

const Cars = models.cars || model('cars', carSchema);
export default Cars;
