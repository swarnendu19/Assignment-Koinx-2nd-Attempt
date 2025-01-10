import mongoose, { Schema, Document } from "mongoose";

interface ICryptoPrice extends Document {
    coinId: string;
    name: string;
    symbol: string;
    priceUSD: number;
    marketCapUSD: number;
    change24h: number;
    timestamp: Date;
}

const CryptoPriceSchema: Schema = new Schema({
    coinId: { type: String, required: true },
    name: { type: String, required: true },
    symbol: { type: String, required: true },
    priceUSD: { type: Number, required: true },
    marketCapUSD: { type: Number, required: true },
    change24h: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
});

export const CryptoPrice = mongoose.model<ICryptoPrice>("CryptoPrice", CryptoPriceSchema);
