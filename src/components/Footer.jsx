import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
      {/* <div className='max-w-screen-2xl mx-auto container px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-5 text-center md:text-left'>Footer</h1>
     </div> */}
      <hr />
      <footer>
        <div className='max-w-screen-2xl mx-auto container px-4 md:px-20 my-16'>
          <div className='flex justify-center items-center flex-col'>
            <div className='flex space-x-4'>
              <FaFacebook size={24} />
              <FaLinkedin size={24} />
              <FaInstagram size={24} />
              <FaGithub size={24} />
            </div>
            <div className='flex flex-col items-center mt-8 border-t border-gray-700 pt-8'>
              <p className='text-center'>&copy; 2024 Your Company. All rights reserved.</p>
              <p className='text-center'>hammadraza9391@gmail.com</p>
              <p className="text-sm ">Supportive Partner ❤️ Hammad Raza</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer