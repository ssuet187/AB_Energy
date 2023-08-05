import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import Footer from './footer';
const Slide6 = () => {
  return (
    <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false}>
      <div>
       <Image src={'/images/services.jpg'} alt='services' height={700} width={700} className='rounded-md'/>
      </div>
      <div>
      <Image src={'/images/services1.jpg'} alt='services' height={700} width={700} className='rounded-md'/>
      </div>
      <div>
      <Image src={'/images/services2.jpg'} alt='services' height={700} width={700} className='rounded-md'/>
      </div>
      <div>
      <Image src={'/images/services3.jpg'} alt='services' height={700} width={700} className='rounded-md'/>
      </div>
      <div>
      <Image src={'/images/services4.jpg'} alt='services' height={700} width={700} className='rounded-md'/>
      </div>
    </Carousel>
  );
};

export default Slide6;
