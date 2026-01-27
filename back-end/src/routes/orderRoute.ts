import express from 'express';
import { readOrder, createOrder } from '../controllers/orderController';

const router = express.Router();

router.get('/order', readOrder);
router.post('/order/create', createOrder);

export default router;
