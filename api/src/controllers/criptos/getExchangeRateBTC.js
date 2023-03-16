const axios = require('axios')
const getExchangeRateBTC = async (req, res) => {

    try {
        const data = await axios.get(`https://api.coingecko.com/api/v3/exchange_rates`)
            .then(response => response.data);

        res
            .status(200)
            .json(data)

    } catch (error) {
        res
            .status(400)
            .json({ message: error })

    }

}
module.exports = getExchangeRateBTC;
