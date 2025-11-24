import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <footer className="w-full bg-black bg-opacity-30 text-white py-8 mt-20 border-t border-zinc-800">

            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* LEFT - Name / Brand */}
                <h1 className="text-xl font-semibold tracking-wide">
                    Tanmay <span className="text-[#8FA5FF]">Vidhate</span>
                </h1>

                {/* CENTER - Navigation Links */}


                {/* RIGHT - Social Icons */}
                <div className="flex gap-5 text-2xl">

                    <a
                        href="https://www.linkedin.com/in/tanmay-vidhate/"
                        target="_blank"
                        className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-all 
                       hover:scale-110 hover:shadow-[0_0_15px_rgba(143,165,255,0.5)]"
                    >
                        <FaLinkedin size={28} color="#8FA5FF" />
                    </a>

                    <a
                        href="https://github.com/TanmayVidhate"
                        target="_blank"
                        className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-all 
                       hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                    >
                        <FaGithub size={28} color="#fff" />
                    </a>

                </div>
            </div>

            {/* Bottom Text */}
            <div className="text-center text-sm text-zinc-400 mt-6">
                © {new Date().getFullYear()} Tanmay Vidhate. All rights reserved.
            </div>

        </footer>
    );
}

export default Footer;
