const axios = require('axios')
const TicketsCripto = require('../../models/tickertcripto.js')


const ticketCripto = async (req, res) => {
    const { id } = req.params;
    const nameId = id.slice(0, 1).toUpperCase()+id.slice(1)
    const ticket = await TicketsCripto.findOne({ where: { name: nameId } });

    if (Boolean(ticket)) {
        res
            .status(200)
            .json({ ticket })
    } else {
        try {
            const tickets = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/tickers?include_exchange_logo=true&depth=true`)
                .then((response) => response.data)
                .then((data) => {
                    return {
                        name: data.name,
                        tickers: data.tickers
                    }
                });

            await TicketsCripto.findOrCreate({
                where: {
                    name: tickets.name
                },
                defaults: {
                    name: tickets.name,
                    tickers: tickets.tickers
                },
            });

        } catch (error) {
            res
                .status(404)
                .json({ message: error })


        }
    }
}

module.exports = ticketCripto