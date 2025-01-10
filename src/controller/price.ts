import { Request, Response } from "express";
import { CryptoPrice } from "../models/cryptoPrice.model";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";

export const getCryptoPrices = asyncHandler(async (req: Request, res: Response) => {
    try {
        const prices = await CryptoPrice.find().sort({ timestamp: -1 }).limit(10);
        if (!prices || prices.length === 0) {
            throw new ApiError(404, "No price data available in Database");
        }

        return res.status(200).json(
            new ApiResponse(200, { prices }, "Fetched latest cryptocurrency prices successfully")
        );
    } catch (error: any) {
        if (error instanceof ApiError) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        return res.status(500).json({ error: "Some unexpected error occurred" });
    }
});
