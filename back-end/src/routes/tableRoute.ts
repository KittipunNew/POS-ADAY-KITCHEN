import express from 'express';
import {
  createTable,
  deleteTable,
  getTables,
  updateTable,
} from '../controllers/tableController';

const router = express.Router();

router.get('/tables', getTables);
router.post('/table/create', createTable);
router.put('/table/update/:id', updateTable);
router.delete('/table/delete', deleteTable);

export default router;
