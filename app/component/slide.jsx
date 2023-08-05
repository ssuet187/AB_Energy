'use client'
import React from 'react'
import {motion} from 'framer-motion'

const imageVariants = {
    initial: { x: '200%' },
    animate: { x: '5%', transition: { duration: 1 } },
  };
  const SlidingImage = () => {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        variants={imageVariants}
        style={{ overflow: 'hidden' }} // This is necessary to hide the portion of the image that slides into view.
      >
        <motion.img
        className='min-h-min rounded-full'
          src="../images/remove.png"
          alt="Your Image"
          width={350}
          height={350}
        />
      </motion.div>
    );
  };
  
  export default SlidingImage;
  