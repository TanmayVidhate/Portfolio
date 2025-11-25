import React from 'react'
import Form from '../Components/Form'

import email from '.././assets/Email.png'

function Contact() {

    const headerStyle =
        "text-2xl md:text-4xl font-bold mb-6 relative w-fit " +
        "after:content-[''] after:block after:h-[3px] after:w-0 after:bg-[#8FA5FF] " +
        "after:transition-all after:duration-300 hover:after:w-full " +
        "transition-all duration-300 hover:text-[#8FA5FF] hover:-translate-y-1";

    return (
        <>
            <div
                id="Contact"
                className="text-white bg-black bg-opacity-30 shadow-xl p-12 my-20 rounded-lg overflow-hidden md:p-24 md:mx-8"
            >
                <h2 className={headerStyle}>Contact</h2>

                <div className="flex flex-col md:flex-row gap-5 mt-10">

                    {/* Left Side - Form */}
                    <div className="w-full md:w-1/2">
                        <Form />
                    </div>

                    {/* Right Side - Image */}
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <img src={email} alt="contact" className="max-w-full h-auto" />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Contact