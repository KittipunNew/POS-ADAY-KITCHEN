import { Request, Response } from 'express';
import menuModel from '../models/menuModel';
import upload from '../config/cloudinary';

export const getMenus = async (req: Request, res: Response) => {
  const menus = await menuModel.find({});
  res.send(menus);
};

export const createMenu = async (req: Request, res: Response) => {
  try {
    const { name, category, price } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: 'กรุณาอัปโหลดรูปภาพ' });
    }

    const imageUrl = req.file.path;

    const menu = new menuModel({
      name,
      category,
      price,
      image: imageUrl,
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

// สำหรับเพิ่มรายการอาหารทีละหลายรายการ
export const createManyMenus = async (req: Request, res: Response) => {
  try {
    const menusData = req.body;
    console.log(menusData);

    const menus = await menuModel.insertMany(menusData);

    res.status(201).json(menus);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
