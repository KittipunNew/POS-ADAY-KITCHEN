import { Request, Response } from 'express';
import tableModel from '../models/tableModel';

export const getTables = async (req: Request, res: Response) => {
  const tables = await tableModel.find({});
  res.status(200).send(tables);
};

export const createTable = async (req: Request, res: Response) => {
  try {
    const { name, status } = req.body;

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

export const updateTable = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, status } = req.body;

    const updatedTable = await tableModel.findByIdAndUpdate(
      id,
      { name, status },
      { new: true, runValidators: true },
    );

    if (!updatedTable) {
      return res.status(404).json({ message: 'Table not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const deleteTable = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const table = await tableModel.findByIdAndDelete(id);

    if (!table) {
      return res.status(404).json({ message: 'Table not found' });
    }

    res.status(200).json({ message: 'Table deleted successfully', table });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
