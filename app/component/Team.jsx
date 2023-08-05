'use client'
import React from 'react'
import Image from 'next/image'
import Slideshow from './carousel';
const Team = ({data}) => {
    const {role,role1,education} = data;
  return (
    <div className='text-white flex flex-col p-10 items-center bg-Blue bg-opacity-90 h-full rounded-3xl mb-6'>
      <h2 className='mb-6 text-white text-4xl sm:justify-around font-thin'>{data.role}</h2>
      <p className='mb-2'>{data.education[0]}</p>
      <Slideshow/>
      <h3 className='mb-6 text-white text-4xl sm:justify-around font-thin'>{data.role1}</h3>
      <p className='mb-2'>{data.education[1]}</p>
      
    </div>
  )
}

export default Team
