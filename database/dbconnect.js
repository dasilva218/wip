import mongoose from 'mongoose';

export const dbConnect = async () =>
  mongoose.connect(process.env.MONGO_URI);
// const MONGO_URL = process.env.MONGO_URI;

// if (!MONGO_URL) {
//   throw new Error(
//     'Please define the MONGO_URL environment variable inside .env.local'
//   );
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose
//       .connect(MONGO_URL, opts)
//       .then((mongoose) => {
//         return mongoose;
//       });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default dbConnect;
