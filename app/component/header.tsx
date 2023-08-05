'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BsList,BsX,BsFacebook,BsLinkedin,BsWhatsapp} from 'react-icons/bs'
import {motion} from 'framer-motion'
function Header (){
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen (!menuOpen);
  return (
    <header>
        <nav className='w-full h-24 shadow-xl bg-Blue rounded-md'>
            <div className='flex items-center justify-between w-full h-full px-4 py-6'>
            <Link href='/'>
            <Image src={'/images/img.jpg'} alt='logo' width={90} height={10} className='cursor-pointer rounded-full'/>
            </Link>
            
            <motion.div whileHover={{scale:1.1}} className='text-white hidden sm:flex'>
                <ul className='hidden sm:flex'>
                    <li className='cursor-pointer ml-10 uppercase border-b border-[#F6b519] hover:bg-black hover:text-[#F6b519] rounded-full text-white ease-in-out duration-300 text-lg px-4 py-1 '>
                        <Link href={'/component/Aboutus'}>About Us</Link>
                    </li>
                    <li className='cursor-pointer ml-10 uppercase border-b border-[#F6b519] hover:bg-black hover:text-[#F6b519] rounded-full text-white ease-in-out duration-300 text-lg px-4 py-1 '>
                        <Link href={'/component/Services'}>Services</Link></li>
                    <li  className='cursor-pointer ml-10 uppercase border-b border-[#F6b519] hover:bg-black hover:text-[#F6b519] rounded-full text-white ease-in-out duration-300 text-lg px-4 py-1 '>
                    <Link href={'/component/projects'}>Projects</Link>
                    </li>
                    <li  className='cursor-pointer ml-10 uppercase border-b border-[#F6b519] hover:bg-black hover:text-[#F6b519] rounded-full text-white ease-in-out duration-300 text-lg px-4 py-1 '>
                    <Link href={'/component/Contactus'}>Contact Us</Link>
                        </li>
                </ul>
            </motion.div>
            <div onClick={toggleMenu} className='sm:hidden cursor-pointer pl-24'>
            <BsList className='w-8 h-8 text-[#F6b519]'/>
            </div>
        </div>
        <div className={
            menuOpen?'fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-[white] p-10 ease-in-out duration-500':'fixed left-[-100%] top-0 p-10 ease-in-out duration-500'
            }>
            <div className='flex w-full items-center justify-end'>
            <div onClick={toggleMenu} className='cursor-pointer'>
            <BsX className = 'h-8 w-8 text-[#F6b519]'/>
            </div>
            </div>
        <div className='flex-col py-4'>
        <ul>
            <li onClick={()=> setMenuOpen(false)} className='py-4 hover:underline hover:decoration-[#F6b519]'>
                <Link href={'/component/Aboutus'}>About Us</Link>
            </li>
            <li onClick={()=> setMenuOpen(false)} className='py-4 hover:underline hover:decoration-[#F6b519]'>
                <Link href={'/component/Services'}>Services</Link>
            </li>
            <li onClick={()=> setMenuOpen(false)} className='py-4 hover:underline hover:decoration-[#F6b519]'>
                <Link href={'/component/projects'}>Projects</Link>
            </li>
            <li onClick={()=> setMenuOpen(false)} className='py-4 hover:underline hover:decoration-[#F6b519]'>
                <Link href={'/component/Contactus'}>Contact Us</Link>
            </li>
        </ul>
        </div>
        <div className='flex flex-row justify-around pt-10 items-center'>
        <Link href='https://www.facebook.com'>
            <BsFacebook size={30} className = 'cursor-pointer hover:text-Blue ease-in-out duration-300'/>
        </Link>
        <Link href='https://wa.me/923359171232'>
            <BsWhatsapp size={30} className = 'cursor-pointer hover:text-green ease-in-out duration-300'/>
        </Link>
        <Link href='https://www.linkedin.com'>
            <BsLinkedin size={30} className = 'cursor-pointer hover:text-Blue ease-in-out duration-300'/>
        </Link>
        </div>
        <Image src={'/images/remove.png'} alt='logo' width={205} height={75} className='cursor-pointer pt-10 mx-auto rounded-full'/> 
        </div>
    </nav>
    
    </header>
      
  )
}

export default Header
