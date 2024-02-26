import React from 'react'

const Header = () => {
  return (
    <nav className='flex flex-row justify-between h-10vh 2xl:w-full xl:w-full lg:w-full
                   bg-green-600 text-white p-3'>
      <div className=''>
        <h3 className='font-large'>Mi pagina de viajes</h3>
      </div>
      <div className=' font-medium'>
        <ul className='flex flex-row gap-3'>
          <li className='hover:text-green-200 hover:border-b-2 hover:border-green-200 cursor-pointer'>Ofertas</li>
          <li className='hover:text-green-200 hover:border-b-2 hover:border-green-200 cursor-pointer'>Ofertas</li>
          <li className='hover:text-green-200 hover:border-b-2 hover:border-green-200 cursor-pointer'>Ofertas</li>        

          
        </ul>       
        
      </div>
      
    </nav>
  )
}

export default Header
