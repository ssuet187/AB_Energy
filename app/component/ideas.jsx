import React from 'react'


const Idea = ({data}) => {
    const {title,experiences} = data;
  return (
        <section>
            <h2 className='mb-6 text-white'>{title}</h2>
            <div className='flex flex-col '>
                {experiences.map(({role,description,role1,description1,role2,description2,role3,description3,role4,description4,current})=>(
                <div key={role} className='flex flex-col rounded-lg'>
                    <span className={`h-2 rounded-md ${current ? "bg-green" : "bg-grey"}` }/>
                    <div className='bg-Blue p-6 drop-shadow-md rounded-md bg-opacity-90'>
                    <div className='flex flex-wrap gap-4'>
                    <h3 className='text-Orange'>{role}</h3>
                    <p className="mt-2 text-white">{description}</p>
                    <h3 className='text-Orange'>{role1}</h3>
                    <p className="mt-2 text-white">{description1}</p>
                    <h3 className='text-Orange'>{role2}</h3>
                    <p className="mt-2 text-white">{description2}</p>
                    <h3 className='text-Orange'>{role3}</h3>
                    <p className="mt-2 text-white">{description3}</p>
                    

                    
                    </div>    
                       
                       
                    </div>
                </div>
                ))}
            </div>
        </section>
      )
}

export default Idea
  