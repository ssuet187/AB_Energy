import React from 'react'
import {aboutMe,skills,professionalData,TeamData,Ideas,fair,traff,Abouus,introinf,project} from '../data/page-data'
import ProfessionaExperience from './component/professiona-experience'
import Team from './component/Team'
import Idea from './component/ideas'
import Job from './component/job'
import Traffic from './component/traffic'
import Aboutus from './component/about'
import Intro from './component/intro'
import Header from '../app/component/header'
import Project from './component/project'
import Footer from './component/footer'
const page = () => {
  return (
<div className='page'>
    <div>
     <Header/> 
    <Intro data={introinf}/>
    <Team data={TeamData}/>
    <ProfessionaExperience data={professionalData}/>
    <Idea data={Ideas}/>
    <Job data={fair}/>
    <Project data={project}/>
    
    <Footer/>
   

    
    </div>
    </div>
  )
}

export default page
