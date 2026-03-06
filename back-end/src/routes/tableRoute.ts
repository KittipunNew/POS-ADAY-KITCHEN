import express from 'express';
import { createTable } from '../controllers/tableController';

const router = express.Router();

router.post('/table/create', createTable);

export default router;
