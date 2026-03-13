import mongoose from 'mongoose';

interface Menu {
  name: string;
  category: 'FOOD' | 'DRINK';
  price: number;
  image: string;
}

const menuSchema = new mongoose.Schema<Menu>(
  {
    name: { type: String, require: true },
    category: {
      type: String,
      enum: ['FOOD', 'DRINK'],
      required: true,
    },
    price: { type: Number, require: true },
    image: { type: String, require: true },
  },
  { timestamps: true },
);

export default mongoose.model('menu', menuSchema);
