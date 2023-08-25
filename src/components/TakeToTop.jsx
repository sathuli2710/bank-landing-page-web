import React, { useEffect, useState } from "react";

const TakeToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      className={`${
        isVisible ? "block" : "hidden"
      } fixed right-2 bottom-2 lg:right-8 lg:bottom-16 rounded-full p-4 cursor-pointer bg-blue-gradient grid place-items-center`}
      href="#navbar"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.75 12.625L10 7.375L15.25 12.625"
          stroke="#222222"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
  );
};

export default TakeToTop;
