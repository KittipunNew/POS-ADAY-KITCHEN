import express from 'express';
import { createMenu } from '../controllers/menuController';

const router = express.Router();

router.post('/menu/create', createMenu);

export default router;
