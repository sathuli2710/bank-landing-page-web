import React from "react";
import { AppleIcon, GoogleIcon, bill } from "../assets";

const Billing = () => {
  return (
    <div
      className="w-full flex flex-col lg:flex-row gap-y-4 items-center justify-between"
      id="product"
    >
      <img
        src={bill}
        alt="bill image"
        className="lg:w-[25rem] md:max-w-[30rem] max-w-[20rem]"
      />
      <div className="text-center lg:text-start max-w-[38.875rem]">
        <p className="font-[600] text-[1.4rem] md:text-[2rem] lg:text-[3rem]">
          Easily control your billing & invoicing.
        </p>
        <p className="text-[1rem] lg:text-[1.125rem] text-white text-opacity-70 mt-6 max-w-[31.25rem] mb-[1.875rem]">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <span className="flex justify-center lg:justify-start items-center gap-x-8">
          <AppleIcon className="cursor-pointer" />
          <GoogleIcon className="cursor-pointer" />
        </span>
      </div>
    </div>
  );
};

export default Billing;
