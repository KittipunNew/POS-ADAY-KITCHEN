import mongoose from 'mongoose';

interface Menu {
  name: string;
  category: 'FOOD' | 'DRINK';
  price: number;
}

const menuSchema = new mongoose.Schema<Menu>({
  name: { type: String, require: true },
  category: {
    type: String,
    enum: ['FOOD', 'DRINK'],
    required: true,
  },
  price: { type: Number, require: true },
});

export default mongoose.model('menu', menuSchema);
