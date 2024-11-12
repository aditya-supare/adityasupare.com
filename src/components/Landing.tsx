import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { BackgroundBeams } from './ui/Background-beams'

const Landing = () => {
  return (
    <div className='pb-20 pt-36'>
        <div className="relative">

      <Spotlight
        className="absolute top-0 left-0 transform -translate-y-48 -translate-x-20 md:-translate-x-40 md:-translate-y-28 h-[120vh] w-[60vw]"
        fill="#ff00aa"
      />


      <Spotlight
        className="absolute top-10 left-full md:left-auto md:-translate-x-40 h-[100vh] w-[70vw]"
        fill="#d440d7" 
      />

      <Spotlight
        className="absolute top-32 left-80 h-[100vh] w-[60vw]"
        fill="#a85fe6"
      />


      <Spotlight
        className="absolute top-52 left-1/3 h-[90vh] w-[50vw]"
        fill="#7c79ff" 
      />


      <Spotlight
        className="absolute top-60 left-2/3 h-[100vh] w-[55vw]"
        fill="#5e9eff" 
      />
      

    </div>


        <div className="h-screen w-full dark:bg-black-100 bg-white  
        dark:bg-grid-white/[0.01] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 ">
        <BackgroundBeams className="absolute inset-0 w-full h-full z-0" />
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>

        <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs 
            text-center text-blue-100 max-w-80'>
              Dynamic Website With Next.js
            </h2>

            <TextGenerateEffect 
              className='text-center text-[40px] md:text-5xl lg:text-6xl'
              words='Making Ideas Feel Alive'
            />

            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
              Hi, I&apos;m Aditya Supare, a Next.js Developer and 2D/3D artist based in India.
            </p>

            <a href='#about'>
              <MagicButton 
               title ="Show my work"
               icon={<FaLocationArrow/>}
               position='right'
               />
            </a>
            {/* <TextGenerateEffect 
            className='text-center text-[20px] md:text-5xl lg:text-5xl'
            words='Some of my Art work'
            /> */}
          </div>
        </div>
    </div>
  )
}

export default Landing
