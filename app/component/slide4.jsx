import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
const Slide4 = () => {
  return (
    <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false}>
      <div>
      <Image src={'/images/project3.jpg'} alt='project' height={250} width={250}/>
      </div>
      <div>
      <Image src={'/images/project3(1).jpg'} alt='project' height={250} width={250}/>
      </div>
      <div>
      <Image src={'/images/project3(2).jpg'} alt='project' height={250} width={250}/>
      </div>
    </Carousel>
  );
};

export default Slide4;
