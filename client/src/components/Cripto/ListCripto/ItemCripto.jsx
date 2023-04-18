import React from 'react'
import { Link } from 'react-router-dom';

const ItemCripto = ({ element }) => {
  const {
    market_cap_rank,
    id,
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_1h_in_currency,
    price_change_percentage_7d_in_currency,
    price_change_percentage_24h_in_currency,
    market_cap,
    total_volume
  } = element;

  const currencyFormatter = (value) => {
    const formatter = new Intl.NumberFormat('es-AR', {
      minimumFractionDigits: 2,
      maximumSignificantDigits: 4,
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

    <div className=' grid grid-cols-12  gap-1 py-2  text-center box-border hover:bg-[#89BBD9]/30 rounded-b-lg'>
      <div><p>{market_cap_rank}</p></div>
      <Link  reloadDocument={true} className='col-span-2' to={`/criptomonedas/detalles/${id}`}>
        <div className='flex flex-row space-x-1 items-center  whitespace-nowrap'>
          <img className='w-5' src={image} alt={`${name}_img`} />
          <p className='text-sm font-semibold'>{name}</p>
          <p className='text-[10px] text-gray-500 self-start'>{symbol.toUpperCase()}</p>
        </div>
      </Link>
      <div className='text-sm  col-span-2 text-right '>
        <p> {current_price && currencyFormatter(current_price)} <span>US$</span></p>
      </div>

      <div className={`${price_change_percentage_1h_in_currency > 0 ? 'text-green-500' : 'text-red-500'}
      text-center text-sm `}>
        <p>{price_change_percentage_1h_in_currency && price_change_percentage_1h_in_currency.toFixed(1)}</p>
      </div>

      <div className={`${price_change_percentage_7d_in_currency > 0 ? 'text-green-500' : 'text-red-500'}
      text-center text-sm `}>
        <p>{price_change_percentage_7d_in_currency && price_change_percentage_7d_in_currency.toFixed(1)}</p>
      </div>

      <div className={`${price_change_percentage_24h_in_currency > 0 ? 'text-green-500' : 'text-red-500'}
      text-center text-sm `}>
        <p>{price_change_percentage_24h_in_currency && price_change_percentage_24h_in_currency.toFixed(1)}</p>
      </div>

      <div className='col-span-2 text-center text-[14px]'>
        <p>{currencyFormatter && currencyFormatterWithoutDecimal(total_volume)}<span>US$</span></p>
      </div>

      <div className='col-span-2 text-center text-[14px] '>
        <p>{market_cap && currencyFormatterWithoutDecimal(market_cap)}<span>US$</span></p>
      </div>

    </div>

  )
}

export default ItemCripto