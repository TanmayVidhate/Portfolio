import React, { useEffect, useState } from "react";
import { RiArrowUpSLine } from "@remixicon/react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollTop}
          className="
            fixed bottom-6 right-6 
            w-12 h-12 
            flex items-center justify-center 
            rounded-full 
            bg-[#465697]/60 backdrop-blur-md
            border border-white/20 
            text-white 
            shadow-[0_0_20px_rgba(255,255,255,0.3)]
            hover:bg-[#8FA5FF] hover:text-black 
            hover:scale-110
            transition-all duration-300
            z-50
          "
        >
          <RiArrowUpSLine size={30} />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
