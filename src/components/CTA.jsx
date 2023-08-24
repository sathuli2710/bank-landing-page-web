import React from "react";
import Button from "./Button";

const CTA = () => {
  return (
    <div className="w-full grid place-items-center">
      <div className="w-full flex flex-col lg:flex-row gap-y-8 justify-between items-center px-[2.25rem] lg:px-[6.25rem] py-[4.5rem] bg-black-gradient backdrop-blur-[30] rounded-lg">
        <div className="max-w-[38.875rem] text-center lg:text-start">
          <p className="text-[1.4rem] md:text-[2.7rem] lg:text-[3rem] font-[600] mb-[1.25rem]">
            Let’s try our service now!
          </p>
          <p className="md:text-[1.4rem] lg:text-[1.125rem] leading-[1.75rem] text-white text-opacity-70 lg:max-w-[25.875rem]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default CTA;
