require('dotenv').config()
const axios = require('axios')
const API_KEY_CRYPTO_COMPARE = process.env.API_KEY_CRYPTO_COMPARE

const getNewsCripto = async (req, res) => {
    try {
        const data = await axios.get(`https://min-api.cryptocompare.com/data/v2/news/?sortOrder=popular&lang=ES&ITs=180000&api_key=${API_KEY_CRYPTO_COMPARE}`)
            .then(response => response.data)
        res
            .status(200)
            .json(data)
    } catch (error) {
        res
            .status(400)
            .json({ message: error })
    }
}

module.exports = getNewsCripto;




