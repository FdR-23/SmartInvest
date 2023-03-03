import axios from 'axios'

// /cripto/list_coin
// /cripto_detail
// /global_info
// /tendence

const ListCripto = async () => {
    const data = axios.get('/cripto/list_coin')
        .then(response => response.data)


    return data
}

export default ListCripto