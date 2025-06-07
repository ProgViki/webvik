import React from 'react'

const BannerDetails = () => {
  return (
    <section className='bg-slate-100 dark:bg-slate-900 '>
      <div className='container flex flex-col items-center justify-center py-10 md:h-[500px] '>
        <div className='grid grid-cols-1 items-center gap-4 md:grid-cols-2'>
            <div>
                <h1 className='text-2xl md:text-4xl'>We build apps trending on AppWorld</h1>
            </div>
        </div>
      </div>
    </section>
  )
}

export default BannerDetails
