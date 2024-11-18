import React from 'react'
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
function Navbar() {
    return (
        <div className='h-[4rem] max-w-[1240px]'>
            <div className='flex items-center justify-between w-full h-full'>
                <div className='logo'>Deviv</div>
                <div className='flex gap-10'>
                    <ul className='flex gap-10'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Blogs</a></li>
                        <li><a href='#'>Tutorials</a></li>
                    </ul>
                    <div className='text-gray-600'>|</div>
                    <div>
                        <MdLightMode />
                        <MdDarkMode />
                    </div>
                    <div>
                        <FaUserCircle />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar