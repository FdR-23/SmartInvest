import React, { useEffect, useState } from 'react'
import CriptoTendence from '../../services/cripto/CriptoTendence.js'

import { Link } from 'react-router-dom'
const TendenceCripto = () => {
  const [data, setData] = useState()

  useEffect(() => {
    CriptoTendence()
      .then((response) => setData(response))
  }, [])

  return (
    <div className='mx-2 mt-10'>
      <h3>Tendencia CoinGecko</h3>
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