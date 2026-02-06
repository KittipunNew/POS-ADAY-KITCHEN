import { Request, Response } from 'express';
import OrderModel from '../models/orderModel';

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
    const order = await OrderModel.create(req.body);
    res.status(201).json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
};
