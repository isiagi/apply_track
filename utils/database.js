import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if(isConnected) {
    console.log("Connected");
  }

  try {
    await mongoose.connect(process.env.MONGODBURL, {
      dbName: "job",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true

  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
