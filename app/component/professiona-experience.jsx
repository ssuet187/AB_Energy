import React from 'react'
import Image from 'next/image';

const ProfessionaExperience = ({data}) => {
    const {title,experiences} = data;
  return (
    <section>
        <h2 className='mb-6 text-white'>{title}</h2>
        <div className='flex flex-col gap-6'>
            {experiences.map(({role,description,role1,description1,role2,description2,role3,description3,description4,role4,current})=>(
            <div key={role} className='flex flex-col rounded-lg'>
                <span className={`h-2 rounded-md ${current ? "bg-green" : "bg-grey sm:h-screen content-between w-full h-auto sm:justify-around sm:w-1/3 sm:fixed"}` }/>
                <div className='flex flex-col p-10 items-center bg-Blue h-full rounded-md mb-6 bg-opacity-90'>
                
                <div className='flex flex-wrap gap-4'>  
                    <h3 className='text-Orange'>{role}</h3>
                    <p className="mt-2 text-white">{description}</p>
                    <h3 className='text-Orange'>{role1}</h3>
                    <p className="mt-2 text-white">{description1}</p>
                    <h3 className='text-Orange'>{role2}</h3>
                    <p className="mt-2 text-white">{description2}</p>
                    <h3 className='text-Orange'>{role3}</h3>
                    <p className="mt-2 text-white">{description3}</p>
                    <h3 className='text-Orange'>{role4}</h3>
                    <p className="mt-2 text-white">{description4}</p>
                   
                </div>
               </div>
                
          
        </div>    
            ))}
        </div>
        
    </section>
  )
}

export default ProfessionaExperience
