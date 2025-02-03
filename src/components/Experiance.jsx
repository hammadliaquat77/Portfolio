import React from 'react'
import Html from '../../public/html.png'
import Css from '../../public/css.png'
import Botstrap from '../../public/botstrap.png'
import Js from '../../public/js.png'
import react from '../../public/react.png'
import Next from '../../public/next.png'
import Mongodb from '../../public/mongo.png'
import Tailwind from '../../public/tailwind.png'


function Experiance() {
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
    ];
    return (
        <>
            <div className='max-w-screen-2xl mx-auto container px-4 md:px-20 my-16'>
                <h1 className='text-3xl font-bold mb-5 text-center md:text-left'>Experiance</h1>
                <p>I have more than half year of Experiance in below technologies.</p>

                <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>

                    {
                        cardItems.map(({ id, logo, name }) => (
                            <div key={id}
                                className="md:h-[200px] md:w-[200px] flex flex-col items-center justify-center rounded-full border-[2px] my-5 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden hover:scale-110 duration-300 cursor-pointer"
                            >
                                <div className="fill-violet-500">
                                    <img src={logo} alt="" className='w-[150px] rounded-full' />
                                </div>
                                <h1 className="font-bold text-xl text-center">{name}</h1>
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