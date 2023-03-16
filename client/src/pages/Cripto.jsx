import React, { useEffect } from 'react'


import ListCoinCripto from '../components/Cripto/ListCripto/ListCripto.jsx'
import InfoGlobal from '../components/Cripto/InfoGlobal.jsx'
import TendenceCripto from '../components/Cripto/TendenceCripto.jsx'
import NewsCripto from '../components/Cripto/NewsCripto.jsx'
const Cripto = () => {
  return (
    <div id='cripto'
      className='flex flex-col [&>section]:py-4'>
  
        <InfoGlobal />
      


      <section className='w-full h-full bg-red-500   px-2'>
        <h2 className='text-2xl font-bold p-2 whitespace-nowrap'>Noticias Cripto</h2>
        <div>
          <NewsCripto />
        </div>
      </section>




        <section className='px-2'>
          <h2 className='text-2xl font-bold p-2 whitespace-nowrap'>Lista de Cripto Monedas</h2>
          <div className='flex flex-col sm:flex-row  px-2'>


            <div className='overflow-x-auto py-2'>
              <ListCoinCripto />
            </div>

            <div className='bg-blue-900 w-[200px]  h-full flex-1 py-2'>
              <TendenceCripto />
            </div>
          </div>
        </section>













    </div>
  )
}

export default Cripto