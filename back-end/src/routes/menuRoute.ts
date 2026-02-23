import express from 'express';
import { createMenu, getMenus } from '../controllers/menuController';

const router = express.Router();

router.get('/menus', getMenus);
router.post('/menu/create', createMenu);

export default router;
