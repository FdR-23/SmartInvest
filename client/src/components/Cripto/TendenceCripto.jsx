import React from 'react'
import {CriptoTendence} from '../../services/cripto/servicesCripto.js'
import { useFetch } from '../useFetch.js'

import { Link } from 'react-router-dom'
const TendenceCripto = () => {

  const { data } = useFetch(CriptoTendence)

  return (
    <div className='mx-2  mb-4'>
      <h3 className='py-2 text-lg font-semibold text-center whitespace-nowrap'>Tendencia CoinGecko</h3>
      <div className=''>
        {data && data.map((elemet) =>
          <div key={elemet.item.id} className='grid grid-cols-3 text-[12px] py-2 border-collapse border-b'>

            <div className='flex flex-row items-center whitespace-nowrap col-span-2 space-x-1'>
              <img className='w-5'
                src={elemet.item.thumb} alt={`${elemet.item.thumb}_img`} />

              <p><Link to={`/criptomonedas/detalles/${elemet.item.id}`}>{elemet.item.name} <span>({elemet.item.symbol})</span></Link></p>
            </div>
            <div className='text-right self-end'>
              <p>#{elemet.item.market_cap_rank}</p>
            </div>
          </div>
        )

        }
      </div>


    </div>
  )
}

export default TendenceCripto