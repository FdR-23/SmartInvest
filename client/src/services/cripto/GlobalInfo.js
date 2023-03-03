import axios from 'axios'

const GlobalInfo = async () => {
    const data = axios.get('/cripto/global_info')
        .then(response => response.data)


    return data
}

export default GlobalInfo