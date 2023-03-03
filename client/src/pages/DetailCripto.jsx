import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import CriptoDetail from '../services/cripto/CriptoDetail';
const DetailCripto = () => {
  const [data, setData] = useState();
  const { id } = useParams()

  useEffect(() => {
    CriptoDetail(id)
      .then((response) => setData(response))
  }, [id])

  console.log(data)
  return (
    <div className='w-full h-screen'>
      
    </div>
  )
}

export default DetailCripto