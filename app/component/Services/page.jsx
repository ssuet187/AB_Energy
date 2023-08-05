'use client'
import React from 'react'
import Slide6 from '../slide6'
import Footer from '../footer'
const page = () => {
  return (
    <div>
      <section>
    <h2 className='text-white text-center text-6xl font-bold'>Our Services</h2>
        <div className='flex flex-col '>
        <div className='bg-Blue p-6 drop-shadow-md rounded-md bg-opacity-90'>
        
        <Slide6/>
        
        </div>
       
        
        <Footer/>
        
        
        </div>
      </section>
    </div>
  )
}

export default page
