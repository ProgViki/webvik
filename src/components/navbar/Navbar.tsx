import React, { useEffect, useState } from 'react';
import { BiPhoneCall, BiSolidMoon, BiSolidSun } from 'react-icons/bi';
import { FaCaretDown } from 'react-icons/fa';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  //   document.documentElement.classList.toggle('dark');
  // };

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
    <header className="bg-navbar text-white">
      <nav className="container flex items-center justify-between h-[70px] py-2">
        {/* Logo */}
        <div className="text-2xl md:text-3xl">
          <a href="#">
            VIK <span className="inline-block font-bold text-primary">WEB</span>
          </a>
        </div>

        {/* Desktop Menu Section */}
        <ul className="flex items-center gap-6">
          {/* Home Dropdown */}
          <li className="relative group cursor-pointer">
            <a href="#" className="flex items-center gap-1">
            Home {" "}
              <span>
                <FaCaretDown className='transition-all duration-300 group-hover:rotate-180' />
              </span>
            </a>
              <div className='className="absolute -left-9 z-[99999] hidden group-hover:block bg-white text-black mt-48 shadow-md rounded-b-3xl w-[150px] p-2'>
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
            <div className='className="absolute left-0 z-[99999] hidden group-hover:block bg-white text-black mt-140 shadow-md rounded-b-3xl w-full p-2'>
              <div className='grid grid-cols-3 gap-5'>
                <div className='overflow-hidden'>
                  <img src="https://picsum.photos/200" alt="not found" 
                  className='max-h-[300px] w-full rounded-b-3xl object-fill'
                  />
                </div>
                {/* <h3>Development</h3>
                <ul>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Web Design</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Development</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">SEO</li>
            </ul> */}
              <div className='col-span-2'>
                <h1 className='pb-1 text-2xl font-semibold'>Best Selling</h1>
                <p className='text-sm text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Dolore provident esse quos reprehenderit numquam iste fugit 
                  aut est odit dignissimos explicabo facilis maxime modi consequatur
                   laboriosam perspiciatis rerum atque quod, libero autem corrupti optio? Ducimus necessitatibus consequatur incidunt expedita tenetur doloremque esse eos qui sint accusantium a, sunt nulla delectus iusto beatae ullam sit animi odit assumenda exercitationem! Ullam architecto illum, ab tempore sapiente molestias, cum minima deleniti, repellendus expedita tenetur explicabo ea dolorum dicta possimus nisi et atque! Exercitationem inventore eum delectus excepturi aperiam consequatur sequi officia ipsum molestiae
                   expedita commodi, ad vitae vel corrupti neque dicta, vero quo.
                   <div className='grid grid-cols-3 mt-4'>
                    <div>
                       <h1>Development</h1>
                <ul>
              <li className="px-4 py-2 text-black/70 hover:text-primary cursor-pointer">Web Development</li>
              <li className="px-4 py-2 text-black/70 hover:text-primary cursor-pointer">Mobile Development</li>
              <li className="px-4 py-2 text-black/70 hover:text-primary cursor-pointer">Software Development</li>
            </ul>
                    </div>
                    <div>
                       <h1>Development</h1>
                <ul>
              <li className="px-4 py-2 text-black/70 hover:text-primary cursor-pointer">Web Development</li>
              <li className="px-4 py-2 text-black/70 hover:text-primary cursor-pointer">Mobile Development</li>
              <li className="px-4 py-2 text-black/70 hover:text-primary cursor-pointer">Software Development</li>
            </ul>
                    </div>
                    <div>
                      <img 
                      src="https://picsum.photos/180" 
                      alt="not found" />
                    </div>
                   </div>
                   </p>
              </div>
              </div>
              
              <div className='third'>
                <img src="" alt="pix" />
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
          </div>
        </ul>
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
          {showMenu ? <HiMenuAlt1 
          className='cursor-pointer transition-all'
          /> : <HiMenuAlt3 
          className='cursor-pointer transition-all'
          size={30}
          onClick={toggleMenu} />}
          </div>
      </nav>
    </header>
    // <ResponsiveMenu showMenu={showMenu} />
  );
};

export default Navbar;
