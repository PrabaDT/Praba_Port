import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { FaFacebookF, FaTwitter, FaLinkedin, FaReact, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiNextdotjs, SiExpress, SiMongodb } from 'react-icons/si';

function LeftBanner() {

    const [text] = useTypewriter({
        words: ["Front-end Developer", "Full Stack Developer"],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });

      
  return (
    <section className='w-full h-[800px]  py-20 flex  border-b-[1px] font-titleFont border-b-black'>
       <div className='flex flex-col gap-40'>
        <div className='flex flex-col gap-3'>
          <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
          <h1 className='text-6xl font-bold text-white'>
            Hi, I'm  {" "}
            <span className='capitalize text-designColor'>Prabani Hettiarachchi</span>
            </h1>
            <h1 className='text-4xl font-bold text-white'> 
              a <span>{text}.</span>
              <Cursor>
                cursorBlinking= "false"
                cursorStyle = "|"
                cursorColor = "#ff014f"
              </Cursor>
            </h1>
            <p>
            "Frontend wizard at your service! I turn lines of code into websites that look awesome and work smoothly. Need a website that’s as fun to use as it is to build? I’m your person!"
            </p>        
         </div>

        <div className='flex justify-between'>
          <div>
            <h2 className='mb-6 text-base uppercase font-titlefont'>
              Find me in
            </h2>
            <div className='flex gap-4'>
              <a href='https://web.facebook.com/prabani.devindya.7'>
              <span className='bannerIcon'>
                <FaFacebookF/>
              </span>
              </a>
              
              <a href='https://www.linkedin.com/in/prabani-devindya-0466811a5/'>
              <span className='bannerIcon'>
                <FaLinkedin/>
              </span>
              </a>
              
              <a href='https://github.com/PrabaDT'>
              <span className='bannerIcon'>
                <FaGithub/>
              </span>
              </a>
              
              <span className='bannerIcon'>
                <FaWhatsapp/>
              </span>
            </div>
          </div>
          <div>
            <h2 className='mb-6 text-base uppercase font-titlefont'>
              skill on
            </h2>
            <div className='flex gap-4'>
              <span className='bannerIcon'>
                <SiTailwindcss/>
              </span>
              <span className='bannerIcon'>
                <SiNextdotjs/>
              </span>
              <span className='bannerIcon'>
                <SiMongodb/>
              </span>
              <span className='bannerIcon'>
                <FaReact/>
              </span>
              <span className='bannerIcon'>
                <SiExpress/>
              </span>
            </div>
          </div>   
        </div>

         
       </div>
    </section>
  )
}

export default LeftBanner