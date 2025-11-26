import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

function Navbar() {
  const [open, setOpen] = useState(false);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const linkStyle =
    "relative cursor-pointer transition-all duration-300 " +
    "after:content-[''] after:block after:h-[2px] after:w-0 after:bg-[#8FA5FF] " +
    "after:transition-all after:duration-300 hover:after:w-full hover:text-[#8FA5FF]";

  return (
    <>
      {/* Blur Overlay (Top Half Only) */}
      {open && (
        <div
          className="fixed top-0 left-0 w-full h-[100vh] backdrop-blur-md bg-black/40 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <nav className="flex justify-between items-center text-white px-10 pt-6 lg:px-24 relative">
        {/* LOGO */}
        <span className="text-xl font-bold tracking-wide hover:text-[#8FA5FF] duration-300 cursor-pointer z-40">
          Portfolio
        </span>

        {/* MENU ITEMS */}
        <ul
          className={`absolute md:static  left-0 w-full md:w-auto z-40  md:bg-transparent bg-opacity-50 
            rounded-xl text-center md:flex gap-6 font-semibold transition-all duration-300

            ${
              open
                ? "top-28 opacity-100 pointer-events-auto"
                : "top-[300px] opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
            }
          `}
        >
          <a href="#About" onClick={() => setOpen(false)}>
            <li className={linkStyle}>About</li>
          </a>

          <a href="#Skills" onClick={() => setOpen(false)}>
            <li className={linkStyle}>Skills</li>
          </a>

          <a href="#Projects" onClick={() => setOpen(false)}>
            <li className={linkStyle}>Projects</li>
          </a>

          <a href="#Contact" onClick={() => setOpen(false)}>
            <li className={linkStyle}>Contact</li>
          </a>
        </ul>

        {/* MENU ICON */}
        {open ? (
          <RiCloseLine
            size={30}
            className="absolute right-10 top-6 md:hidden cursor-pointer transition-all duration-300 hover:scale-110 z-50"
            onClick={() => setOpen(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="absolute right-10 top-6 md:hidden cursor-pointer transition-all duration-300 hover:scale-110 z-50"
            onClick={() => setOpen(true)}
          />
        )}
      </nav>
    </>
  );
}

export default Navbar;
