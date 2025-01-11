import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { CryptoPrice } from "../models/cryptoPrice.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";

export const getPriceDeviation = asyncHandler(async (req: Request, res: Response) => {
    const { coin } = req.query;

    if (!coin || !["bitcoin", "matic-network", "ethereum"].includes(String(coin))) {
        throw new ApiError(400, "Invalid or missing 'coin' query parameter");
    }

    const priceRecords = await CryptoPrice.find({ coinId: coin })
        .sort({ timestamp: -1 })
        .limit(100)
        .select("priceUSD -_id");

    if (!priceRecords || priceRecords.length === 0) {
        throw new ApiError(404, `No sufficient data found for cryptocurrency: ${coin}`);
    }

    const prices = priceRecords.map((record) => record.priceUSD);
    const mean = prices.reduce((acc, val) => acc + val, 0) / prices.length;

    const variance =
        prices.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / prices.length;

    const standardDeviation = Math.sqrt(variance);

    return res.status(200).json(
        new ApiResponse(
            200,
            { deviation: Number(standardDeviation.toFixed(2)) },
            `Standard deviation for ${coin} calculated successfully`
        )
    );
});
