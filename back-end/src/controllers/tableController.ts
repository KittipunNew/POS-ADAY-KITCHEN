import { Request, Response } from 'express';
import tableModel from '../models/tableModel';

export const createTable = async (req: Request, res: Response) => {
  try {
    const { name, status } = req.body;

    console.log(name, status);

    const table = new tableModel({
      name,
      status,
    });

    await table.save();
    res.status(201).json(table);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
