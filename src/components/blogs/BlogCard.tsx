import React from 'react'

const BlogCard = (
  // {Img}
) => {
  return (
    <>
      <div className='p-4 shadow-lg'>
        <div className='overflow-hidden'>
          {/* <img src={Img1}
          alt="No Image"
          className='mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110'
           /> */}
          
        </div>
      </div>
      <div className='flx justify-between pt-2 text-slate-600'>
        <p>April 22, 2022</p>
        <p className='line-clamp-1'>By someone</p>
      </div>
      <div>
        <h1 className='line-clamp-2'>
          How to grow your business. How to grow your business. How to grow your business.
        </h1>
        <p className="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, cupiditate.</p>
      </div>
    </>
  )
}

export default BlogCard
