const axios = require('axios')

// Las 7 monedas más populares en CoinGecko según las 
// búsquedas de los usuarios en las últimas 24 horas (ordenadas por las más populares primero)

const tendenceCripto = async (req, res) => {

    try {
        const data = await axios.get("https://api.coingecko.com/api/v3/search/trending")
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


module.exports = tendenceCripto;