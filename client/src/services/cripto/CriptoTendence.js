import axios from 'axios'

const CriptoTendence = async () => {

    const data = axios.get('/cripto/tendence')
        .then(response => response.data.coins)

    return data
}

export default CriptoTendence