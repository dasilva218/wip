import mongoose from 'mongoose';

const URI =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGO_URI
    : process.env.MONGO_LOCAL;

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(URI);

    if (connection.readyState == 1) {
      console.log('Database Connected');
    }
  } catch (errors) {
    return Promise.reject(errors);
  }
};

export default connectMongo;
