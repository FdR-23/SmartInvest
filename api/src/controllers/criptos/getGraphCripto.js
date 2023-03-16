const axios = require("axios");

const graphCripto = async (req, res) => {
    const { id } = req.params;
    const { day } = req.query;
 
    try {
        const data = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/ohlc?vs_currency=usd&days=${day}`)
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


module.exports = graphCripto;