import mongoose, { Schema, Document } from 'mongoose';

interface OrderItem {
  menuId: number;
  name: string;
  category: 'FOOD' | 'DRINK';
  quantity: number;
  note?: string;
}

interface Order extends Document {
  tableId: string;
  items: OrderItem[];
  status: 'PENDING' | 'COOKING' | 'DONE' | 'CANCELLED';
}

const orderItemSchema = new mongoose.Schema<OrderItem>({
  menuId: { type: Number, required: true },
  name: { type: String, required: true },
  category: {
    type: String,
    enum: ['FOOD', 'DRINK'],
    required: true,
  },
  quantity: { type: Number, required: true },
  note: String,
});

const orderSchema = new mongoose.Schema<Order>(
  {
    tableId: { type: String, required: true },
    items: [orderItemSchema],
    status: {
      type: String,
      enum: ['PENDING', 'COOKING', 'DONE', 'CANCELLED'],
      default: 'PENDING',
    },
  },
  { timestamps: true },
);

export default mongoose.model('Order', orderSchema);
