import express from "express";
import { getCryptoPrices } from "../controller/price";

const router = express.Router();

router.get("/crypto-prices", getCryptoPrices);

export default router;
