import React from 'react'

import image from '../assets/1.png'

const Footer = () => {
  return (
    <div className='bg-gray-500  '>

      <div className='flex justify-center'>
      <img className='w-20 h-20' src={image} alt="logomio" />
      </div>
      <p className='text-center tracking-tighter text-base lg:text-lg '>© Rampi Federico Daniel</p>
    </div>
  )
}

export default Footer