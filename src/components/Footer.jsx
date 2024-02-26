import React from 'react'

const Footer = () => {
  return (
    <footer className='relative'>
      <div className='absolute top-0 left-0 w-full overflow-hidden'>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="relative block fill-white"></path>
       </svg>
        <div className='grid lg:grid-cols-4 md:grid-cols-1 p-3'>
          <div className='flex flex-col gap-5 md:pb-5'>
            <h2 className='text-3xl text-white'>Footer</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus rerum incidunt, voluptate alias fugit recusandae quibusdam aperiam repudiandae aspernatur totam quae fuga sint sunt ratione quasi repellat necessitatibus error voluptatibus?</p>
          </div>
          <div className='flex flex-col gap-5 md:pb-5'>
            <h2 className='text-3xl text-white'>Footer</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus rerum incidunt, voluptate alias fugit recusandae quibusdam aperiam repudiandae aspernatur totam quae fuga sint sunt ratione quasi repellat necessitatibus error voluptatibus?</p>
          </div>
          <div className='flex flex-col gap-5 md:pb-5'>
            <h2 className='text-3xl text-green-900 font-semibold'>Patrocinados por</h2>
            <ul>
              <li className='my-3 list-none text-white'>SuperMarket 23</li>
              <li className='my-3 list-none text-white'>Katapulk</li>
              <li className='my-3 list-none text-white'>TripAdvisor</li>
            </ul>
          </div>
          <div className='flex flex-col gap-5 md:pb-5'>
            <h2 className='text-3xl text-green-900 font-semibold'>Patrocinados por</h2>
            <ul>
              <li className='my-3 list-none'>SuperMarket 23</li>
              <li className='my-3 list-none'>Katapulk</li>
              <li className='my-3 list-none'>TripAdvisor</li>
            </ul>   
          </div>
        </div>
        <div className='flex flex-row gap-5'>
          <h3>Puedes ncontrarnos en</h3>
          <p>red social 1</p>
          <p>red social 2</p>
          <p>red social 2</p>
          <p>red social 2</p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
