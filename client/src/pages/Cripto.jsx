import React, { useEffect } from 'react'


import ListCripto from '../components/Cripto/ListCripto/ListCripto'
import InfoGlobal from '../components/Cripto/InfoGlobal'
import TendenceCripto from '../components/Cripto/TendenceCripto'
const Cripto = () => {



  return (
    <div id='cripto'>
      <section>
        <InfoGlobal />
      </section>
      <div className='w-full h-full bg-red-200 flex m-auto'>

        <div className='flex-1'>
          <section className='bg-blue-900 w-[200px]  h-full m-auto '>
            <div >
              SideBar
              <TendenceCripto />
            </div>
          </section>
        </div>


        <div className=''>
          <h1 className='text-2xl font-bold'>CRIPTO</h1>


          <div className='block'>
            <h2 className='text-xl font-semibold'>Lista de Cripto Monedas</h2>
            <section className='self-center'>
              <ListCripto />
            </section>
          </div></div>



      </div>






    </div>
  )
}

export default Cripto