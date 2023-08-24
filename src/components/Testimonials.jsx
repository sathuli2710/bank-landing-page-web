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
    <div className="flex flex-col gap-y-[2.5rem] px-[2.5rem] py-[3.75rem] hover:bg-gray-800 rounded-lg cursor-pointer">
      <QuotesIcon />
      <p className="text-[1rem] lg:text-[1.125rem] max-w-[18.125rem]">
        {quote}
      </p>
      <div className="flex gap-x-4 items-center">
        <img
          src={personImg}
          alt={personName}
          className="w-[3rem] h-[3rem] rounded-full overflow-hidden"
        />
        <span>
          <p className="text-[1.25rem]">{personName}</p>
          <p className="text-[1rem] text-white text-opacity-70">
            {personPosition}
          </p>
        </span>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col gap-y-[0.625rem] items-center justify-between">
      <div className="text-center lg:text-start w-full flex flex-col lg:flex-row gap-y-[1.875rem] justify-between items-center">
        <p className="font-[600] text-[1.4rem] md:text-[2rem] lg:text-[3rem]">
          What people are saying about us
        </p>
        <p className="text-[1rem] lg:text-[1.125rem] leading-[2rem] max-w-[28.125rem] max-sm:max-w-[38.875rem] text-white text-opacity-70">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-y-[1.875rem] justify-between items-center">
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
