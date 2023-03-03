import React, { useEffect, useState } from 'react'

import GlobalInfo from '../../services/cripto/GlobalInfo.js'

const InfoGlobal = () => {
    const [info, setInfo] = useState();

    useEffect(() => {
        GlobalInfo()
            .then(response => setInfo(response))
    }, [])


    //     Monedas: 12316 active_cryptocurrencies
    //     Intercambios: 671 markets
    //     Cap.de mercado: 1.123.094.698.502 US$   total_market_cap.usd             0.1 % market_cap_change_percentage_24h_usd
    //         Volumen en 24 h: 56.845.187.666 US$ total_volume 
    //     Dominio:
    // BTC 40, 4 % market_cap_percentage.eth market_cap_percentage.btc
    //         ETH 17, 6 % market_cap_percentage.eth
    //             Gas: 36 GWEI market_cap_percentage.usdt

    const currencyFormatter = (value) => {
        const formatter = new Intl.NumberFormat('es-AR', {
            minimumFractionDigits: 2,
            currency: "USD",
        })
        return formatter.format(value)
    }

    const currencyFormatterWithoutDecimal = (value) => {
        const formatter = new Intl.NumberFormat('es-AR', {
            currency: "USD",
        })
        return formatter.format(value)
    }

    return (
        <div className='flex flex-row w-full [&>div]:flex [&>div]:items-center [&>div]:space-x-1 justify-around p-2 
        [&>div>span]:text-blue-600 [&>div>span]:text-[12px] 
        [&>div>p]:text-[12px] [&>div>p]:font-semibold  '>
            <div >
                <p>Monedas:</p>
                <span>{info && info.active_cryptocurrencies}</span>
            </div>

            <div>
                <p>Intercambios:</p>
                <span>{info && info.markets}</span>
            </div>

            <div>
                <p>Cap.de mercado:</p>
                <span>{info && currencyFormatterWithoutDecimal(info.total_market_cap.usd)} <span>US$</span></span>
            </div>

            <div>
                <p>Volumen en 24 h:</p>
                <span>{info && currencyFormatterWithoutDecimal(info.total_volume.usd)} <span>US$</span></span>
            </div>
            <div >
                <p>Dominio:</p>
                <p className='pr-1'>BTC:</p>
                <span className='pr-1'>{info && info.market_cap_percentage?.btc.toFixed(1)} %</span>
                <p className='pr-1'>ETH:</p>
                <span className='pr-1'>{info && info.market_cap_percentage?.eth.toFixed(1)} %</span>
                <p className='pr-1'>USDT:</p>
                <span className='pr-1'>{info && info.market_cap_percentage?.usdt.toFixed(1)} %</span>
            </div>
        </div>
    )
}

export default InfoGlobal