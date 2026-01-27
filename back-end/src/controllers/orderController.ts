import { Request, Response } from 'express';
import OrderModel from '../models/orderModel';

const readOrder = async (req: Request, res: Response) => {
  const order = await OrderModel.find();
};

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = await OrderModel.create(req.body);
    res.send('add order');
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
};

export { readOrder, createOrder };
