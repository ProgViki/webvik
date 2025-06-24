import React, { useState } from 'react'
import { FaBell, FaHome, FaSignOutAlt, FaUser, FaUserCircle } from 'react-icons/fa'

const ResponsiveMenu = ({showMenu }: {showMenu: boolean}) => {
  // const [showMenu, setShowMenu] = useState(false)


  return (
    <div className={`
    ${showMenu ? "-left-[100%]" : "left-0"} h-screen w-[75%] bg-slate-950 fixed top-0 z-50 transition-all duration-500 ease-in-out
    pt-24 pb-6 px-8 flex flex-col justify-between text-white md:hidden
    `}
    >
      <div>
        <div className="flex flex-col justify-start gap-3">
            <FaUserCircle size={50}/>
            <div>
                <h1>Victor Mimi</h1>
                <h1 className='text-sm text-slate-500'>Premium user</h1>
            </div>
      </div>
      <nav className='mt-12'>
        <ul className='flex flex-col gap-4 mt-10'>
            <li className='flex items-center gap-2'>
                <FaHome size={20}/>
                <h1>Home</h1>
            </li>
            <li className='flex items-center gap-2'>
                <FaUser size={20}/>
                <h1>Profile</h1>
            </li>
            <li className='flex items-center gap-2'>
                <FaBell size={20}/>
                <h1>Notification</h1>
            </li>
            <li className='flex items-center gap-2'>
                <FaSignOutAlt size={20}/>
                <h1>Logout</h1>
            </li>
        </ul>
      </nav>
      <div className='footer'>
        <h1>2025 All Right Reserved</h1>
      </div>
    </div>
    </div>
  )
}

export default ResponsiveMenu
