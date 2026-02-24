import { Request, Response } from 'express';
import menuModel from '../models/menuModel';

export const getMenus = async (req: Request, res: Response) => {
  const menus = await menuModel.find({});
  res.send(menus);
};

export const createMenu = async (req: Request, res: Response) => {
  try {
    const { name, category, price } = req.body;
    console.log(req.body);

    const menu = new menuModel({
      name,
      category,
      price,
    });

    await menu.save();

    res.status(201).json(menu);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const deleteMenu = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const menu = await menuModel.findByIdAndDelete(id);

    if (!menu) {
      return res.status(404).json({ message: 'Menu not found' });
    }

    res.status(200).json({ message: 'Menu deleted successfully', menu });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
