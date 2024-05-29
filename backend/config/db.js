import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);

    console.log(`mongo connected`.cyan.underline);

  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
  }
};

export default connectDB;
