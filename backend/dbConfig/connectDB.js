import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("", {
      dbName: "banking",
    });
    console.log(`Connected to Mongodb ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in MongoBD connection ${error}`);
  }
};

export default connectDB;
