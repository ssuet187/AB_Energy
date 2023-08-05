'use client'
import React from 'react'
import { introinf,TeamData,Abouus } from '../../../data/page-data'
import Intro from '../intro'
import Team from '../Team'
import Aboutus from '../about'
const page = () => {
  return (
    <div>
    
      <Intro data={introinf}/>
      <Team data={TeamData}/>
      <Aboutus data={Abouus}/>
    </div>
  )
}

export default page
