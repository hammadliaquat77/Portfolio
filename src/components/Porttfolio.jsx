import React from 'react'
import pic from '../../public/express.png';

function Porttfolio() {
    const cardItems = [
        {
            id: 1,
            logo: pic,
            name: "MongoDB",
        },
        {
            id: 2,
            logo: pic,
            name: "Express",
        },
        {
            id: 3,
            logo: pic,
            name: "ReactJS",
        },
        {
            id: 4,
            logo: pic,
            name: "NodeJS",
        },
        {
            id: 5,
            logo: pic,
            name: "Python",
        },
        {
            id: 6,
            logo: pic,
            name: "Java",
        },
    ];

    return (
        <>
            <div name='Portfolio' className='max-w-screen-2xl mx-auto container px-4 md:px-20 my-16'>
                <h1 className='text-3xl font-bold mb-5 text-center md:text-left'>Portfolio</h1>
                <span className='underline font-semibold '>Features Projects</span>



                <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>

                    {
                        cardItems.map(({ id, logo, name }) => (
                            <div key={id}
                                className="md:w-[280px] md:h-[400px] border-[2px] my-5 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden hover:scale-110 duration-300 cursor-pointer"
                            >
                                <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
                                    <p className="absolute bottom-6 left-7 text-white text-2xl">{`0${id}`}</p>
                                </div>
                                <div className="fill-violet-500 w-[120px] h-[120px]">
                                    <img src={logo} alt="" />
                                </div>
                                <h1 className="font-bold text-xl">{name}</h1>
                                <p className="text-sm text-zinc-500 leading-6">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga
                                    adipisicing elit
                                </p>
                                <div className='justify-around space-y-2'>
                                    <button className='bg-blue-600 text-white font-semibold px-4 py-2  rounded-lg'>Video</button>
                                    <button className='bg-green-600 text-white font-semibold px-4 py-2 rounded-lg'>Source Code</button>
                                </div>
                            </div>
                        ))
                    }
                </div>



            </div>
            <hr />
        </>
    )
}

export default Porttfolio