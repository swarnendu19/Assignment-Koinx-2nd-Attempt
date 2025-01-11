import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { CryptoPrice } from "../models/cryptoPrice.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";

export const getCryptoStats = asyncHandler(async (req: Request, res: Response) => {
    const { coin } = req.query;

    if (!coin || !["bitcoin", "matic-network", "ethereum"].includes(String(coin))) {
        throw new ApiError(400, "Invalid or missing 'coin' query parameter");
    }

    const latestData = await CryptoPrice.findOne({ coinId: coin }).sort({ timestamp: -1 });

    if (!latestData) {
        throw new ApiError(404, `No data found for cryptocurrency: ${coin}`);
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                price: latestData.priceUSD,
                marketCap: latestData.marketCapUSD,
                "24hChange": latestData.change24h,
            },
            `Latest stats for ${coin} fetched successfully`
        )
    );
});
