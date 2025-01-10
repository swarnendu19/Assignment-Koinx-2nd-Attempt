import cron from "node-cron";
import { fetchCryptoPrices } from "../jobs/cryptoJobs";

export const startCronJobs = () => {
    cron.schedule("* * * * *", async () => {
        console.log("Running fetchCryptoPrices job");
        await fetchCryptoPrices();
    });
};
