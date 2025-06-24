import React from 'react'

interface Type {
  reverse: boolean
}
const BannerDetails = ({ reverse }: Type) => {
  return (
    <section className='bg-slate-100 dark:bg-slate-900 dark:text-white px-6 md:px-12'>
      <div className='container flex flex-col items-center justify-center py-10 md:h-[500px] '>
        <div className='grid grid-cols-1 items-center gap-4 md:grid-cols-2'>
            <div className={`grid grid-cols-1 items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                    reverse ? "md:order-last" : ""
                    }`}>
                <h1 className='text-2xl md:text-4xl'>We build apps trending on AppWorld</h1>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nesciunt ullam recusandae consequuntur culpa,
                   voluptatum libero deserunt cum earum voluptas.
                </p>
                <div>
                  <ul className='flex list-inside list-disc flex-col gap-2 '>
                    <li className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui quisquam ullam rem nulla. Error.</li>
                    <li className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui quisquam ullam rem nulla. Error.</li>
                    <li className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui quisquam ullam rem nulla. Error.</li>
                  </ul>
                </div>
            </div>
            {/* img container */}
            <div>
              <img src="https://picsum.photos/400/300" alt="not found" className='mx-auto w-full md:max-w-[400px]'/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default BannerDetails
