import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGO_URI}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    );
    console.log('DB Connected');
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
