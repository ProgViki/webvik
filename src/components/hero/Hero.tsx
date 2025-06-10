import React from 'react'

const Hero = () => {
  return (
    <div className='h-[650px] md:h-[500px] bg-gradient-to-r from-violet-950 to-violet-900 pt-20'>
      <section className='container flex flex-col items-center justify-between'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 dark:text-white'>

    <div className='flex flex-col items-center gap-4 md:items-start md:text-left justify-center'>
        <h1 className='text-4xl md:text-5xl font-bold text-white'>
            We build apps that Get trending on Appworld
        </h1>
        <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            
        </p>
        <div className='flex gap-4'>
            <button className='btn-primary'>Get Started</button>
            <button className='btn-outline'>Login</button>

        </div>
    </div>
    <div>
        <img src='Banner' alt='banner'/>
    </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
