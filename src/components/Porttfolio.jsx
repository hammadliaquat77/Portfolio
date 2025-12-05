import React, { useState } from 'react'
// import pic from '../assets/express.png';
import ecomerce from '../assets/ecomerce.png';
import dashboard from '../assets/dashboard.png';
import weather from '../assets/weather_app.png';
import Doctor from '../assets/Doctor.png';
import Move from '../assets/move.png';
import Quiz from '../assets/Quiz.jpeg';
import Signal from '../assets/signal.png';
import Budget from '../assets/budjet.jpeg';
import Counter from '../assets/counter.png';
import Calculator from '../assets/calculator.png';
import Todo from '../assets/todo.png';
import Background from '../assets/background.jpeg';
import Toggle from "../assets/Toogle.png"
import Chat from "../assets/Chat-App.jpg"
import Clock from "../assets/Clock.jpg"
import Mobile_ecomerce from "../assets/Mobile_Acce.png"
import Saloon from "../assets/Saloon.png"
import Uk_Odering from "../assets/Ukodering.png"
import Burger from "../assets/BurgerImage.png"
import Resturent from "../assets/Resturent.png"
import Bur from "../assets/Bur.png"

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
    logo: Bur,
    name: "Restaurant Project",
    discription: "Restaurant website Complete FullStack Project",
    live: "https://resturent-app-snowy.vercel.app/",
  },
  {
    id: 2,
    logo: Mobile_ecomerce,
    name: "Mobile Website Full",
    discription: "Mobile e-commerce website with shopping cart",
    live: "https://ahmed-store-one.vercel.app/",
  },
  // {
  //   id: 3,
  //   logo: dashboard,
  //   name: "Admin Dashboard",
  //   discription: "Fully functional admin dashboard with stats & charts",
  //   live: "https://admin-dashboard-tau-three-27.vercel.app/dashboard",
  // },
  {
    id: 3,
    logo: Uk_Odering,
    name: "UK Ordering UI",
    discription: "Food ordering website with add-to-cart & WhatsApp system",
    live: "https://order-uk-mauve.vercel.app/",
  },
  {
    id: 4,
    logo: Saloon,
    name: "Saloon Project",
    discription: "Salon services booking website with modern UI",
    live: "https://salon-website-drab.vercel.app/",
  },
  {
    id: 5,
    logo: weather,
    name: "Weather App",
    discription: "Weather forecast app with real-time API integration",
    live: "https://weather-app-five-olive-41.vercel.app/",
  },
  {
    id: 6,
    logo: Budget,
    name: "Budget App",
    discription: "Track your expenses and manage your budget easily",
    live: "https://budget-tracker-java-script.netlify.app/",
  },
  {
    id: 7,
    logo: Signal,
    name: "Trafic Signal",
    discription: "Traffic light simulation using Next.js",
    live: "https://trafic-signal-light-next-js.vercel.app/",
  },
  {
    id: 8,
    logo: Quiz,
    name: "Quiz App",
    discription: "Interactive quiz app with multiple-choice questions",
    live: "https://quiz-app-react-js-chi.vercel.app/",
  },
  {
    id: 9,
    logo: Toggle,
    name: "Toggle Button",
    discription: "Light & Dark mode toggle button with theme switching",
    live: "https://toggle-light-dark-mode.vercel.app/",
  },
  {
    id: 10,
    logo: Clock,
    name: "Clock",
    discription: "Digital clock showing real-time updates using JavaScript",
    live: "https://hammadliaquat77.github.io/Clock-JS/",
  },
  {
    id: 11,
    logo: Todo,
    name: "Todo List",
    discription: "Simple to-do list app with add and delete task features",
    live: "https://todo-list-javascript-by-hammadliaquat.netlify.app/",
  },
  {
    id: 12,
    logo: ecomerce,
    name: "Landing Page",
    discription: "Simple landing page design for e-commerce",
    live: "https://ecomerce-project-nu.vercel.app/",
  },
  {
    id: 13,
    logo: Burger,
    name: "Burger Website Template",
    discription: "Fast food website with cart system & WhatsApp ordering",
    live: "https://burger-website-one-dun.vercel.app/",
  },
  // {
  //   id: 15,
  //   logo: Doctor,
  //   name: "Doctor Appointments",
  //   discription: "Doctor appointment booking system with scheduling",
  //   live: "https://doctor-appoinment-two.vercel.app/",
  // },
  // {
  //   id: 16,
  //   logo: Chat,
  //   name: "Chat App",
  //   discription: "Real-time chat application built with React and Firebase",
  //   live: "https://chat-app-iota-murex.vercel.app/",
  // },
  {
    id: 14,
    logo: Move,
    name: "Text-Move",
    discription: "Small game project with text moving animations",
    live: "https://text-move-game.vercel.app/",
  },
  {
    id: 15,
    logo: Counter,
    name: "Counter",
    discription: "Simple counter app with increment and decrement functionality",
    live: "https://counter-tasbih-js.netlify.app/",
  },
  {
    id: 16,
    logo: Background,
    name: "Bg Changer",
    discription: "Background color changer with a single button click",
    live: "https://react-bg-changer-three.vercel.app/",
  },
  {
    id: 17,
    logo: Calculator,
    name: "Calculator",
    discription: "Basic calculator with add, subtract, multiply & divide functions",
    live: "https://react-js-calculator-eight.vercel.app/",
  },
];

    const [visible, setVisible] = useState(4);

    return (
        <>
            {/* <div name='Portfolio' className='max-w-screen-2xl mx-auto container px-4 md:px-20 py-16 dark:bg-gray-900 dark:text-white'>
                <h1 className='text-3xl font-bold mb-5 text-center md:text-left'>Portfolio</h1>
                <span className='underline font-semibold '>Features Projects</span>

                <p className='my-5 text-zinc-500 font-semibold'>I have created some projects for my portfolio. Here are some of the projects that I have created.</p>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
                    {cardItems.slice(0, visible).map(({ id, logo, name, discription, live }) => (
                        <div data-aos="flip-left" key={id}
                            className="md:w-[280px] md:h-[400px] border-[2px] my-5 bg-white dark:bg-slate-500 shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden hover:scale-110 duration-300 cursor-pointer"
                        >
                            <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
                                <p className="absolute bottom-6 left-7 text-white text-2xl">{`${id}`}</p>
                            </div>
                            <div className="fill-violet-500">
                                <img src={logo} alt="" className='w-[120px] h-[120px] border-2 rounded-full object-cover' />
                            </div>
                            <h1 className="font-bold text-xl">{name}</h1>
                            <p className="text-sm text-zinc-500 leading-6">
                                {discription}
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
                         
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-end'>
                    {visible < cardItems.length ? (

                        <button onClick={() => setVisible(visible + 4)} className='bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg'>See All</button>
                    ) : (
                        <button onClick={() => setVisible(4)} className='bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg'>See less</button>
                    )
                    }
                </div>
            </div> */}
            <div name='Portfolio' className='max-w-screen-2xl mx-auto container px-4 md:px-20 py-16 bg-white dark:bg-gray-900 dark:text-white'>
    <h1 className='text-3xl font-bold mb-5 text-center md:text-left'>Portfolio</h1>
    <span className='underline font-semibold text-gray-800 dark:text-gray-300'>Features Projects</span>

    <p className='my-5 text-zinc-500 font-semibold dark:text-gray-400'>
        I have created some projects for my portfolio. Here are some of the projects that I have created.
    </p>

    <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
        {cardItems.slice(0, visible).map(({ id, logo, name, discription, live }) => (
            <div key={id}
                data-aos="flip-left"
                className="md:w-[280px] md:h-[400px] border-[2px] my-5 bg-white dark:bg-gray-700 dark:border-gray-600 shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden hover:scale-110 duration-300 cursor-pointer"
            >
                <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
                    <p className="absolute bottom-6 left-7 text-white text-2xl">{id}</p>
                </div>
                <div className="fill-violet-500">
                    <img src={logo} alt={name} className='w-[120px] h-[120px] border-2 rounded-full object-cover' />
                </div>
                <h1 className="font-bold text-xl dark:text-white">{name}</h1>
                <p className="text-sm text-zinc-500 leading-6 dark:text-gray-300">{discription}</p>
                <div className='justify-around space-y-2'>
                    <button
                        onClick={() => window.open(live, '_blank')}
                        className='bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg'
                    >
                        Preview
                    </button>
                </div>
            </div>
        ))}
    </div>

    <div className='flex justify-end'>
        {visible < cardItems.length ? (
            <button onClick={() => setVisible(visible + 4)} className='bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg'>See All</button>
        ) : (
            <button onClick={() => setVisible(4)} className='bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg'>See less</button>
        )}
    </div>
</div>
<hr />
        </>
    )
}

export default Portfolio;
