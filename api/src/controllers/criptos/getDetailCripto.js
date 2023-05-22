const axios = require('axios')
const DetailCripto = require('../../models/detail_cripto')

const getDetailCripto = async (req, res) => {
    const { id } = req.params;
    const details = await DetailCripto.findByPk(id);

    if (Boolean(details)) {
        res
            .status(200)
            .json(details)
    } else {
        try {
            const simpleprice = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=8`)
                .then(response => response.data);
            const currentdata = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
                .then(response => response.data);

            if (simpleprice && currentdata) {
                await DetailCripto.findOrCreate({
                    where: {
                        id: id
                    },
                    defaults: {
                        id: id,
                        simpleprice: simpleprice,
                        currentdata: currentdata,
                    }
                });

                res
                    .status(200)
                    .json({ simpleprice, currentdata })
            }
        } catch (error) {
            res
                .status(400)
                .json({ message: error })

        }
    };

};
// //Sin database
// const getDetailCripto = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const simplePrice = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=8`)
//             .then(response => response.data);

//         const currentData = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
//             .then(response => response.data);
//         res
//             .status(200)
//             .json({ simplePrice, currentData })
//     } catch (error) {
//         res
//             .status(400)
//             .json({ message: error })

//     }

// };

module.exports = getDetailCripto