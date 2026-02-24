import express from 'express';
import {
  createMenu,
  getMenus,
  deleteMenu,
  createManyMenus,
} from '../controllers/menuController';

const router = express.Router();

router.get('/menus', getMenus);
router.post('/menu/create', createMenu);
router.delete('/menu/delete', deleteMenu);

// สำหรับเพิ่มรายการอาหารทีละหลายรายการ
router.post('/menu/create-many-menu', createManyMenus);

export default router;
