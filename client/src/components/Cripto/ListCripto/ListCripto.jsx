import React, { useEffect, useState } from 'react'

import CriptoList from '../../../services/cripto/CriptoList'
import ItemCripto from './ItemCripto.jsx';

const ListCripto = () => {
    const [listCripto, setListCripto] = useState([]);


    useEffect(() => {
        CriptoList()
            .then(response => setListCripto(response))
    }, [])

    
    return (
        <div className=' w-10/12'>
            <div className='grid grid-cols-12  border-y border-y-black text-center  
            text-md font-semibold py-2 box-border'>
                <p className="">Rank</p>
                <p className="col-span-2 text-start">Moneda</p>
                <p className="col-span-2 text-right">Precio</p>
                <p className="">1h</p>
                <p className="">24h</p>
                <p className="">7d</p>
                <p className="col-span-2">Volumen en 24hs</p>
                <p className="col-span-2">Cap. de Merado</p>

            </div>
            <div id='journal-scroll'
                className='w-full  h-[400px] overflow-y-auto scroll-smooth '>
                {listCripto && listCripto.map((elements) =>
                    <ItemCripto
                        key={elements.id}
                        element={elements}
                    />
                )}

            </div>

        </div>
    )
}

export default ListCripto