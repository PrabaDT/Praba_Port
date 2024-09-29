import React from 'react'
//import banner from '../assests/banner.png';
//import logo from '../assests/logo.png';


function Navbar() {
  return (
    <div className='flex items-center w-full h-24 mx-auto border-b-[1px] border-b-gray-600 gap-x-80 px-8 md:px-16'>
        
        <div className='flex'>
          <text>PRABA</text>
        </div>

        <div className='flex justify-center gap-20'>
          <a href='banner'>Home</a>
          <a href='About'>About me</a>
          <a href='Projects'>Projects</a>
          <a href='Resume'>Contact me</a>
        </div>

    </div>
  )
}

export default Navbar


//<div>
//<img className='h-[70px] w-[70px] margin-left' src={banner} alt='banner'>
            
//</img>

//</div>