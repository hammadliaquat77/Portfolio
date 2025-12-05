import React from 'react'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Botstrap from '../assets/botstrap.png'
import Js from '../assets/js.png'
import react from '../assets/react.png'
import Next from '../assets/next.png'
import Mongodb from '../assets/mongo.png'
import Tailwind from '../assets/tailwind.png'
import Node_js from '../assets/Node.js.png'
import Express from '../assets/Express.js.png'

import AOS from 'aos';
import 'aos/dist/aos.css';


function Experiance() {

    AOS.init({
              duration: 1000,
              once: false,
              mirror: true,
          });

    const cardItems = [
        {
            id: 1,
            logo: Html,
            name: "Html",
        },
        {
            id: 2,
            logo: Css,
            name: "Css",
        },
        {
            id: 3,
            logo: Js,
            name: "JavaScript",
        },
        {
            id: 4,
            logo: Botstrap,
            name: "Botstrap",
        },
        {
            id: 5,
            logo: Tailwind,
            name: "Tailwind Css",
        },
        {
            id: 6,
            logo: react,
            name: "React.js",
        },
        {
            id: 7,
            logo: Next,
            name: "Next.js",
        },
        {
            id: 8,
            logo: Mongodb,
            name: "MongoDB",
        },
        {
            id: 9,
            logo: Node_js,
            name: "Node.js",
        },
        {
            id: 10,
            logo: Express,
            name: "Express.js",
        },
    ];
    return (
        <>
            <div name='Experiance' className='max-w-screen-2xl mx-auto container px-4 md:px-20 py-16 dark:bg-slate-900 dark:text-white'>
                <h1 className='text-3xl font-bold mb-5 text-center md:text-left'>Experiance</h1>
                <p>I have more than half year of Experiance in below technologies.</p>

                <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>

                    {
                        cardItems.map(({ id, logo, name }) => (
                            <div data-aos="flip-up" key={id}
                                className="md:h-[200px] md:w-[200px] flex flex-col items-center justify-center rounded-full border-[2px] my-5 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden hover:scale-110 duration-300 cursor-pointer dark:bg-gray-800 dark:border-gray-700"
                            >
                                <div className="fill-violet-500">
                                    <img src={logo} alt="" className='w-[150px] rounded-full' />
                                </div>
                                <h1 className="font-bold text-xl text-center dark:text-white">{name}</h1>
                            </div>
                        ))
                    }
                </div>

            </div>
          <hr />
        </>
    )
}

export default Experiance