import express from 'express';
import orderRoute from './routes/orderRoute';

const app = express();
const port = 5000;

app.use('/api', orderRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
