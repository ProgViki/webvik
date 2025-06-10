import React from 'react'
import BlogCard from './BlogCard'

const Blogs = () => {
  return (
    <>
      <section className='container mb-10 py-8'>
        <h1 className='mb-8 border-l-8 py2 pl2 text-center text-3xl font-bold'>Our Latest Blogs</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
          {/* <BlogCard /> */}
        </div>
      </section>
      <section>
        <p>second section</p>
      </section>
    </>
  )
}

export default Blogs
