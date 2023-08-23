import React from "react";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <div className="flex max-sm:flex-col max-sm:gap-y-4 gap-x-6 items-center justify-center my-[80px] max-sm:my-[20px]">
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
      <img src={card} alt="card image" className="w-[470px] max-sm:w-[622px]" />
    </div>
  );
};

export default CardDeal;
