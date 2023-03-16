const axios = require('axios')

const getDetailCripto = async (req, res) => {
    const { id } = req.params;

    try {

        const simplePrice = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=8`)
            .then(response => response.data);

        const currentData = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
            .then(response => response.data);

        res
            .status(200)
            .json({simplePrice, currentData})

    } catch (error) {
        res
            .status(400)
            .json({ message: error })

    }

}

module.exports = getDetailCripto