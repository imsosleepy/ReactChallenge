import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinpaprika.com/v1"
});

export const getPrices = () => api.get("/tickers");
export const getExchanges = () => api.get("/exchanges");

export const coinApi ={
  getCoins: () => api.get("/coins"),
  getCoinsDetail: (coin_id) => api.get(`/coins/${coin_id}`),
  getCoinsExchanges: (coin_id) => api.get(`/coins/${coin_id}/exchanges`),
  getCoinsMarkets: (coin_id) => api.get(`/coins/${coin_id}/markets`)
}
