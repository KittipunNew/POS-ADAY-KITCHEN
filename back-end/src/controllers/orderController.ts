import { Request, Response } from 'express';
import OrderModel from '../models/orderModel';

interface IncomingItem {
  _id: string;
  name: string;
  category: 'FOOD' | 'DRINK';
  quantity: number;
  price: number;
}

// รายการออเดอร์ทั้งหมด
export const getOrder = async (req: Request, res: Response) => {
  const orders = await OrderModel.find({});
  res.send(orders);
};

// รายการออเดอร์แต่ละโต๊ะ
export const getOrderByTableId = async (req: Request, res: Response) => {
  const { tableId } = req.params;

  const orders = await OrderModel.find({ tableId }).sort({ createdAt: -1 });

  res.json(orders);
};

// เจนเลขคิวสำหรับออเดอร์กลับบ้าน
const generateQueueNumber = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const lastOrder = await OrderModel.findOne({
    createdAt: { $gte: today },
    tableId: { $regex: /^A-\d{3}$/ },
  }).sort({ createdAt: -1 });

  let nextNum = 1;

  if (lastOrder) {
    const lastId = lastOrder.tableName;
    const currentNum = parseInt(lastId.split('-')[1]);
    nextNum = currentNum + 1;
  }

  return `A-${String(nextNum).padStart(3, '0')}`;
};

// สร้างออเดอร์
export const createOrder = async (req: Request, res: Response) => {
  try {
    let { tableName, tableId } = req.body;
    const { items } = req.body;

    let order;

    if (tableName === 'กลับบ้าน') {
      tableName = await generateQueueNumber();
      order = new OrderModel({
        tableName,
        items: [],
      });
    } else {
      order = await OrderModel.findOne({
        tableId,
        status: { $in: ['PENDING', 'COOKING'] },
      });

      if (!order) {
        order = new OrderModel({
          tableId,
          tableName,
          items: [],
        });
      }
    }

    // รวมรายการอาหารเข้าออเดอร์
    items.forEach((newItem: IncomingItem) => {
      const existItem = order.items.find(
        (item: any) => item._id === newItem._id,
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
