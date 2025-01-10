import mongoose from "mongoose";
import { DB_NAME } from "../constant";

const connectDB = async()=>{
     try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
     } catch (error) {
      console.log("Connection failed",error);
      process.exit(1)
     }
}

export default connectDB;
