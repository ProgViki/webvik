import React from 'react'
import CountUp from 'react-countup'

const OverviewCounter = () => {
  return (
    <section className='dark:bg-slate-900 container h-12 md:h-32 p-3'>
      <div className='mx-auto my-4 w-full grid grid-cols-4 divide-x divide-slate-700 md:max-w-[800px]
      shadow-lg rounded-lg bg-white -translate-y-10 dark:bg-gray-800 dark:text-white/10 backdrop-blur-lg '>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl'>
          <CountUp end={234} suffix="+" duration={2.75} />
          </h1>
          <h1 className='sm:text-md text-xs md:text-lg '>Clients</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl'>
          <CountUp end={234} suffix="+" duration={2.75} />
          </h1>
          <h1 className='sm:text-md text-xs md:text-lg '>Clients</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl'>
          <CountUp end={234} suffix="+" duration={2.75} />
          </h1>
          <h1 className='sm:text-md text-xs md:text-lg '>Clients</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl'>
          <CountUp end={234} suffix="+" duration={2.75} />
          </h1>
          <h1 className='sm:text-md text-xs md:text-lg '>Clients</h1>
        </div>
      </div>
    </section>
  )
}

export default OverviewCounter
