import React from 'react'
import { CriptoTendence } from '../../services/cripto/servicesCripto.js'
import { useFetch } from '../useFetch.js'

import { Link } from 'react-router-dom'
const TendenceCripto = () => {

  const { data, loading } = useFetch(CriptoTendence)
  if (loading == true)
    return <div>Loading</div>
  return (
    <div className='mx-8 sm:mx-2 sm:mb-4 '>
      <div className='flex-nowrap '>
        <h3 className='text-lg font-bold text-center  whitespace-nowrap -skew-x-12  box-border'>
          Tendencia CoinGecko</h3>
      </div>
      <div className='px-6 sm:px-0 bg-gray-500/10 rounded-b-lg mt-1'>
        {data && data.map((elemet) =>
          <div key={elemet.id} className='p-2 grid grid-cols-3 text-[12px] py-2 border-collapse border-b  rounded-b-lg hover:bg-[#89BBD9]/30'>
            <div className='flex flex-row items-center  col-span-2 space-x-1 pl-2 sm:pl-0'>
              <img className='w-5'
                src={elemet.thumb} alt={`${elemet.thumb}_img`} />
              <p>
                <Link reloadDocument={true} to={`/criptomonedas/detalles/${elemet.id}`}>
                  {elemet.name} <span>({elemet.symbol})</span>
                </Link>
              </p>
            </div>
            <div className='text-right  self-center'>
              <p className='font-bold pr-2 sm:pr-0'>#{elemet.market_cap_rank}</p>
            </div>
          </div>
        )

        }
      </div>


    </div>
  )
}

export default TendenceCripto