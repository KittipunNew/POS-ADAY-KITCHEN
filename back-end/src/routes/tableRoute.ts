import express from 'express';
import {
  createTable,
  deleteTable,
  getTables,
} from '../controllers/tableController';

const router = express.Router();

router.get('/tables', getTables);
router.post('/table/create', createTable);
router.delete('/table/delete', deleteTable);

export default router;
