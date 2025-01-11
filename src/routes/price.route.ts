import express from "express";
import { getCryptoPrices } from "../controller/price";
import { getCryptoStats } from "../controller/stats";
import { getPriceDeviation } from "../controller/deviation";

const router = express.Router();

//Task 1
router.get("/crypto-prices", getCryptoPrices);

//Task 2
router.get("/stats", getCryptoStats);

//Task 3
router.get("/deviation", getPriceDeviation);



export default router;
