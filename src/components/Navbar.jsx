import React, { useState } from 'react';
import img from '../../public/icon.jpeg';
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function Navbar() {
    const [menu, SetMenu] = useState(false);
    const navItems = [
        {
            id: 1,
            text: 'Home'
        },
        {
            id: 2,
            text: 'About'
        }, {
            id: 3,
            text: 'Portfolio'
        }, {
            id: 4,
            text: 'Experiance'
        }, {
            id: 5,
            text: 'Contact'
        },
    ]
    return (
        <>
            <div className='max-w-screen-2xl mx-auto container px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
                <div className='flex justify-between items-center h-16 '>
                    <div className='flex space-x-2'>
                        <img src={img} className='h-12 w-12 rounded-full' alt="" />
                        <h1 className='font-semibold text-xl cursor-pointer'>Hammad
                            <span className='text-blue-500'> Raza</span>
                            <p className='text-sm'>Fronted Developer</p>
                        </h1>
                    </div>
                    {/* dekstop Navbar */}
                    <div>
                        <ul className='md:flex hidden space-x-8'>
                            {
                                navItems.map(({ id, text }) => (
                                    <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>{text}</li>
                                ))
                            }

                        </ul>
                        <div onClick={() => SetMenu(!menu)} className='md:hidden'>
                            {menu ? <MdOutlineMenu size={24} /> : <IoMdClose size={24} />}
                        </div>
                    </div>
                </div>

                {/* Mobile Navbar */}
                {
                    !menu && (
                        <div>
                            <ul className='flex flex-col h-screen justify-center items-center md:hidden space-y-3 text-xl'>
                            {
                                navItems.map(({ id, text }) => (
                                    <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>{text}</li>
                                ))
                            }
                            </ul>
                        </div>
                    )
                }


            </div>
        </>
    )
}

export default Navbar