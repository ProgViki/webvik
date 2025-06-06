import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-navbar text-white">
      <nav className='container flex items-center justify-between h-[70px] py-2'>
        <div className='text-2xl md:text-3xl text-white '>
          <a>
            VIK <span className='inline-block font-bold text-primary'>WEB</span>
          </a>
        </div>
        {/* Desktop Menu Section*/}
        <div>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>
              <div>
                <BiPhoneCall className='text-2xl' />
              </div>
            </li>
            
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
