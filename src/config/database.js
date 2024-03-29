import mongoose from "mongoose";
import { config } from "dotenv";
config();

const connect = async () => {
  await mongoose.connect(process.env.MONGO_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Mongoose connection");
};

export default connect;
