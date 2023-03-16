import React from 'react'

import { CriptoList } from '../../../services/cripto/servicesCripto.js'
import ItemCripto from './ItemCripto.jsx';

import { useFetch } from '../../useFetch';

const ListCoinCripto = () => {

    const { data, loading, error } = useFetch(CriptoList)


    return (
        <div className=' min-w-[900px] max-w-[1200px] '>

            <div id='journal-scroll'
            className='grid grid-cols-12  border-y border-y-black text-center  
            text-md font-semibold py-2 box-border flex-nowrap'>
                <p className="">Rank</p>
                <p className="col-span-2  text-start">Moneda</p>
                <p className="col-span-2 text-right">Precio</p>
                <p className="">1h</p>
                <p className="">24h</p>
                <p className="">7d</p>
                <p className="col-span-2">Volumen en 24hs</p>
                <p className="col-span-2">Cap. de Merado</p>

            </div>
            <div id='journal-scroll'
                className='w-full  h-[400px] overflow-auto  scroll-smooth '>
                {loading && <p>Loadinglllllllllll</p>}
                {data && data.map((elements) =>
                    <ItemCripto
                        key={elements.id}
                        element={elements}
                    />
                )}

            </div>

        </div>
    )
}

export default ListCoinCripto