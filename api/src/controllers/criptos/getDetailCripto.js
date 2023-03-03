const axios = require('axios')

const getDetailCripto = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
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

module.exports = getDetailCripto