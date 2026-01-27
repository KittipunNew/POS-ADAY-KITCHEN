import mongoose, { Schema, Document } from 'mongoose';

interface Order extends Document {
  name: string;
  price: number;
}

const orderSchema = new Schema<Order>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true },
);

const OrderModel = mongoose.model<Order>('Order', orderSchema);

export default OrderModel;
