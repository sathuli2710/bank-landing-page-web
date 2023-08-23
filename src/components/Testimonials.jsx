import React from "react";
import { feedback } from "../constants";
import { QuotesIcon } from "../assets";

const TestimonialCard = ({
  quote = "",
  personImg = "",
  personName = "",
  personPosition = "",
}) => {
  return (
    <div className="px-[40px] py-[60px] hover:bg-gray-800 rounded-lg cursor-pointer">
      <QuotesIcon />
      <p className="text-[18px] leading-[32px] max-w-[290px] mt-[40px] mb-[24px]">
        {quote}
      </p>
      <div className="flex gap-x-4 items-center">
        <img
          src={personImg}
          alt={personName}
          className="w-[48px] h-[48px] rounded-full overflow-hidden"
        />
        <span>
          <p className="text-[20px] leading-[32px]">{personName}</p>
          <p className="text-[16px] leading-[24px] text-white text-opacity-70">
            {personPosition}
          </p>
        </span>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-y-[10px] items-center justify-center my-[80px] max-sm:my-[20px]">
      <div className="flex max-sm:flex-col gap-y-[30px] gap-x-[130px] items-center">
        <p className="font-[600] text-[48px] leading-[81px] max-w-[470px] max-sm:max-w-[622px]">
          What people are saying about us
        </p>
        <p className="text-[18px] leading-[32px] max-w-[450px] max-sm:max-w-[622px] text-white text-opacity-70">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex max-sm:flex-col gap-[30px] items-center">
        {feedback.map((item) => (
          <TestimonialCard
            key={item.id}
            personImg={item.img}
            personName={item.name}
            personPosition={item.title}
            quote={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
