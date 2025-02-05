// import React from 'react'
// import pic from '../../public/express.png';
// import Doctor from '../../public/Doctor.png';
// import { Link } from 'react-scroll';


// function Porttfolio() {
//     const cardItems = [
//         {
//             id: 1,
//             logo: Doctor,
//             name: "Doctor Appoinments",
//             live: "https://doctor-appoinment-two.vercel.app/"
//         },
//         {
//             id: 2,
//             logo: pic,
//             name: "Express",
//         },
//         {
//             id: 3,
//             logo: pic,
//             name: "ReactJS",
//         },
//         {
//             id: 4,
//             logo: pic,
//             name: "NodeJS",
//         },
//         {
//             id: 5,
//             logo: pic,
//             name: "Python",
//         },
//         {
//             id: 6,
//             logo: pic,
//             name: "Java",
//         },
//     ];

//     return (
//         <>
//             <div name='Portfolio' className='max-w-screen-2xl mx-auto container px-4 md:px-20 my-16'>
//                 <h1 className='text-3xl font-bold mb-5 text-center md:text-left'>Portfolio</h1>
//                 <span className='underline font-semibold '>Features Projects</span>



//                 <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>

//                     {
//                         cardItems.map(({ id, logo, name }) => (
//                             <div key={id}
//                                 className="md:w-[280px] md:h-[400px] border-[2px] my-5 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden hover:scale-110 duration-300 cursor-pointer"
//                             >
//                                 <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
//                                     <p className="absolute bottom-6 left-7 text-white text-2xl">{`0${id}`}</p>
//                                 </div>
//                                 <div className="fill-violet-500">
//                                     <img src={logo} alt="" className='w-[120px] h-[120px] rounded-full' />
//                                 </div>
//                                 <h1 className="font-bold text-xl">{name}</h1>
//                                 <p className="text-sm text-zinc-500 leading-6">
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga
//                                     adipisicing elit
//                                 </p>
//                                 <div className='justify-around space-y-2'>

//                                     <button className='bg-blue-600 text-white font-semibold px-4 py-2  rounded-lg'>Video</button>

//                                     <button className='bg-green-600 text-white font-semibold px-4 py-2 rounded-lg'>Source Code</button>
//                                 </div>
//                             </div>
//                         ))
//                     }
//                 </div>



//             </div>
//             <hr />
//         </>
//     )
// }

// export default Porttfolio

























import React from 'react'
// import pic from '../../public/express.png';
import Doctor from '../../public/Doctor.png';
import Move from '../../public/move.png';
import Quiz from '../../public/Quiz.jpeg';
import Signal from '../../public/signal.png';
import Budget from '../../public/budjet.jpeg';
import Counter from '../../public/counter.png';
import Calculator from '../../public/calculator.png';
import Todo from '../../public/todo.png';
import Background from '../../public/background.jpeg';



function Portfolio() {
    const cardItems = [
        {
            id: 1,
            logo: Doctor,
            name: "Doctor Apoinments",
            live: "https://doctor-appoinment-two.vercel.app/"
        },
        {
            id: 2,
            logo: Move,
            name: "Text-Move",
            live: "https://text-move-game.vercel.app/"

        },
        {
            id: 3,
            logo: Quiz,
            name: "Quiz App",
            live: "https://quiz-app-react-js-chi.vercel.app/"

        },
        {
            id: 4,
            logo: Signal,
            name: "Trafic Signal",
            live: "https://trafic-signal-light-next-js.vercel.app/"

        },
        {
            id: 5,
            logo: Budget,
            name: "Budget App",
            live: "https://budget-tracker-java-script.netlify.app/"

        },
        {
            id: 6,
            logo: Counter,
            name: "Counter",
            live: "https://counter-tasbih-js.netlify.app/"

        },
        {
            id: 7,
            logo: Background,
            name: "Bg Changer",
            live: "https://react-bg-changer-three.vercel.app/"
        },
        {
            id: 8,
            logo: Calculator,
            name: "Calculator",
            live: "https://react-js-calculator-eight.vercel.app/"
        },
        {
            id: 9,
            logo: Todo,
            name: "Todo List",
            live: "https://todo-list-javascript-by-hammadliaquat.netlify.app/"
        },
    ];

    return (
        <>
            <div name='Portfolio' className='max-w-screen-2xl mx-auto container px-4 md:px-20 my-16'>
                <h1 className='text-3xl font-bold mb-5 text-center md:text-left'>Portfolio</h1>
                <span className='underline font-semibold '>Features Projects</span>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
                    {cardItems.map(({ id, logo, name, live }) => (
                        <div key={id}
                            className="md:w-[280px] md:h-[400px] border-[2px] my-5 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden hover:scale-110 duration-300 cursor-pointer"
                        >
                            <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
                                <p className="absolute bottom-6 left-7 text-white text-2xl">{`0${id}`}</p>
                            </div>
                            <div className="fill-violet-500">
                                <img src={logo} alt="" className='w-[120px] h-[120px] border-2 rounded-full' />
                            </div>
                            <h1 className="font-bold text-xl">{name}</h1>
                            <p className="text-sm text-zinc-500 leading-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga
                                adipisicing elit
                            </p>
                            <div className='justify-around space-y-2'>
                                {live ? (
                                    <button
                                        onClick={() => window.open(live, '_blank')}
                                        className='bg-blue-600 text-white font-semibold px-4 py-2  rounded-lg'
                                    >
                                        Preview
                                    </button>
                                ) : (

                                    <button
                                        onClick={() => window.open(live, '_blank')}
                                        className='bg-blue-600 text-white font-semibold px-4 py-2  rounded-lg'
                                    >
                                        Video
                                    </button>
                                )}
                                <button className='bg-green-600 text-white font-semibold px-4 py-2 rounded-lg'>
                                    Source Code
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
        </>
    )
}

export default Portfolio;
