const axios = require('axios');
const ListCripto = require('../../models/list_cripto.js')

const getListCoint = async (req, res) => {
    const listCripto = await ListCripto.findAll({
        order: [['market_cap_rank', 'ASC']]
    });

    if (Boolean(listCripto.length)) {
        res
            .status(200)
            .json({ listCripto })
    } else {

        try {
            const info = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&page=1&price_change_percentage=1h%2C24h%2C7d")
                .then(response => response.data)
                .then((data) => data.map((data) => {
                    return {
                        market_cap_rank: data.market_cap_rank,
                        id: data.id,
                        image: data.image,
                        name: data.name,
                        symbol: data.symbol,
                        current_price: data.current_price,
                        market_cap: data.market_cap,
                        total_volume: data.total_volume,
                        price_change_percentage_1h_in_currency: data.price_change_percentage_1h_in_currency,
                        price_change_percentage_24h_in_currency: data.price_change_percentage_24h_in_currency,
                        price_change_percentage_7d_in_currency: data.price_change_percentage_7d_in_currency,
                    }
                }));
            info.forEach(async (element) => {
                await ListCripto.findOrCreate({
                    where: {
                        market_cap_rank: element.market_cap_rank,
                        id: element.id,
                        image: element.image,
                        name: element.name,
                        symbol: element.symbol,
                        current_price: element.current_price,
                        market_cap: element.market_cap,
                        total_volume: element.total_volume,
                        price_change_percentage_1h_in_currency: element.price_change_percentage_1h_in_currency,
                        price_change_percentage_24h_in_currency: element.price_change_percentage_24h_in_currency,
                        price_change_percentage_7d_in_currency: element.price_change_percentage_7d_in_currency,
                    },
                    defaults: {
                        market_cap_rank: element.market_cap_rank,
                        id: element.id,
                        image: element.image,
                        name: element.name,
                        symbol: element.symbol,
                        current_price: element.current_price,
                        market_cap: element.market_cap,
                        total_volume: element.total_volume,
                        price_change_percentage_1h_in_currency: element.price_change_percentage_1h_in_currency,
                        price_change_percentage_24h_in_currency: element.price_change_percentage_24h_in_currency,
                        price_change_percentage_7d_in_currency: element.price_change_percentage_7d_in_currency,
                    },
                });
            });
        } catch (error) {
            res
                .status(400)
                .json({ message: error })
        }
    }
}



module.exports = getListCoint;