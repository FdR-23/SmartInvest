import axios from 'axios'

const ExchangeRateBTC = async () => {
    const data = axios.get(`/exchanges_rates`)
        .then(response => response.data)
    return data
}
export default ExchangeRateBTC


