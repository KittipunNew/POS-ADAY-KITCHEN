import express from 'express';
import {
  createMenu,
  getMenus,
  deleteMenu,
  createManyMenus,
} from '../controllers/menuController';
import upload from '../config/cloudinary';

const router = express.Router();

router.get('/menus', getMenus);
router.post('/menu/create', upload.single('image'), createMenu);
router.delete('/menu/delete', deleteMenu);

// สำหรับเพิ่มรายการอาหารทีละหลายรายการ ใช้ Post man เพิ่ม
router.post('/menu/create-many-menu', createManyMenus);

export default router;
