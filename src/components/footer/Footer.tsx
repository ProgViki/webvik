import React from 'react'
import FooterLinks from './FooterLinks'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {

  const importantLinks = [
    {
      name: "Home",
    },
    {
      name: "About",
    }, 
    {
      name: "Service",
    },
    {
      name: "Login"
    }
  ]

  const Links = [
    {
      name: "Privacy Policy"
    },
    {
      name: "Service ",
    },
    {
      name: "Service "
    },
    {
      name: ""
    }
  ]

  return (
    <footer className='text-white rounded-t-3xl bg-gradient-to-r from-violet-950 to-violet-900'>
      <div className='mx-auto max-w-[1200px] p-4'>
        <div className='px-3 py-8'>

        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:pl-10 col-span-2'>
          <div className='px-4 py-8'>
            <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl'>
              Important Links
            </h1>
            <ul className='flex flex-col gap-3'>
              <FooterLinks links={importantLinks} />
            </ul>
          </div>
          <div className='px-4 py-8'>
            <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl'>
              Links
            </h1>
            <ul className='flex flex-col gap-3'>
              <FooterLinks links={Links} />
            </ul>
          </div>
          <div className='px-4 py-8'>
            <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl'>
              Social Links
            </h1>
            <div>
              <h1>Subscribe to our newsletter</h1>
              <input 
              type='text'
              placeholder='Enter your email'
              className='w-full px-3 py-1 border border-gray-300 rounded-full focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500'
              />
              <div className='flex gap-3 mt-6 items-center '>
                <a href="#" className='duration-200 hover:scale-105'>
                  <FaInstagram className='text-3xl'/>
                </a>
                 <a href="#" className='duration-200 hover:scale-105'>
                  <FaFacebook className='text-3xl'/>
                </a>
                 <a href="#" className='duration-200 hover:scale-105'>
                  <FaLinkedin className='text-3xl'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer copyright section */}
      <div>
        <p>
          Copyright 2021. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
