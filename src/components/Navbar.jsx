// import React, { useState } from 'react';
// import img from '../../public/icon.jpeg';
// import { MdOutlineMenu } from "react-icons/md";
// import { IoMdClose } from "react-icons/io";
// import { Link } from "react-scroll";

// function Navbar() {
//     const [menu, SetMenu] = useState(false);
//     const navItems = [
//         {
//             id: 1,
//             text: 'Home'
//         },
//         {
//             id: 2,
//             text: 'About'
//         }, {
//             id: 3,
//             text: 'Portfolio'
//         }, {
//             id: 4,
//             text: 'Experiance'
//         }, {
//             id: 5,
//             text: 'Contact'
//         },
//     ]
//     return (
//         <>
//             <div className='max-w-screen-2xl mx-auto container px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
//                 <div className='flex justify-between items-center h-16 '>
//                     <div className='flex space-x-2'>
//                         <img src={img} className='h-12 w-12 rounded-full' alt="" />
//                         <h1 className='font-semibold text-xl cursor-pointer'>Hammad
//                             <span className='text-blue-500'> Raza</span>
//                             <p className='text-sm'>Fronted Developer</p>
//                         </h1>
//                     </div>
//                     {/* dekstop Navbar */}
//                     <div>
//                         <ul className='md:flex hidden space-x-8'>
//                             {
//                                 navItems.map(({ id, text }) => (
//                                     <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
//                                   <Link to={text}
//                                         smooth={true}
//                                         duration={500}
//                                         offset={-70}
//                                         activeClass='active'
//                                   >{text}</Link>  
//                                     </li>
//                                 ))
//                             }

//                         </ul>
//                         <div onClick={() => SetMenu(!menu)} className='md:hidden'>
//                             {menu ? <MdOutlineMenu size={24} /> : <IoMdClose size={24} />}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Mobile Navbar */}
//                 {
//                     !menu && (
//                         <div className='bg-white'>
//                             <ul className='flex flex-col h-screen justify-center items-center md:hidden space-y-3 text-xl'>
//                             {
//                                 navItems.map(({ id, text }) => (
//                                     <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
//                                         <Link to={text}
//                                          onClick={() => SetMenu(!menu)}
//                                         smooth={true}
//                                         duration={500}
//                                         offset={-70}
//                                         activeClass='active'
//                                     >{text}</Link>  
//                                         </li>
//                                 ))
//                             }
//                             </ul>
//                         </div>
//                     )
//                 }


//             </div>
//         </>
//     )
// }

// export default Navbar






import React, { useContext, useState } from 'react';
import img from '../../public/icon.jpeg';
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { MdLightMode, MdDarkMode } from "react-icons/md"; 
import { Link } from "react-scroll";

import { DarkModeContext } from '../context/DarkModeContext';

function Navbar() {

    const { darkMode, setDarkMode } = useContext(DarkModeContext); // ✅ object destructure

    const [menu, SetMenu] = useState(false);

    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'About' },
        { id: 3, text: 'Portfolio' },
        { id: 4, text: 'Experience' },
        { id: 5, text: 'Contact' },
    ];

    return (
        <div className='max-w-screen-2xl mx-auto container px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white  transition-colors duration-300'>
            <div className='flex justify-between items-center h-16'>
                {/* Logo */}
                <div className='flex space-x-2 items-center'>
                    <img src={img} className='h-12 w-12 rounded-full' alt="Logo" />
                    <div>
                        <h1 className='font-semibold text-xl cursor-pointer text-black dark:text-white'>
                            Hammad <span className='text-blue-500'>Raza</span>
                        </h1>
                        <p className='text-sm text-gray-600 dark:text-gray-300'>Frontend Developer</p>
                    </div>
                </div>

                {/* Desktop Navbar */}
                <div className='flex items-center space-x-8'>
                    <ul className='md:flex hidden space-x-8'>
                        {navItems.map(({ id, text }) => (
                            <li key={id} className='hover:scale-105 duration-200 cursor-pointer text-black dark:text-white'>
                                <Link to={text} smooth={true} duration={500} offset={-70}>{text}</Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Dark Mode Toggle */}
                    <button 
                        onClick={() => setDarkMode(!darkMode)} 
                        className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 md:block hidden'
                    >
                        {darkMode ? <MdLightMode size={24} className='text-yellow-500' /> : <MdDarkMode size={24} className='text-gray-700 dark:text-gray-300' />}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <div onClick={() => SetMenu(!menu)} className='md:hidden'>
                        {menu ? <IoMdClose size={24} /> : <MdOutlineMenu size={24} />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menu && (
                <div className='bg-white dark:bg-gray-900 transition-colors duration-300'>
                    <ul className='flex flex-col h-screen justify-center items-center md:hidden space-y-3 text-xl'>
                        {navItems.map(({ id, text }) => (
                            <li key={id} className='hover:scale-105 duration-200 cursor-pointer text-black dark:text-white'>
                                <Link to={text} onClick={() => SetMenu(false)} smooth={true} duration={500} offset={-70}>{text}</Link>
                            </li>
                        ))}
                        <li>
                            <button onClick={() => setDarkMode(!darkMode)} className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200'>
                                {darkMode ? <MdLightMode size={24} className='text-yellow-500' /> : <MdDarkMode size={24} className='text-gray-700 dark:text-gray-300' />}
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
