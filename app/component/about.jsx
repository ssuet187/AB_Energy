'use client'
import React from 'react'
import Image from 'next/image';
import Typewriter from 'typewriter-effect'
const Aboutus = ({data}) => {
    const {role,education} = data;
    return (
      <div className='text-white flex flex-col p-5 items-center bg-Blue w-full h-full rounded-2xl mt-6'>
        <Image src={'/images/c.png'} alt='icon' height={100} width={100}/>
        <div className='text-white text-4xl'>
        <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Contact us')
            .callFunction(() => {
              console.log('String typed out!');
            })
            
            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .start();
        }}
      />
        </div>
        
        <p>{data.education[0]}</p>
        <p>{data.education[1]}</p>
        <p>{data.education[2]}</p>
    </div>
    )
}

export default Aboutus
