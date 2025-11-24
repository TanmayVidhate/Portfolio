import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkStyle =
    "relative cursor-pointer transition-all duration-300 " +
    "after:content-[''] after:block after:h-[2px] after:w-0 after:bg-[#8FA5FF] " +
    "after:transition-all after:duration-300 hover:after:w-full hover:text-[#8FA5FF]";

  return (
    <>
      <nav className="flex justify-between items-center text-white px-10 pt-6 lg:px-24 relative">

        {/* LOGO */}
        <span className="text-xl font-bold tracking-wide hover:text-[#8FA5FF] duration-300 cursor-pointer">
          Portfolio
        </span>

        {/* MENU ITEMS */}
        <ul
          className={`absolute md:static left-0 w-full md:w-auto bg-black md:bg-transparent bg-opacity-50 
            rounded-xl text-center md:flex gap-6 font-semibold transition-all duration-300 
            ${open ? "top-16 opacity-100" : "top-[-300px] opacity-0 md:opacity-100"}`}
        >
          <a href="#About"><li className={linkStyle}>About</li></a>
          <a href="#Skills"><li className={linkStyle}>Skills</li></a>
          <a href="#Projects"><li className={linkStyle}>Projects</li></a>
          <a href="#Contact"><li className={linkStyle}>Contact</li></a>
        </ul>

        {/* MENU ICON */}
        {open ? (
          <RiCloseLine
            size={30}
            className="absolute right-10 top-6 md:hidden cursor-pointer transition-all duration-300 hover:scale-110"
            onClick={() => setOpen(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="absolute right-10 top-6 md:hidden cursor-pointer transition-all duration-300 hover:scale-110"
            onClick={() => setOpen(true)}
          />
        )}
      </nav>
    </>
  );
}

export default Navbar;
