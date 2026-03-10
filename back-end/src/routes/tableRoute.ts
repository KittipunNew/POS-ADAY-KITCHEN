import express from 'express';
import { createTable, getTables } from '../controllers/tableController';

const router = express.Router();

router.get('/tables', getTables);
router.post('/table/create', createTable);

export default router;
