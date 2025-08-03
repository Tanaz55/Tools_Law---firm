import React, { useEffect, useState } from "react";

// import react scroll
import { animateScroll as scroll } from "react-scroll";

// import icon
import { FaChevronUp } from 'react-icons/fa';

const BackToTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  if (!show) return null; // ✅ Safely render nothing

  return (
    <button
      onClick={scrollToTop}
      className="flex justify-center items-center bg-primary-hover text-white w-12 h-12 fixed z-10 right-8 bottom-16 lg:bottom-8 rounded-sm cursor-pointer text-sm"
    >
      <FaChevronUp />
    </button>
  );
};

export default BackToTopBtn;
