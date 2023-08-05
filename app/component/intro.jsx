import React from 'react'

const Intro = ({data}) => {
    const {role,education} = data;
    return (
      <div className='text-white flex flex-col p-5 items-center bg-opacity-90 bg-Blue w-full h-full rounded-2xl mt-6  mb-6'>
        <h2 className='mb-6 text-white animate-none text-4xl sm:justify-around font-thin '>{data.role}</h2>
        <p className='text-4xl'>{data.education[0]}</p>
        <p className='gap-4'>{data.education[1]}</p>
    </div>
    )
}

export default Intro
