import React from 'react'
import Title from './layouts/Title';
import { TextGenerateEffect } from "../components/ui/text-gen";


function About() {

  const words = 'I am a hard-working full stack developer with experience in React, Next.js, Node.js, and MongoDB. I enjoy solving complex problems and creating efficient web applications. Outside of coding, I like staying active, exploring new technologies, and traveling.'
  
  return (
    <section id='projects' className='w-full py-20 border-b-[1px] marker:border-b-black'>
        <div className='flex flex-col items-center justify-center gap-4 text-center'>
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="About Me"/>
        <TextGenerateEffect words={words} duration={3}/>
    </div>
    </section>
  )
}

export default About




