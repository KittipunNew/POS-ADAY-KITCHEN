import express from 'express';
import {
  getOrder,
  createOrder,
  getOrderByTableId,
} from '../controllers/orderController';

const router = express.Router();

router.get('/orders', getOrder);
router.get('/orders/:tableId', getOrderByTableId);
router.post('/order/create', createOrder);

export default router;
