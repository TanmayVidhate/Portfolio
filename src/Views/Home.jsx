import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import imag1 from "../assets/hero-img.png";

function Home() {

    const [text] = useTypewriter({
        words: ["Tanmay Vidhate.", "MERN Stack Developer."],
        loop: true,
        delaySpeed: 1500,
    });

    return (
        <section className="w-full min-h-screen flex justify-center px-6 py-16">

            {/* MAX WIDTH CONTAINER – prevents breaking on large screens */}
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">

                {/* TEXT SECTION */}
                <div className="w-full md:w-1/2 text-white">

                    <h1 className="font-bold leading-tight tracking-tight text-4xl md:text-5xl flex flex-col">
                        <span>Hello, I'm</span>

                        {/* FIXED HEIGHT BOX TO STOP MOVING */}
                        <span className="h-12 sm:h-14 md:h-16 lg:h-20 flex items-center overflow-hidden">
                            <span className="bg-gradient-to-r from-[#8FA5FF] to-purple-400 bg-clip-text text-transparent">
                                {text}
                            </span>
                            <Cursor cursorStyle="|" />
                        </span>
                    </h1>


                    <p className="text-gray-300 mt-3 text-base md:text-lg leading-relaxed">
                        MSc (CA) student & passionate MERN developer creating clean,
                        responsive and user-friendly web applications.
                    </p>

                    {/* BUTTONS */}
                    <div className="mt-6 flex gap-4">
                        <a
                            href="#"
                            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg"
                        >
                            Download Resume
                        </a>
                        <a
                            href="#"
                            className="bg-white hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-lg"
                        >
                            View Resume
                        </a>
                    </div>
                </div>

                {/* IMAGE SECTION */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={imag1}
                        alt="Hero"
                        className="w-56 sm:w-72 md:w-80 lg:w-[380px] rounded-full shadow-[0_0_35px_rgba(255,255,255,0.25)]"
                    />
                </div>

            </div>
        </section>
    );
}

export default Home;
