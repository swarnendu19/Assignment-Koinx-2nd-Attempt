import express from "express";
import { getCryptoPrices } from "../controller/price";
import { getCryptoStats } from "../controller/stats";

const router = express.Router();

//Task 1
router.get("/crypto-prices", getCryptoPrices);

//Task 2
router.get("/stats", getCryptoStats);


export default router;
