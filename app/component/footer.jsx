'use client'
import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import {Envelope,Whatsapp,Linkedin,Medium,Facebook,Instagram} from './icons'
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
const Footer = () => {
    
    
   
return (
    <div className='text-white flex flex-col p-5 items-center bg-Blue bg-opacity-90 w-full h-full rounded-2xl mt-6'>
	<Box>
	<Container>
    <p>Thank you for considering AB Energy as your solar partner. We are excited to collaborate with you on your path towards sustainable energy and a brighter, cleaner future. Let's harness the power of the sun together! Feel free to contact us for any solar-related questions, quotes, or to schedule a consultation. We look forward to hearing from you soon.</p>
		
		
		
			<div className='flex flex-row justify-center gap-2'>
            <a className='icons-contactme' href='#' aria-label={"email link"}><Envelope /></a>
            <Link href='https://wa.me/923359171232'>
            <BsWhatsapp size={30} className = 'cursor-pointer hover:text-green ease-in-out duration-300'/></Link>
          <a className='icons-contactme' href='https://www.linkedin.com/company/ab-energy1/posts/?feedView=all&viewAsMember=true' aria-label={"linkedin link"}><Linkedin /></a>
          <a className='icons-contactme' href='https://www.facebook.com/profile.php?id=100093113606271' aria-label={"medium link"}><Facebook /></a>
         
    </div>
		
        
            
        
	</Container>
	</Box>
    </div>
);
};
export default Footer;
