import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {

   AOS.init({
             duration: 1000,
             once: false,
             mirror: true,
         });

    const { register, handleSubmit, reset, formState: { errors } } = useForm(); // ✅ Reset function added here

    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message
        };

        try {
            await axios.post('https://getform.io/f/bejjqjxa', userInfo);
            toast.success('Message sent successfully!');
            reset(); // ✅ Reset input fields after submission
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong')
        }
    };

    return (
        <div name='Contact' className='max-w-screen-2xl mx-auto container px-4 md:px-20 py-16 dark:bg-gray-900 dark:text-white'>
            <h1 className='text-3xl font-bold mb-5 text-center md:text-left'>Contact Me</h1>
            <p className='mb-10 text-center md:text-left'>Please fill out the form below to contact me.</p>

            <div data-aos="zoom-in-up" className="container px-4 mx-auto">
                <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-700">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-white">Contact Us</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1 dark:text-white" htmlFor="name">Your Name</label>
                            <input
                                className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                placeholder="Enter your name"
                                type="text"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1 dark:text-white" htmlFor="email">Your Email</label>
                            <input
                                className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                placeholder="Enter your email"
                                type="email"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1 dark:text-white" htmlFor="message">Your Message</label>
                            <textarea
                                className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                rows="4"
                                placeholder="Enter your message"
                                {...register("message", { required: true })}
                            ></textarea>
                            {errors.message && <span className="text-red-500">This field is required</span>}
                        </div>
                        <button
                            className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
