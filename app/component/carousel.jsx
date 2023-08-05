import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
const Slideshow = () => {
  return (
    <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false}>
      <div className='h-screen w-full'>
      <Image src={'/images/installation.jpg'} alt='project' height={250} width={250} />
      </div>
      <div className='h-screen w-full'>
    <Image src={'/images/solar1.jpeg'} alt='project' height={250} width={250} sizes="(max-width: 768px)"/>
      </div>
      <div className='h-screen w-full'>
      <Image src={'/images/mantainence.jpg'} alt='project' height={250} width={250} sizes="(max-width: 768px)"/>
      </div>
      {/* Add more images as needed */}
    </Carousel>
  );
};

export default Slideshow;
