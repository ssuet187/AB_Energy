'use client'
import React from 'react'
import Proj from '../project'
import Footer from '../footer'
import { project} from '../../../data/page-data'
const page = () => {
  return (
    <div>
      <Proj data={project}/>
      <Footer/>
    </div>
  )
}
import Project from '../project'
export default page
