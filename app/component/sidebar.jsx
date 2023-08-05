import React from 'react'
import Image from 'next/image'
import {Envelope,Whatsapp,Twitter,Linkedin,Medium,Facebook,Instagram} from './icons'
import Header from './header'
import SlidingImage from '../component/slide'
const Sidebar = ({data}) => {
  const {name,role,education,contactLinks} = data
  return (
    <div className='bg-Blue bg-opacity-96 flex flex-col sm:h-screen content-between w-full h-auto sm:justify-around sm:w-1/3 sm:fixed'>
      <div className='text-white flex flex-col p-10 items-center'>
        <SlidingImage/>
        <h1 className='mb-2 '>{data.name}</h1>
        <h2 className='mb-6'>{data.role}</h2>
       
        <div className='text-white text-center mb-4 mt-4 sm:mt-8'>
          <h3 className='mb-2'>CONTACT US</h3>
          <div className='flex flex-row justify-center gap-2'>
          <a className='icons-contactme' href={data.contactLinks?.[0]} aria-label={"email link"}><Envelope /></a>
          <a className='icons-contactme' href={data.contactLinks?.[1]} aria-label={"Whatsapp link"}><Whatsapp /></a>
          <a className='icons-contactme' href={data.contactLinks?.[2]} aria-label={"linkedin link"}><Linkedin /></a>
          <a className='icons-contactme' href={data.contactLinks?.[3]} aria-label={"medium link"}><Facebook /></a>
          <a className='icons-contactme' href={data.contactLinks?.[4]} aria-label={"medium link"}><Instagram /></a>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
