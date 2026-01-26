import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/order', (req: Request, res: Response) => {
  res.send('Hello');
});

export default router;
