const  axios = require("axios");

// Obtenga datos globales de criptomonedas

const getGlobalInfo = async (req, res) => {
    try {
        const data = await axios.get("https://api.coingecko.com/api/v3/global")
            .then(response => response.data.data)
        res
            .status(200)
            .json(data)

    } catch (error) {
        res
            .status(400)
            .json({ message: error })
    }
}


module.exports = getGlobalInfo;