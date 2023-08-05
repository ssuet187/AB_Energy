import React from 'react'
import Image from 'next/image';
const Traffic = ({data}) => {
    const {title,experiences} = data;
    return (
          <section>
              <h2 className='mb-6 text-white'>{title}</h2>
              <div className='flex flex-col gap-6'>
                  {experiences.map(({role,description,current})=>(
                  <div key={role} className='flex flex-col rounded-lg'>
                      <span className={`h-2 rounded-md ${current ? "bg-green" : "bg-grey"}` }/>
                      <div className='bg-Blue p-6 drop-shadow-md rounded-md bg-opacity-90'>
                      <div className='flex flex-wrap gap-4'>
                      <h3 className='text-white'>{role}</h3>
                          <p className="mt-2 text-white">{description}</p>
                      <Image priority width={300} height={300} className='rounded-lg h-full mb-6 mt-4' src = '/images/tr.jfif' alt = 'taha.jpg' aria-label = 'taha.jpg' />
                      <Image priority width={300} height={300} className='rounded-lg h-full mb-6 mt-4' src = '/images/trf.jfif' alt = 'taha.jpg' aria-label = 'taha.jpg' />
                      <Image priority width={300} height={300} className='rounded-lg h-full mb-6 mt-4' src = '/images/trfc.jfif' alt = 'taha.jpg' aria-label = 'taha.jpg' />
                      <Image priority width={300} height={300} className='rounded-lg h-full mb-6 mt-4' src = '/images/ghula.jfif' alt = 'taha.jpg' aria-label = 'taha.jpg' />

                      </div>    
                          
                         
                      </div>
                  </div>
                  ))}
              </div>
          </section>
        )
}

export default Traffic
