import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
const Slide = () => {
  return (
    <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false}>
      <div>
      <Image src={'/images/project1.jpg'} alt='project' height={100} width={100} sizes="(max-width: 768px) 100vw"/>
      </div>
      <div>
      <Image src={'/images/project1(2).jpg'} alt='project' height={100} width={100} sizes="(max-width: 768px) 100vw"/>
      </div>
    </Carousel>
  );
};

export default Slide;
