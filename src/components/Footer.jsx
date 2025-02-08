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
              <a href="https://www.facebook.com/share/1Dj9eMQEZv/" target="_blank">
              <FaFacebook size={24} />
              </a>
              <a href="https://www.linkedin.com/in/hammad-raza77/" target="_blank">
              <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram size={24} />
              </a>
              <a href="https://github.com/hammadliaquat77" target="_blank">
              <FaGithub size={24} />
              </a>
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