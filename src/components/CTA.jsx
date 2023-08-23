import React from "react";
import Button from "./Button";

const CTA = () => {
  return (
    <div className="grid place-items-center mb-[62px] max-sm:my-[30px]">
      <div className="flex max-sm:flex-col justify-between items-center px-[100px] py-[72px] bg-black-gradient backdrop-blur-[30] rounded-lg w-[1170px]">
        <div>
          <p className="text-[48px] leading-[67px] font-[600] max-w-[670px]">
            Let’s try our service now!
          </p>
          <p className="text-[18px] leading-[28px] max-w-[445px] mt-6 text-white text-opacity-70">
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
