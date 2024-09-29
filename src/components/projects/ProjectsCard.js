import React from 'react'


function ProjectsCard({title, des, src, tec}) {
  return (
    <div className='flex flex-col w-full h-auto px-12 py-10 rounded-lg shadow-shadowOne bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:bg-gray-900 transition-colors duration-1000 gap-5 '>
        <div className='w-full h-[80%] overflow-hidden rounded-lg'> 
            <img className='object-cover w-full duration-100 cursor-pointer h-60 group-hover:scale-110' src={src} alt='src'></img>
        </div>
        <div>
        <div className='flex flex-col w-full gap-6 mt-5'>
            <div className='flex items-center justify-between font-bold text-red-300 text-wrap'>
            <h3>{title}</h3>
            
            </div>
        </div>
            <p className='mt-3 text-sm tracking-wide text-justify duration-300 hover:text-gray-100'>
                {des}
            </p>
        </div>

        <div className='flex flex-col gap-1'>
        <div>
            <p className='flex text-designColor'>Technology used</p> 
        </div>
        <div>
             <p className='text-sm text-red-300 '>{tec}</p>
        </div>
        </div>
        
    </div>
  )
}


/*<div>
<span className='inline-flex items-center justify-center w-10 h-10 text-lg text-gray-400 bg-black rounded-full hover:text-designColor duration-cursor-pointer ' >
    <BsGithub/>
</span>
</div>*/

export default ProjectsCard