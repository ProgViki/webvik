import React from 'react'
import HeroImg from "../../assets/desktop-hero.png"

const Hero = () => {
  return (
    <div className='h-[650px] md:h-[500px] bg-gradient-to-r from-violet-950 to-violet-900 pt-32'>
      <section className='container flex flex-col items-center justify-between'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 dark:text-white'>
    <div  
          data-aos="fade-right"
          data-aos-duration="400"
          data-aos-once="true"
          className='flex flex-col items-center gap-4 md:items-start md:text-left justify-center px-6 md:px-12'>
        <h1 className='text-4xl md:text-5xl font-bold text-white text-center md:text-left'>
            We build apps that Get trending on Appworld
        </h1>
        <p className='text-gray-300 text-center md:text-left'>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            
        </p>
        <div className='flex gap-4'>
            <button className='btn-primary'>Get Started</button>
            <button className='btn-outline'>Login</button>

        </div>
    </div>
    <div className='mx-auto p-4 max-w-xs'>
        <img src={HeroImg} alt='banner' className=''/>
    </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
