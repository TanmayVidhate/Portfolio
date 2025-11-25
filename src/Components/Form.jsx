import React, { useRef } from 'react';


import emailjs from '@emailjs/browser';

const Form = ({ toast, Toaster }) => {
    const form = useRef();

    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_1780f7r', 'template_tqm3xq8', form.current, {
                publicKey: 'AVVfdM55Qvc_HKV1q',
            })
            .then(
                () => {
                    toast.success('Successfully created!');

                    //Clear input values after submission
                    nameRef.current.value = "";
                    emailRef.current.value = "";
                    messageRef.current.value = "";
                },
                (error) => {
                    toast.error('FAILED...', error.text);
                },
            );
    };

    return (
        <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full max-w-lg bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-xl text-white space-y-6"
        >
            {/* NAME */}
            <div className="flex flex-col">
                <label className="text-lg mb-1">Name</label>
                <input
                    type="text"
                    name="name"
                    ref={nameRef}
                    className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 
                 focus:outline-none focus:border-[#8FA5FF] focus:ring-2 focus:ring-[#8FA5FF] 
                 text-white placeholder-gray-200"
                    placeholder="Enter your name"
                    required
                />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col">
                <label className="text-lg mb-1">Email</label>
                <input
                    type="email"
                    name="email"
                    ref={emailRef}
                    className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 
                 focus:outline-none focus:border-[#8FA5FF] focus:ring-2 focus:ring-[#8FA5FF] 
                 text-white placeholder-gray-200"
                    placeholder="Enter your email"
                    required
                />
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col">
                <label className="text-lg mb-1">Message</label>
                <textarea
                    name="message"
                    ref={messageRef}
                    rows="4"
                    className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 
                 focus:outline-none focus:border-[#8FA5FF] focus:ring-2 focus:ring-[#8FA5FF] 
                 text-white placeholder-gray-200 resize-none"
                    placeholder="Write your message..."
                    required
                ></textarea>
            </div>

            {/* SEND BUTTON */}
            <button
                type="submit"
                className="w-full bg-[#465697] hover:bg-[#5f6dc4] transition duration-300 
               py-3 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg"
            >
                Send Message
            </button>
            <Toaster />
        </form>

    );
};

export default Form;