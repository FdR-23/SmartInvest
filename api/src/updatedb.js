const axios = require('axios');
const ListCripto = require('./models/list_cripto.js');
const TendencesCripto = require('./models/list_tendence_cripto.js');
const DetailCripto = require('./models/detail_cripto.js');
const TicketsCripto = require('./models/tickertcripto.js');

const updateListCripto = async () => {
    const listCripto = await ListCripto.findAll();

    if (Boolean(listCripto.length)) {
        try {
            Cripto.destroy({
                where: {},
                truncate: true
            })
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

                });
            });
        } catch (error) {
            return error
        }

    } else {
        return "no paso nada updateListCripto"
    }
};

const updateTendence = async () => {
    const listTendence = await TendencesCripto.findAll();
    if (Boolean(listTendence.length)) {
        try {
            TendencesCripto.destroy({
                where: {},
                truncate: true
            });
            const data = await axios.get("https://api.coingecko.com/api/v3/search/trending")
                .then(response => response.data)
                .then((data) => data.coins.map((data) => {
                    return {
                        id: data.item.id,
                        market_cap_rank: data.item.market_cap_rank,
                        name: data.item.name,
                        symbol: data.item.symbol,
                        thumb: data.item.thumb,
                    }
                }));

            data.forEach(async (element) => {
                await TendencesCripto.findOrCreate({
                    where: {
                        id: element.id,
                        market_cap_rank: element.market_cap_rank,
                        name: element.name,
                        symbol: element.symbol,
                        thumb: element.thumb,
                    },
                    default: {
                        id: element.id,
                        market_cap_rank: element.market_cap_rank,
                        name: element.name,
                        symbol: element.symbol,
                        thumb: element.thumb,
                    },
                })
            });


        } catch (error) {
            return error
        }

    } else {
        return "no paso nada updateTendence"
    }
};

const updateDetails = async () => {
    const details = await DetailCripto.findAll();
    if (Boolean(details)) {
        try {
            DetailCripto.destroy({
                where: {},
                truncate: true
            });

        } catch (error) {
            return error
        }

    } else {
        return "no paso nada updateDetails"
    }
};

const updateTickets = async () => {
    const tickets = await TicketsCripto.findAll();
    if (Boolean(tickets)) {
        try {
            TicketsCripto.destroy({
                where: {},
                truncate: true
            });

        } catch (error) {
            return error
        }

    } else {
        return "no paso nada updateDetails"
    }
};


module.exports = { updateListCripto, updateTendence, updateDetails, updateTickets }