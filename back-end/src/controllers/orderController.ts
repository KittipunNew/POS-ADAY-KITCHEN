import { Request, Response } from 'express';
import OrderModel from '../models/orderModel';

export const readOrder = async (req: Request, res: Response) => {
  const order = await OrderModel.find({});
  res.send(order);
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
