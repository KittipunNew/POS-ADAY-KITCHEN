import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db';

import orderRoute from './routes/orderRoute';
import menuRoute from './routes/menuRoute';
import tableRoute from './routes/tableRoute';

const app = express();
const port = 5000;

connectDB();

// parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(cors());

// Route
app.use('/api', orderRoute);
app.use('/api', menuRoute);
app.use('/api', tableRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
