import React from 'react'

function Contact() {
    return (
        <>
            <div className='max-w-screen-2xl mx-auto container px-4 md:px-20 my-16'>
                <h1 className='text-3xl font-bold mb-5 text-center md:text-left'>Contact Me</h1>
                <p className='mb-10'>Please fill out the form below to contact me.</p>

                <div>
                    <div class="container px-4 mx-auto">
                        <div class="mx-auto">
                            <div class="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
                                <h2 class="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                                <form>
                                    <div class="mb-4">
                                        <label class="block text-gray-800 mb-1" for="name">Your Name</label>
                                        <input
                                            class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                            placeholder="Enter your name"
                                            type="text"
                                        />
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-gray-800 mb-1" for="email">Your Email</label>
                                        <input
                                            class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                            placeholder="Enter your email"
                                            name="email"
                                            id="email"
                                            type="email"
                                        />
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-gray-800 mb-1" for="message"
                                        >Your Message</label
                                        >
                                        <textarea
                                            class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                            rows="4"
                                            placeholder="Enter your message"
                                            name="message"
                                            id="message"
                                        ></textarea>
                                    </div>
                                    <button
                                        class="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
                                        type="submit"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Contact