import express from 'express';
import {
  readOrder,
  createOrder,
  getOrderByTableId,
} from '../controllers/orderController';

const router = express.Router();

router.get('/orders', readOrder);
router.get('/orders/:tableId', getOrderByTableId);
router.post('/order/create', createOrder);

export default router;
