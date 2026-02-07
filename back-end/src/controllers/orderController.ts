import { Request, Response } from 'express';
import OrderModel from '../models/orderModel';

interface IncomingItem {
  menuId: number;
  name: string;
  category: 'FOOD' | 'DRINK';
  quantity: number;
  price: number;
}

export const readOrder = async (req: Request, res: Response) => {
  const orders = await OrderModel.find({});
  res.send(orders);
};

export const getOrderByTableId = async (req: Request, res: Response) => {
  const { tableId } = req.params;

  const orders = await OrderModel.find({ tableId }).sort({ createdAt: -1 });

  res.json(orders);
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { tableId, items } = req.body;

    let order = await OrderModel.findOne({
      tableId,
      status: { $in: ['PENDING', 'COOKING'] },
    });

    if (!order) {
      order = new OrderModel({
        tableId,
        items: [],
      });
    }

    items.forEach((newItem: IncomingItem) => {
      const existItem = order.items.find(
        (item) => item.menuId.toString() === newItem.menuId.toString(),
      );

      if (existItem) {
        existItem.quantity += newItem.quantity;
      } else {
        order.items.push(newItem);
      }
    });

    await order.save();

    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
