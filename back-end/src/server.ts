import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db';

import orderRoute from './routes/orderRoute';
import menuRoute from './routes/menuRoute';

const app = express();
const port = 5000;

dotenv.config();
connectDB();

// parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(cors());

// Route
app.use('/api', orderRoute);
app.use('/api', menuRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
