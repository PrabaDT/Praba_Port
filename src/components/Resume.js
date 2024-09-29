import React from 'react'
import Title from './layouts/Title'

function Resume() {
  return (
    <section id='projects' className='w-full py-20 border-b-[1px] marker:border-b-black'>
    <div>
     <div className='flex flex-col justify-center gap-3 text-center item-cos-center'>
        <Title title="" des="Get in touch"/> 
        
        <div className='flex flex-col gap-4 text-3xl font-light tracking-wider text-center text-designColor font-titleFont'>
           <h1>+94 71 660 59 42</h1>
          <h1>devz.hettiarachchi@gmail.com</h1>
       </div>
     </div>
    
        </div>
    
    </section>
  )
}

export default Resume