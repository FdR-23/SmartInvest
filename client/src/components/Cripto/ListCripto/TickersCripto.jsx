import React from 'react'

import { TickerCripto } from '../../../services/cripto/servicesCripto.js'
import { currencyWithoutDecimals } from '../../../services/currencyWithoutDecimals.js'
import { useFetch } from '../../useFetch.js'

const TickersCripto = ({ id, totalVolumen24Hs }) => {

    const { data } = useFetch(TickerCripto, id, [id])

    const handlePorcetVol24hs = (volumen24Hs) => {
        let porcent = (volumen24Hs * 100) / totalVolumen24Hs;
        return porcent
    };

    return (
        <div className='px-2'>

            <div className='border-b border-black'>
                <h3
                    className='text-2xl font-bold whitespace-nowrap  -skew-x-12 sm:ml-5 p-2 '>
                    {data?.name} Markets
                </h3>
            </div>

            <div className='m-auto pt-2 min-w-[1000px] max-w-[1200px] '>
                <div id='journal-scroll'
                    className='grid grid-cols-12  border-y  text-center  
                    text-sm font-bold py-1 box-border'>
                    <p className="">#</p>
                    <p className="col-span-2  text-start">Exchange</p>
                    <p className="text-center">Pair</p>
                    <p className="text-center">Precio</p>
                    <p className="">Spread</p>
                    <p className="">+2 % Depth</p>
                    <p className="">-2 % Depth</p>
                    <p className="col-span-2">Volumen 24hs</p>
                    <p className="">Volumen %</p>
                    <p className="">Trust Score</p>

                </div>

                <div id='journal-scroll'
                    className=' h-[400px] overflow-auto scroll-smooth'>

                    {data && data.tickers.map((ticker, index) =>
                        <div key={index} className='overflow-y-auto grid grid-cols-12 
                         gap-1 py-2  text-center box-border border-b last:border-b-0 hover:bg-[#89BBD9]/30 rounded-b-lg '>
                            <div className='col-span-1 self-center'>{index + 1}</div>
                            <div className='col-span-2 flex  items-center space-x-2 text-sm '>
                                <img
                                    className='w-5 h-5'
                                    src={ticker.market.logo} />
                                <p>{ticker.market.name}</p>
                            </div>
                            <div className='text-center text-sm text-blue-600 self-center '>
                                <a href={ticker.trade_url} target="_blank" rel="noopener noreferrer" ><p>{ticker.base.slice(0, 5)}/{ticker.target.slice(0, 5)}</p></a>

                            </div>
                            <div className='text-xs text-center self-center'>
                                <p><span>$</span> {currencyWithoutDecimals(ticker.converted_last.usd)}</p>
                            </div>
                            <div className='text-xs self-center'>
                                <p>{(ticker.bid_ask_spread_percentage?.toFixed(2))}<span>%</span></p>
                            </div>
                            <div className='text-xs whitespace-nowrap self-center' >
                                <p><span>$</span> {currencyWithoutDecimals(ticker.cost_to_move_up_usd.toFixed(0))}</p>
                            </div>
                            <div className='text-xs self-center'>
                                <p><span>$</span> {currencyWithoutDecimals(ticker.cost_to_move_down_usd.toFixed(0))}</p>
                            </div>
                            <div className='col-span-2 text-xs whitespace-nowrap self-center'>
                                <p><span>$</span> {currencyWithoutDecimals(ticker.converted_volume.usd)}</p>
                            </div>
                            <div className='text-xs whitespace-nowrap self-center'>
                                <p>{handlePorcetVol24hs(ticker.converted_volume.usd).toFixed(2)}<span>%</span></p>
                            </div>
                            <div className='relative '>
                                <span className={`${ticker.trust_score === 'green' ? 'bg-green-600' :
                                    ticker.trust_score === 'yellow' ? 'bg-yellow-400' :
                                        ticker.trust_score === 'red' ? 'bg-red-600' : 'bg-gray-600'}
                            w-3.5 h-3.5 rounded-full absolute m-auto top-0 bottom-0 left-0 right-0`}></span>
                            </div>

                        </div>
                    )

                    }

                </div>



            </div>
        </div>
    )
}

export default TickersCripto