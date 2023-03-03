import axios from 'axios'

const CriptoDetail = async (id) => {
    const data = axios.get(`/cripto/cripto_detail/${id}`)
        .then(response => response.data)
    return data
}

export default CriptoDetail