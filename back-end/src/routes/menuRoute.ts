import express from 'express';
import {
  createMenu,
  getMenus,
  deleteMenu,
} from '../controllers/menuController';

const router = express.Router();

router.get('/menus', getMenus);
router.post('/menu/create', createMenu);
router.delete('/menu/delete', deleteMenu);

export default router;
