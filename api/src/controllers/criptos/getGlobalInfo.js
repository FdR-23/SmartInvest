const axios = require("axios");



const getGlobalInfo = async (req, res) => {
    try {
        const data = await axios.get("https://api.coingecko.com/api/v3/global")
            .then(response => response.data.data)
            .then((data) => {
                return {
                    active_cryptocurrencies: data.active_cryptocurrencies,
                    markets: data.markets,
                    total_market_cap: data.total_market_cap.usd,
                    total_volume: data.total_volume.usd,
                    market_cap_percentage: {
                        usdt: data.market_cap_percentage.usdt,
                        eth: data.market_cap_percentage.eth,
                        btc: data.market_cap_percentage.btc,

                    }
                }
            })
        res
            .status(200)
            .json(data)

    } catch (error) {
        res
            .status(400)
            .json({ message: error })
    }
}


module.exports = getGlobalInfo;