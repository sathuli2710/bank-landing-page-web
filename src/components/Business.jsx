import React from "react";
import { features } from "../constants";
import Button from "./Button";

const BusinessCard = ({ iconSrc = "", title = "", desc = "" }) => (
  <div className=" flex gap-x-5 items-center p-5 rounded-lg hover:bg-gray-800 hover:box-shadow cursor-pointer">
    <span className="w-[64px] h-[64px] rounded-full bg-[#09977C] bg-opacity-10 grid place-items-center flex-shrink-0">
      <img src={iconSrc} alt="feature-icon" />
    </span>
    <span>
      <span className="block font-[600] text-[18px] leading-[23px] mb-2">
        {title}
      </span>
      <span className="text-[16px] leading-[24px] text-white text-opacity-70">
        {desc}
      </span>
    </span>
  </div>
);

const Business = () => {
  return (
    <div
      className="flex max-sm:flex-col max-sm:gap-y-4 gap-x-6 items-center justify-center my-[80px] max-sm:my-[20px]"
      id="features"
    >
      <div className="max-w-[622px]">
        <p className="font-[600] text-[48px] leading-[76px]">
          You do the business, we’ll handle the money.
        </p>
        <p className="text-[18px] leading-[30px] mt-6 text-white text-opacity-70 max-w-[500px]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className="flex flex-col gap-y-5 w-[470px] max-sm:w-[622px]">
        {features.map((feat) => (
          <BusinessCard
            key={feat.id}
            iconSrc={feat.icon}
            title={feat.title}
            desc={feat.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Business;
