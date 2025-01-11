import mongoose, { Schema, Document } from "mongoose";

export interface ICryptoPrice extends Document {
    coinId: string;
    priceUSD: number;
    marketCapUSD: number;
    change24h: number;
    timestamp: Date;
}

const cryptoPriceSchema = new Schema<ICryptoPrice>(
    {
        coinId: { type: String, required: true },
        priceUSD: { type: Number, required: true },
        marketCapUSD: { type: Number, required: true },
        change24h: { type: Number, required: true },
        timestamp: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

export const CryptoPrice = mongoose.model<ICryptoPrice>("CryptoPrice", cryptoPriceSchema);
