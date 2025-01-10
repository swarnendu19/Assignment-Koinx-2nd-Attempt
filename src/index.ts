import dotenv from "dotenv";
import  connectDB  from "./db/db";
import {app} from "./app";
import { startCronJobs } from "./services/cronScheduler";

dotenv.config();

const PORT = process.env.PORT || 8000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        startCronJobs();
    });
}).catch((err:any) => {
    console.error("Failed to connect to MongoDB:", err);
});
