import React from 'react'
import Image from 'next/image';
const Job = ({data}) => {
    const {title,experiences} = data;
    return (
          <section>
              <h2 className='mb-6 text-white'>{title}</h2>
              <div className='flex flex-col gap-4'>
                  {experiences.map(({role,description,current})=>(
                  <div key={role} className='flex flex-col rounded-lg'>
                      <span className={`h-2 rounded-md ${current ? "bg-green" : "bg-grey"}` }/>
                      <div className='bg-Blue p-6 drop-shadow-md rounded-md bg-opacity-90'>
                      <div className='flex flex-wrap gap-4'>
                      <h3 className='text-Orange'>{role}</h3>
                       <p className="mt-2 text-white">{description}</p>
                    </div>    
                          
                         
                      </div>
                  </div>
                  ))}
              </div>
          </section>
        )
}

export default Job
