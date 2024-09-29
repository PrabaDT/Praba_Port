import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';


function Banner() {
  
  return (
    <section 
    id='home'
    className='w-full h-[800px] items-center flex  border-b-[1px] font-titleFont border-b-black'>
     
      <LeftBanner/>
      <RightBanner/>
      

    </section>
  );
}

export default Banner