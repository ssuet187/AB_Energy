import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
const Slide2 = () => {
  return (
    <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false}>
     
      <div>
      <Image src={'/images/project2(1).jpg'} alt='project' height={250} width={250}/>
      </div>
      <div>
      <Image src={'/images/project2(2).jpg'} alt='project' height={250} width={250}/>
      </div>
      {/* Add more images as needed */}
    </Carousel>
  );
};

export default Slide2;
