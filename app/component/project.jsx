'use client'
import React from 'react'
import Slide from './slide2';
import Slide2 from './slide3';
import Slide4 from './slide4';
import Slide5 from './slide5';
const Proj = ({data}) => {
    const {title,experiences} = data;
  return (
        <section>
            <h2 className='mb-6 text-white text-center text-6xl'>{title}</h2>
            <div className='flex flex-col '>
                {experiences.map(({role,description,role1,description1,role2,description2,role3,description3,role4,description4,current})=>(
                <div key={role} className='flex flex-col rounded-lg'>
                    <span className={`h-2 rounded-md ${current ? "bg-green" : "bg-grey"}` }/>
                    <div className='bg-Blue p-6 drop-shadow-md rounded-md bg-opacity-90'>
                    <div className='flex flex-wrap gap-4'>
                    <h3 className='text-Orange'>{role}</h3>
                    <Slide/>
                    <p className="mt-2 text-white">{description}</p>
                    <h3 className='text-Orange'>{role1}
                    <Slide2/></h3>
                   
                    <p className="mt-2 text-white">{description1}</p>
                    <h3 className='text-Orange'>{role2}
                    <Slide4/></h3>
                    <p className="mt-2 text-white">{description2}</p>
                    <h3 className='text-Orange'>{role3}
                    <Slide5/></h3>
                    <p className="mt-2 text-white">{description3}</p>
                    

                    
                    </div>    
                       
                       
                    </div>
                </div>
                ))}
            </div>
        </section>
      )
}

export default Proj
  