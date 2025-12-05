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
      <div name='About' className='max-w-screen-2xl mx-auto container px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-5 text-center md:text-left'>About Us</h1>
        <div className='flex flex-col md:flex-row'>
          <div data-aos="fade-up" className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-1 md:order-1'>
            <p className='text-sm md:text-xl text-justify'>
            <p className='text-sm md:text-xl text-justify'>My name is Hammad Liaquat, and I am a Mern Stack Developer with education up to the BSC Computer Science. I have started my career as a Mern Stack Developer and have worked with several essential technologies required for the role, including.
              I have some experience with React Native. I am eager to grow and plan to become a Full-Stack Developer in the near future.:</p>
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