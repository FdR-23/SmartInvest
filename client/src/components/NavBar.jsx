import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className=' bg-red-100 h-24 flex flex-row relative px-5 pb-2 justify-between'>
      <div className='text-center'>
        <h1 className='text-4xl'>SmartInvest</h1>
        <p className='text-md'> Tu portal de información financiera</p>
      </div>


      <div className=' self-end absolute right-20'>
        <ul className='flex space-x-5'>
          <Link to={"/noticias"}><li className='text-xl'>Noticias</li></Link>
        <Link to={"/criptomonedas"}> <li className='text-xl'>Criptomoneda</li></Link>
        <li className='text-xl'>Inversion</li>
      </ul>
    </div>

    </div >
  )
}

export default NavBar