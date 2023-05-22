const axios = require('axios')
const TendencesCripto = require('../../models/list_tendence_cripto.js')

// Las 7 monedas más populares en CoinGecko según las 
// búsquedas de los usuarios en las últimas 24 horas (ordenadas por las más populares primero)


const tendenceCripto = async (req, res) => {
    const tendeces = await TendencesCripto.findAll();

    if (Boolean(tendeces.length)) {
        res
            .status(200)
            .json(tendeces)
    } else {
        try {
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
            res
                .status(400)
                .json({ message: error })
        }
    }
}



// // Sin database
// const tendenceCripto = async (req, res) => {

//     try {
//         const data = await axios.get("https://api.coingecko.com/api/v3/search/trending")
//             .then(response => response.data)
//             .then((data) => data.coins.map((data) => {
//                 return {
//                     id: data.item.id,
//                     market_cap_rank: data.item.market_cap_rank,
//                     name: data.item.name,
//                     symbol: data.item.symbol,
//                     thumb: data.item.thumb,
//                 }
//             }));

//         res
//             .status(200)
//             .json(data)

//     } catch (error) {
//         res
//             .status(400)
//             .json({ message: error })
//     }

// }


module.exports = tendenceCripto;