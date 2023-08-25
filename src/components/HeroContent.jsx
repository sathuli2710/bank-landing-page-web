import React from "react";
import { ReactComponent as DiscountIcon } from "../assets/Discount.svg";
import { robot_hand } from "../assets";

const HeroContent = () => {
  return (
    <div id="home" className="relative w-full">
      <div className="hidden lg:block absolute left-[-3.125rem] top-[-9.375rem]">
        <svg
          width="580"
          height="1026"
          viewBox="0 0 580 1026"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_1_214)">
            <ellipse cx="32.5" cy="414" rx="97.5" ry="162" fill="white" />
          </g>
          <defs>
            <filter
              id="filter0_f_1_214"
              x="-515"
              y="-198"
              width="1095"
              height="1224"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="225"
                result="effect1_foregroundBlur_1_214"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="w-full flex flex-col items-center lg:items-start">
        <div className="text-[0.5rem] md:text-[0.8rem] xl:text-[1rem] bg-gray-gradient px-2 md:px-3 py-[2pxrem] md:py-[0.125rem] xl:py-1 rounded-xl text-white text-opacity-70 inline-flex items-center gap-x-2 justify-start">
          <DiscountIcon className="w-[1.3rem] md:w-[1.8rem] xl:w-[2rem]" />
          <span className="font-bold text-white">20%</span> DISCOUNT FOR
          <span className="ml-2 font-bold text-white">1</span> MONTH ACCOUNT
        </div>
        <div className="flex flex-col items-center lg:items-start uppercase text-[1.5rem] md:text-[3rem] xl:text-[4.5rem] font-bold tracking-[0.3rem]">
          <span>The Next</span>
          <span
            className="text-gradient"
            // style={{ textShadow: "0 0 0.1875rem #FF0000, 0 0 0.3125rem #0000FF" }}
          >
            Generation
          </span>
          <span>Payment Method.</span>
        </div>
        <div className="text-center lg:text-start text-white text-[0.5rem] md:text-[0.8rem] xl:text-[1rem] text-opacity-70 w-[15rem] md:w-[25rem] xl:w-[30rem] mt-[1.25rem]">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </div>
      </div>
      <div className="hidden lg:block absolute right-[-0.75rem] md:right-[-6.95rem] xl:right-[-8.75rem] top-[6.5rem] md:top-[20.5rem] lg:top-[-18.5rem] xl:top-[-12.5rem] xl:w-[50rem] xl:h-[50rem] lg:w-[37.5rem] lg:h-[50rem]">
        <svg
          width="current"
          height="current"
          viewBox="0 0 827 732"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_101_94)">
            <path
              d="M124.594 37L299.062 608H503.202L702.594 37H124.594Z"
              fill="url(#paint0_linear_101_94)"
            />
            <path
              d="M124.594 37L299.062 608H503.202L702.594 37H124.594Z"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_101_94"
              x="0.918213"
              y="-86.5"
              width="825.38"
              height="818"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="61.5"
                result="effect1_foregroundBlur_101_94"
              />
            </filter>
            <linearGradient
              id="paint0_linear_101_94"
              x1="413.594"
              y1="37"
              x2="413.594"
              y2="608"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BCA5FF" stop-opacity="0" />
              <stop offset="1" stop-color="#214D76" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="hidden lg:block absolute right-[-3.125rem] top-[20rem] lg:top-[-5.625rem] xl:w-[31.25rem] lg:w-[25rem]">
        <img src={robot_hand} alt="robot_hand" />
      </div>
    </div>
  );
};

export default HeroContent;
