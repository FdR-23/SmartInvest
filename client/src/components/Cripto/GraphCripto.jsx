import React, { useState, useEffect } from 'react'
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { convertDateShort } from '../../services/convertDate.js';
import { CriptoGraph } from '../../services/cripto/servicesCripto.js';
const GraphCripto = ({ id }) => {
    const [day, setDay] = useState(undefined);
    const [info, setInfo] = useState();



    useEffect(() => {
        CriptoGraph(id, day)
            .then((response) => setInfo(response))
    }, [id, day])

    const data = info && info?.map((data) => {
        const labels = convertDateShort(data[0]);
        const score = data.slice(1, 2);
        return {
            Date: labels,
            Price: score[0]
        }
    });

    const dateFormatter = (data) => {
        const date = data?.split(", ")[0]
        return date
    };

    return (
        <div className='w-full  lg:w-[700px] relative'>
            {/* botones */}
            <div className=' flex pt-3 pr-2 absolute right-0 z-10
           
             [&>button]:bg-gray-200 [&>button]:border [&>button]:border-black
              [&>button]:text-center [&>button]:items-center [&>button]:rounded-md
              space-x-2
              [&>button]:w-[40px] [&>button]:h-[20px]  [&>button]:text-xs
              sm:[&>button]:w-[45px] sm:[&>button]:h-[20px] sm:[&>button]:text-xs
              
              '>
                <button onClick={() => setDay('1')}
                    className='border focus:border-white focus:bg-gray-400 bg-red'>24hs</button>
                <button onClick={() => setDay('7')}
                    className='border focus:border-white focus:bg-gray-400'>7d</button>
                <button onClick={() => setDay('14')}
                    className='border focus:border-white focus:bg-gray-400'>14d</button>
                <button onClick={() => setDay('30')}
                    className='border focus:border-white focus:bg-gray-400'>30d</button>
                <button onClick={() => setDay('90')}
                    className='border focus:border-white focus:bg-gray-400'>90d</button>
                <button onClick={() => setDay('max')}
                    className='border focus:border-white focus:bg-gray-400'>MAX</button>
            </div>


            {/* Grafico */}

            <div className=' flex justify-center  sm:h-[300px]'>
            <ResponsiveContainer  width="100%" height={300} >
                <AreaChart data={data} margin={{ top: 40, right: 10, left:10, bottom: 10, }}>
                    <Area type="Function" dataKey="Price" stroke="#099d4b" activeDot={false} dot={false}
                        fillOpacity={1} fill="url(#colorPv)" />
                    <defs>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#099d4b" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#099d4b" stopOpacity={0.2} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                    <XAxis
                        tick={{ fontSize: 12, fill: 'black', fontWeight: 'bold' }}
                        dataKey="Date" tickFormatter={dateFormatter} />
                    <YAxis
                        tick={{ fontSize: 12, fill: 'black', fontWeight: 'bold' }}
                        domain={['dataMin', 'dataMax']}
                        tickFormatter={(value) =>
                            value.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                            })
                        } />
                    <Tooltip
                        formatter={(value) => `${value.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}`} />
                </AreaChart >
                </ResponsiveContainer>
            </div>
        </div>
    )
}


export default GraphCripto