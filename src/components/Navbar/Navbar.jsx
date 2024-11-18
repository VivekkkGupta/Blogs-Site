import React from 'react'
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useThemeContext } from '../../contexts/ThemeContext';


function Navbar() {

    const { theme, setTheme, toggleTheme } = useThemeContext()

    return (
        <div className='h-[4rem] max-w-[1240px]'>
            <div className='flex items-center justify-between w-full h-full'>
                <div className='logo text-2xl font-bold tracking-wider cursor-pointer'>Deviv</div>
                <div className='flex gap-10'>
                    <ul className='flex gap-10'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Blogs</a></li>
                        <li><a href='#'>Tutorials</a></li>
                    </ul>
                    <div className='bg-gray-600 w-[1px]'></div>
                    <div className='cursor-pointer my-auto' onClick={toggleTheme} >
                        {
                            theme === 'dark' ?
                                <MdLightMode className='w-5 h-5' />
                                :
                                <MdDarkMode className='w-5 h-5' />
                        }
                    </div>
                    <div className='cursor-pointer'>
                        <FaUserCircle className='w-6 h-6' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar