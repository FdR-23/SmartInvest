import axios from 'axios'


export const CriptoList = async (controller) => {
    const data = axios.get('/cripto/list_coin', {
        signal: controller.signal
    })
        .then(response => response.data)


    return data
}


export const CriptoTendence = async (controller) => {

    const data = axios.get('/cripto/tendence', {
        signal: controller.signal
    })
        .then(response => response.data)

    return data
}


export const GlobalInfo = async (controller) => {
    const data = axios.get('/cripto/global_info', {
        signal: controller.signal
    })
        .then(response => response.data)

    return data
}


export const GetNewsCripto = async (controller) => {
    const data = axios.get('/cripto/news', {
        signal: controller.signal
    })
        .then(response => response.data.Data)

    return data
}


export const CriptoDetail = async (controller, id) => {
    const data = axios.get(`/cripto/cripto_detail/${id}`, {
        signal: controller.signal
    })
        .then(response => response.data)
    return data
}

export const TickerCripto = async (controller, id) => {
    const data = axios.get(`/cripto/tickets/${id}`, {
        signal: controller.signal
    })
        .then(response => response.data)
    return data
}




export const CriptoGraph = async (id, day) => {

    let time = day == undefined ? day = '1' : day;

    const data = axios.get(`/cripto/graph_crypto/${id}?day=${time}`)
        .then(response => response.data)
    return data
}