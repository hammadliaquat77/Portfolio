import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

import pic from '../../public/express.png';
import Hammad from '../../public/HammadSocial.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';



function Home() {

    AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
    });

    return (
        <>
            <div name='Home' className='max-w-screen-2xl mx-auto container px-4 md:px-20 my-20 dark:bg-gray-900 dark:text-white'>
                <div className='flex flex-col md:flex-row'>
                    <div data-aos="fade-right" className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome In My PortFolio</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello, I'm a</h1>
                            {/* <span className='text-red-700 font-bold '>Developer</span> */}
                            <ReactTyped
                                className='text-red-700 font-bold'
                                strings={["Developer", "Programer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />

                        </div>
                        <br />
                        <p className='text-sm md:text-xl text-justify'>
                            My name is Hammad Liaquat, and I am a Frontend Developer with education up to the BSC Computer Science. I have started my career as a Frontend Developer and have worked with several essential technologies required for the role, including.
                        </p>
                        <br />

                        {/*Social Media Icons  */}
                        <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
                            <div className="  space-y-2">
                                <h1 className="font-bold text-center ">Available on</h1>
                                <ul className="flex space-x-5">
                                    <li>
                                        <a href="https://www.facebook.com/share/1Dj9eMQEZv/" target="_blank">
                                            <FaFacebook className="text-2xl cursor-pointer" target="_blank" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/hammad-raza77/" target="_blank">
                                            <FaLinkedin className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <FaInstagramSquare className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/hammadliaquat77" target="_blank">
                                            <FaGithub className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className=" space-y-2">
                                <h1 className="font-bold text-center">Currently working on</h1>
                                <div className="flex space-x-5">
                                    <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                                    <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                                    <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                                    <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                                </div>
                            </div>
                        </div>


                    </div>
                    {/* Image */}
                    <div data-aos="fade-left" className='md:w-1/2  md:ml-48 md:mt-20 order-1 mt-8'>
                        <img src={Hammad} alt="" className='rounded-full md:h-[450px] md:w-[450px]' />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Home