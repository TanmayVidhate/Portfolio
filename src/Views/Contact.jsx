import React from 'react';
import Form from '../Components/Form';
import email from '.././assets/Email.png';

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
                className="text-white bg-black bg-opacity-30 shadow-xl 
                           p-5 sm:p-8 md:p-16 lg:p-20 xl:p-24
                           my-10 sm:my-14 md:my-20 lg:my-28 xl:my-32
                           rounded-lg overflow-hidden mx-3 sm:mx-5 md:mx-8 lg:mx-16"
            >
                <h2 className={headerStyle}>Contact</h2>

                <div className="flex flex-col  items-center justify-center 
                                gap-8 md:gap-10 lg:gap-14 mt-8 md:mt-12 md:flex-col md:justify-center md:items-center lg:flex-row">

                    {/* Left Side - Form */}
                    <div className="w-full px-2 flex justify-center items-center sm:px-4 md:px-6 md:w-full ">
                        <Form />
                    </div>

                    {/* Right Side - Image */}
                    <div className="w-full md:w-full flex justify-center items-center ">
                        <img
                            src={email}
                            alt="contact"
                            className="
                                max-w-[200px] 
                                sm:max-w-[260px] 
                                md:max-w-[430px] 
                                lg:max-w-[400px] 
                                xl:max-w-[580px]
                                h-auto drop-shadow-lg
                            "
                        />
                    </div>

                </div>
            </div>
        </>
    );
}

export default Contact;
