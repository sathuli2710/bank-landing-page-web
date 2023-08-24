import React from "react";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-y-[2.5rem] items-center justify-between">
      <div className="text-center lg:text-start max-w-[38.875rem]">
        <p className="font-[600] text-[1.4rem] md:text-[2rem] lg:text-[3rem]">
          You do the business, we’ll handle the money.
        </p>
        <p className="text-[1rem] lg:text-[1.125rem] mt-6 text-white text-opacity-70 max-w-[31.25rem] mb-[1.875rem]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <img
        src={card}
        alt="card image"
        className="lg:w-[25rem] md:max-w-[30rem] max-w-[20rem]"
      />
    </div>
  );
};

export default CardDeal;
