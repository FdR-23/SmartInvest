const axios = require('axios')

const ticketCripto = async(req, res) => {
   const { id } = req.params;

    try {
        const tickets = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/tickers?include_exchange_logo=true&depth=true`)
            .then((response) => response.data)

        res
            .status(200)
            .json(tickets)

    } catch (error) {
        res
            .status(404)
            .json({ message: error })


    }

}

module.exports = ticketCripto