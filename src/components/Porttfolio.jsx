import React from 'react'
// import pic from '../../public/express.png';
import ecomerce from '../../public/ecomerce.png';
import dashboard from '../../public/dashboard.png';
import weather from '../../public/weather_app.png';
import Doctor from '../../public/Doctor.png';
import Move from '../../public/move.png';
import Quiz from '../../public/Quiz.jpeg';
import Signal from '../../public/signal.png';
import Budget from '../../public/budjet.jpeg';
import Counter from '../../public/counter.png';
import Calculator from '../../public/calculator.png';
import Todo from '../../public/todo.png';
import Background from '../../public/background.jpeg';
import Toggle from "../../public/Toogle.png"
import Chat from "../../public/Chat-App.jpg"
import Clock from "../../public/Clock.jpg"
import Ecomerce from "../../public/Ecomerce.jpg"
import Resturent from "../../public/resturent.png"
import Saloon from "../../public/Saloon.png"

import AOS from 'aos';
import 'aos/dist/aos.css';


function Portfolio() {

     AOS.init({
              duration: 1000,
              once: false,
              mirror: true,
          });
      

    const cardItems = [
        {
            id: 1,
            logo: ecomerce,
            name: "Ecomerce Landing Page",
            live: "https://ecomerce-project-nu.vercel.app/"
        },
        {
            id: 2,
            logo: Resturent,
            name: "Resturent Project",
            live: "https://resturentwebsites.netlify.app/"
        },
        {
            id: 3,
            logo: Saloon,
            name: "Saloon Project",
            live: "https://salon-website-drab.vercel.app/"
        },
        {
            id: 4,
            logo: dashboard,
            name: "Admin Dashboard",
            live: "https://admin-dashboard-tau-three-27.vercel.app/dashboard"
        },
        {
            id: 5,
            logo: weather,
            name: "Weather App",
            live: "https://weather-app-five-olive-41.vercel.app/"
        },
        {
            id: 6,
            logo: Doctor,
            name: "Doctor Apoinments",
            live: "https://doctor-appoinment-two.vercel.app/"
        },
        {
            id: 7,
            logo: Move,
            name: "Text-Move",
            live: "https://text-move-game.vercel.app/"

        },
        {
            id: 8,
            logo: Quiz,
            name: "Quiz App",
            live: "https://quiz-app-react-js-chi.vercel.app/"

        },
        {
            id: 9,
            logo: Signal,
            name: "Trafic Signal",
            live: "https://trafic-signal-light-next-js.vercel.app/"

        },
        {
            id: 10,
            logo: Budget,
            name: "Budget App",
            live: "https://budget-tracker-java-script.netlify.app/"

        },
        {
            id: 11,
            logo: Counter,
            name: "Counter",
            live: "https://counter-tasbih-js.netlify.app/"

        },
        {
            id: 12,
            logo: Background,
            name: "Bg Changer",
            live: "https://react-bg-changer-three.vercel.app/"
        },
        {
            id: 13,
            logo: Calculator,
            name: "Calculator",
            live: "https://react-js-calculator-eight.vercel.app/"
        },
        {
            id: 14,
            logo: Todo,
            name: "Todo List",
            live: "https://todo-list-javascript-by-hammadliaquat.netlify.app/"
        },
        {
            id: 15,
            logo: Toggle,
            name: "Toggle Button",
            live: "https://toggle-light-dark-mode.vercel.app/"
        },
        {
            id: 16,
            logo: Chat,
            name: "Chat App",
            live: "https://chat-app-iota-murex.vercel.app/"
        },
        {
            id: 17,
            logo: Clock,
            name: "Clock",
            live: "https://hammadliaquat77.github.io/Clock-JS/"
        },
        {
            id: 18,
            logo: Ecomerce,
            name: "Ecomerce Cards",
            live: "https://hammadliaquat77.github.io/Ecommerce-Cards-project/"
        },
        
    ];

    return (
        <>
            <div name='Portfolio' className='max-w-screen-2xl mx-auto container px-4 md:px-20 my-16'>
                <h1 className='text-3xl font-bold mb-5 text-center md:text-left'>Portfolio</h1>
                <span className='underline font-semibold '>Features Projects</span>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
                    {cardItems.map(({ id, logo, name, live }) => (
                        <div data-aos="flip-left" key={id}
                            className="md:w-[280px] md:h-[400px] border-[2px] my-5 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden hover:scale-110 duration-300 cursor-pointer"
                        >
                            <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
                                <p className="absolute bottom-6 left-7 text-white text-2xl">{`${id}`}</p>
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
