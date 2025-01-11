import cron from "node-cron";
import { fetchCryptoPrices } from "../jobs/cryptoJobs";

export const startCronJobs = () => {
    cron.schedule("0 */2 * * *", async () => {
        console.log("Running fetchCryptoPrices job");
        await fetchCryptoPrices();
    });
};
