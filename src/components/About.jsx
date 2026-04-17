import React from 'react'
import pic from '../assets/about.png';


import AOS from 'aos';
import 'aos/dist/aos.css';


function About() {

   AOS.init({
          duration: 1000,
          once: false,
          mirror: true,
      });
  

  return (
    <>
      <div name='About' className='max-w-screen-2xl mx-auto container px-4 md:px-20 py-16 dark:bg-gray-900 dark:text-white'>
        <h1 className='text-3xl font-bold mb-5 text-center md:text-left'>About Us</h1>
        <div className='flex flex-col md:flex-row'>
          <div data-aos="fade-up" className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-1 md:order-1'>
            <p className='text-sm md:text-xl text-justify'>
            <p className='text-sm md:text-xl text-justify'>My name is Hammad Raza, and I am a MERN Stack Developer with a background in BSc Computer Science. I have begun my professional journey in web development, working with core technologies including MongoDB, Express.js, React.js, and Node.js. I also have foundational experience in React Native for mobile application development.

I am passionate about building modern, scalable web applications and continuously improving my technical skills. I am highly motivated to grow as a Full-Stack Developer and contribute effectively to innovative development teams.</p>
            <br />
              </p>
            <br />

          </div>
          {/* Image */}
          <div data-aos="fade-down" className='md:w-1/2 md:ml-48 md:mt-2 order-1 mt-8 flex justify-center md:block'>
            <img src={pic} alt="" className='rounded-full md:h-[350px] md:w-full' />
          </div>
        </div>

      </div>
      <hr />
    </>
  )
}

export default About