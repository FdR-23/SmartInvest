import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation()
  console.log(location)
  return (

    <div className='bg-gray-300 h-[100px] flex flex-row relative   justify-between rounded-br-md rounded-bl-md text-[#0c1827] '>

      <div className='m-4 mt-2  -skew-x-3' >
        <div className='p-2 text-center border-2 border-black rounded-lg bg-black/20 shadow-md shadow-white'>
          <Link to={"/"}>
            <h1 className='text-4xl'>SmartInvest</h1>
            <p className='text-md '>Tu portal de información financiera</p>
          </Link>
        </div>
      </div>


      <div className=' self-end absolute right-20'>
        <ul className='flex space-x-5'>
          {/* <Link to={"/noticias"}><li className='text-xl'>Noticias</li></Link>
          <Link to={"/criptomonedas"}> <li className='text-xl'>Criptomoneda</li></Link> */}
          {location.pathname === "/criptomonedas/detalles/" && <Link to={"/"}> <li className='text-xl'>Home</li></Link>}

          {/* <li className='text-xl'>Inversion</li> */}
        </ul>
      </div>

    </div >
  )
}

export default NavBar