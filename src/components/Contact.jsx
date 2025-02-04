// import axios from 'axios';
// import React from 'react'
// import { useForm } from 'react-hook-form';


// // Getform.com   Use message recive me
// function Contact() {
//     const { register, handleSubmit, watch, formState: { errors } } = useForm();
//     const onSubmit = async (data) => {
//        const userInfo = {
//         name: data.name,
//         email: data.email,
//         message: data.message
//        }

//     try {
//        await  axios.post('https://getform.io/f/bejjqjxa', userInfo);
//        alert('Message sent successfully!');
//         reset();          
//     } catch (error) {
//         console.log(error);

//     }
//     } 
//     return (
//         <>
//             <div name='Contact' className='max-w-screen-2xl mx-auto container px-4 md:px-20 my-16'>
//                 <h1 className='text-3xl font-bold mb-5 text-center md:text-left'>Contact Me</h1>
//                 <p className='mb-10 text-center md:text-left'>Please fill out the form below to contact me.</p>

//                 <div>
//                     <div class="container px-4 mx-auto">
//                         <div class="mx-auto">
//                             <div class="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
//                                 <h2 class="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
//                                 <form 
//                                     // action='https://getform.io/f/bejjqjxa'
//                                     // method='POST' 
//                                     onSubmit={handleSubmit(onSubmit)}>
//                                     <div class="mb-4">
//                                         <label class="block text-gray-800 mb-1" for="name">Your Name</label>
//                                         <input
//                                             class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
//                                             placeholder="Enter your name"
//                                             type="text"
//                                             name='name'
//                                             {...register("name", { required: true })}
//                                         />
//                                         {errors.name && <span>This field is required</span>}
//                                     </div>
//                                     <div class="mb-4">
//                                         <label class="block text-gray-800 mb-1" for="email">Your Email</label>
//                                         <input
//                                             class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
//                                             placeholder="Enter your email"
//                                             name="email"
//                                             id="email"
//                                             type="email"
//                                             {...register("email", { required: true })}
//                                         />
//                                         {errors.email && <span>This field is required</span>}
//                                     </div>
//                                     <div class="mb-4">
//                                         <label class="block text-gray-800 mb-1" for="message"
//                                         >Your Message</label>
//                                         <textarea
//                                             class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
//                                             rows="4"
//                                             placeholder="Enter your message"
//                                             name="message"
//                                             id="message"
//                                             {...register("message", { required: true })}
//                                         ></textarea>
//                                         {errors.message && <span>This field is required</span>}
//                                     </div>
//                                     <button
//                                         class="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
//                                         type="submit"
//                                     >
//                                         Send Message
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//             </div>
//         </>
//     )
// }

// export default Contact








import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function Contact() {
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
        <div name='Contact' className='max-w-screen-2xl mx-auto container px-4 md:px-20 my-16'>
            <h1 className='text-3xl font-bold mb-5 text-center md:text-left'>Contact Me</h1>
            <p className='mb-10 text-center md:text-left'>Please fill out the form below to contact me.</p>

            <div className="container px-4 mx-auto">
                <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1" htmlFor="name">Your Name</label>
                            <input
                                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                placeholder="Enter your name"
                                type="text"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1" htmlFor="email">Your Email</label>
                            <input
                                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                placeholder="Enter your email"
                                type="email"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1" htmlFor="message">Your Message</label>
                            <textarea
                                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
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
