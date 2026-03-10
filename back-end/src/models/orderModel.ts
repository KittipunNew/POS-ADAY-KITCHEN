import mongoose, { Document } from 'mongoose';

interface OrderItem {
  name: string;
  category: 'FOOD' | 'DRINK';
  quantity: number;
  price: number;
  note?: string;
}

interface Order extends Document {
  tableId: string;
  tableName: string;
  items: OrderItem[];
  status: 'PENDING' | 'COOKING' | 'DONE' | 'CANCELLED';
}

const orderItemSchema = new mongoose.Schema<OrderItem>({
  name: { type: String, required: true },
  category: {
    type: String,
    enum: ['FOOD', 'DRINK'],
    required: true,
  },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  note: String,
});

const orderSchema = new mongoose.Schema<Order>(
  {
    tableId: { type: String, required: true },
    tableName: { type: String, required: true },
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
