import React from 'react'
import bannerImg from '../../assests/bannerImg.png';


function RightBanner() {
  return (
    <div className='flex items-center justify-center w-1/2 py-10' >
        <img
         className='h-[680px] z-10'
         src={bannerImg} alt='Banner'>
         </img>
         
         <div className='absolute bottom-0vw-[500px] h-[500px] bg-gradient-to-r from-[#078144] to-[#08730e] shadow-shadowOne flex justify-center items-center'>
          
         </div>
      </div>
  )
}

export default RightBanner