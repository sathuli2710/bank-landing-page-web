import React from "react";
import { features } from "../constants";
import Button from "./Button";

const BusinessCard = ({ iconSrc = "", title = "", desc = "" }) => (
  <div className="flex gap-x-5 items-center p-5 rounded-lg hover:bg-gray-800 hover:box-shadow cursor-pointer">
    <span className="w-[4rem] h-[4rem] rounded-full bg-[#09977C] bg-opacity-10 grid place-items-center flex-shrink-0">
      <img src={iconSrc} alt="feature-icon" />
    </span>
    <span className="text-[1rem] lg:text-[1.125rem]">
      <span className="block font-[600] mb-2">{title}</span>
      <span className="text-white text-opacity-70">{desc}</span>
    </span>
  </div>
);

const Business = () => {
  return (
    <div
      className="w-full flex flex-col lg:flex-row gap-y-4 items-center justify-between"
      id="features"
    >
      <div className="text-center lg:text-start max-w-[38.875rem]">
        <p className="font-[600] text-[1.4rem] md:text-[2rem] lg:text-[1.4rem] xl:text-[3rem]">
          You do the business, we’ll handle the money.
        </p>
        <p className="text-[1rem] xl:text-[1.125rem] mt-6 text-white text-opacity-70 max-w-[31.25rem] mb-[1.875rem]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className="flex flex-col gap-y-5 xl:max-w-[36.375rem] lg:max-w-[29.375rem] max-w-[38.875rem]">
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
