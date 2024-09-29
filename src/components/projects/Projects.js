import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard'
import cannie from '../../assests/cannie.png';
import recannie from '../../assests/recannie.png';
import myport from  '../../assests/myport.png';
import { SiTailwindcss, SiFigma, SiNextdotjs, SiExpress, SiMongodb } from 'react-icons/si';

function Projects() {
  return (
   <section id='projects' className='w-full py-20 border-b-[1px] marker:border-b-black'>
    <div className='flex items-center justify-center text-center'>
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="MY Projects"/>
    </div>
    <div className='grid grid-cols-3 py-20 gap-14'>
        <ProjectsCard 
        title="CANNIE CONNECT-Dog crossbreeding platform"
        des="A dynamic dog crossbreeding platform built on the MERN stack, designed to streamline and manage interactions among dog owners, vehicle owners, dog handlers, and admins. Users can perform CRUD operations to register and manage dogs, schedule transportation, coordinate breeding services, and oversee administrative tasks, ensuring a seamless and effcient experience for all parties involved."
        src={cannie}
        tec="React , MongoDB , Express.js" />
        
        <ProjectsCard
        title="CANNIE CONNECT New"
        des="I am recreating a dynamic dog crossbreeding platform, originally built on the MERN stack. 
        The platform aims to streamline interactions among dog owners, vehicle owners, dog handlers, and admins. 
        The goal is to provide a seamless and efficient experience for all stakeholders, while improving the platform’s functionality and user experience to better meet the needs of those involved in the crossbreeding process."
        src={recannie}
        tec="React , MongoDB , Express.js"/>

        <ProjectsCard
        title="My Portfolio"
        des="I am creating a personal portfolio website to showcase my projects, skills, and background. It will include an 'About Me' section, highlighting my experience and expertise, along with a list of technical skills. The projects section will feature my work, with descriptions and links. A contact form will allow visitors to reach out easily.
         The site aims to present a professional and streamlined online presence for potential collaborators or employers"
        src={myport}
        tec="React , Tailwind CSS ,  Framer Motion"/>
    </div>

   </section>
  )
}

export default Projects