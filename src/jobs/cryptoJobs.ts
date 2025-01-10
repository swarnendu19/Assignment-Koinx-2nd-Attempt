import axios from "axios";
import { CryptoPrice } from "../models/cryptoPrice.model";

const COINS = ["bitcoin", "matic-network", "ethereum"];
const API_URL = "https://api.coingecko.com/api/v3/simple/price";

export const fetchCryptoPrices = async () => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                ids: COINS.join(","),
                vs_currencies: "usd",
                include_market_cap: "true",
                include_24hr_change: "true",
            },
        });

        const data = response.data;

        for (const coin of COINS) {
            const priceData = new CryptoPrice({
                coinId: coin,
                name: coin.replace("-", " ").toUpperCase(),
                symbol: coin === "matic-network" ? "MATIC" : coin.toUpperCase(),
                priceUSD: data[coin].usd,
                marketCapUSD: data[coin].usd_market_cap,
                change24h: data[coin].usd_24h_change,
            });

            await priceData.save();
        }

        console.log("Crypto prices updated successfully");
    } catch (error) {
        console.error("Failed to fetch crypto prices:", error);
    }
};
