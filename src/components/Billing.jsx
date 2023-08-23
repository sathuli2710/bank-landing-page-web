import React from "react";
import { AppleIcon, GoogleIcon, bill } from "../assets";

const Billing = () => {
  return (
    <div className="flex max-sm:flex-col max-sm:gap-y-4 gap-x-6 items-center justify-center my-[40px] max-sm:my-[20px]" id="product">
      <img src={bill} alt="bill image" className="w-[622px]" />
      <div className="w-[470px] max-sm:w-[622px]">
        <p className="font-[600] text-[48px] leading-[76px]">
          Easily control your billing & invoicing.
        </p>
        <p className="text-[18px] leading-[28px] text-white text-opacity-70 mt-6 max-w-[500px]">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <span className="mt-[48px] flex items-center gap-x-8">
          <AppleIcon className="cursor-pointer" />
          <GoogleIcon className="cursor-pointer" />
        </span>
      </div>
    </div>
  );
};

export default Billing;
