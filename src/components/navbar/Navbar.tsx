import React, { useEffect, useState } from 'react';
import { BiPhoneCall, BiSolidMoon, BiSolidSun } from 'react-icons/bi';
import { FaCaretDown } from 'react-icons/fa';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import { IoMdArrowDropdown } from 'react-icons/io';
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const [showMenu, setShowMenu] = useState(false);
  const element = document.documentElement;
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  );

  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.removeItem('theme')
    }
    
  }, [theme]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
    <header className="bg-navbar z-[50] w-full shadow-md fixed text-white border-b-[1px] border-primary px-6 md:px-12">
      <nav className="container flex items-center justify-between h-[70px] py-2">
        {/* Logo */}
        <div className="text-2xl md:text-3xl">
          <a href="#">
            WEB <span className="inline-block font-bold text-primary">VIK</span>
          </a>
        </div>

        {/* Desktop Menu Section */}
        <div className="hidden md:block ">
          <ul className="flex items-center gap-10">
          {/* Home Dropdown */}
          <li className="relative group cursor-pointer">
            <a href="#" className="flex items-center gap-1">
            Home {" "}
              <span>
                <FaCaretDown className='transition-all duration-300 group-hover:rotate-180' />
              </span>
            </a>
              <div className='className="absolute top-full -left-9 z-[99999] hidden group-hover:block bg-white text-black mt-48 shadow-md rounded-b-3xl w-[150px] p-2'>
                <ul className="space-y-3">
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Services</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">About Us</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Privacy Policy</li>
                </ul>
            </div>
          </li>

          {/* Services Dropdown */}
          <li className="relative group cursor-pointer">
            <a href="#" className="flex items-center gap-1 h-[72px]">
              Services {" "}
              <span>
                <FaCaretDown className='transition-all duration-300 group-hover:rotate-180' />
              </span>
              {/* <IoMdArrowDropdown /> */}
            </a>
           <div className="absolute top-full -left-159 right-0 z-[99999] hidden group-hover:block bg-white text-black shadow-2xl rounded-b-3xl w-screen p-6 border-t border-primary">
                <div className='max-w-7xl'>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Left Image */}
    <div className="hidden md:block">
      <img src="https://picsum.photos/200" alt="Services" className="w-full h-auto rounded-2xl object-cover" />
    </div>

    {/* Center Text Content */}
    <div className="md:col-span-2">
      <h2 className="text-2xl font-bold mb-2">Best Selling Services</h2>
      <p className="text-sm text-slate-600 mb-4">
        We provide industry-standard solutions in software, mobile, and web development to help your business grow and innovate.
      </p>

      <div className="grid grid-cols-2 gap-6 text-sm">
        <div>
          <h3 className="font-semibold text-primary mb-2">Development</h3>
          <ul>
            <li className="py-1 hover:text-primary cursor-pointer">Web Development</li>
            <li className="py-1 hover:text-primary cursor-pointer">Mobile Development</li>
            <li className="py-1 hover:text-primary cursor-pointer">Software Development</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-primary mb-2">Design</h3>
          <ul>
            <li className="py-1 hover:text-primary cursor-pointer">UI/UX Design</li>
            <li className="py-1 hover:text-primary cursor-pointer">Branding</li>
            <li className="py-1 hover:text-primary cursor-pointer">Prototyping</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>

          </li>

          {/* About Us */}
          <li className="hover:text-primary transition-colors duration-200">
            <a href="/about">About Us</a>
          </li>

          {/* Contact Icon */}
          <li className="hover:text-primary flex">
            <div className="flex items-center gap-4">
              <BiPhoneCall className='text-2xl h-[40px] w-[40px] bg-primary text-white hover:bg-primary/90 rounded-full p-2 '/>
            </div>
            <div>
              <p>Call us on</p>
              <p>
                <a href="tel:+234-7032375614">+234-7032375614</a>
              </p>
            </div>
          </li>

          {/* Theme Toggle */}
          {/* <li className="text-xl hover:text-primary cursor-pointer" 
          // onClick={toggleTheme}
          >
            <FaMoon />
          </li> */}

          {/* Light and Dark Mode Switcher */}
          
          <div className='flex items-center gap-4 '>
            {/* {theme === "dark" ? ( */}
              {/* <li className="text-xl hover:text-primary cursor-pointer" > */}
                {/* <BiSolidSun onClick={() => setTheme("light")}/> */}
                {/* <BiSolidSun onClick={() => setTheme("light")}/> */}

              {/* </li> */}
            {/* ) : ( */}
              {/* <li className="text-xl hover:text-primary cursor-pointer"> */}
                {/* <BiSolidMoon onClick={() => setTheme("dark")}/> */}
                {/* <BiSolidMoon onClick={() => setTheme("dark")}/> */}
              {/* </li>)} */}
              <li onClick={toggleTheme} className="text-xl cursor-pointer hover:text-primary">
                  {theme === "dark" ? <BiSolidSun /> : <BiSolidMoon />}
              </li>
          </div>
        </ul>
        </div>
                {/* mobile screen section */}
        <div className='flex items-center gap-4 md:hidden '>
            {
            theme === "dark" ? (
              <li className="text-xl hover:text-primary cursor-pointer" >
                <BiSolidSun onClick={() => setTheme("light")}/>
              </li>
            ) : (
              <li className="text-xl hover:text-primary cursor-pointer">
                <BiSolidMoon onClick={() => setTheme("dark")}/>
              </li>
            )
          }

          {/* Mobile Dropdowns */}
          {showMenu ? (<HiMenuAlt1 
          onClick={toggleMenu}
          className='cursor-pointer transition-all'
          />) : (<HiMenuAlt3 
          className='cursor-pointer transition-all'
          size={30}
          onClick={toggleMenu} />)}
          </div>
      </nav>
    </header>
    <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
