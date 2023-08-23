import React from "react";
import { ReactComponent as DiscountIcon } from "../assets/Discount.svg";
import { ReactComponent as RobotHandIcon } from "../assets/robotHand.svg";

const HeroContent = () => {
  return (
    <div id="home" className="relative mt-[40px] mb-[80px] w-full px-[150px]">
      <div className="absolute left-0 top-[-150px]">
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
      <div className="bg-gray-gradient px-3 py-1 rounded-xl text-white/70 inline-flex items-center gap-x-2 justify-start">
        <DiscountIcon />
        <span className="font-bold text-white">20%</span> DISCOUNT FOR{" "}
        <span className="ml-2 font-bold text-white">1</span> MONTH ACCOUNT
      </div>
      <div className="flex flex-col">
        <span className="text-[72px] font-bold tracking-[8px]">The Next</span>
        <span className="text-[72px] font-bold tracking-[8px] text-gradient">
          Generation
        </span>
        <span className="text-[72px] font-bold tracking-[8px]">
          Payment Method.
        </span>
      </div>
      <div className="text-white/70 w-[400px] mt-[20px]">
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </div>
      <div className="absolute right-0 top-0">
        <RobotHandIcon width={500} height={500} />
      </div>
      <div className="absolute right-[-140px] top-[-200px]">
        <svg
          width="827"
          height="732"
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
    </div>
  );
};

export default HeroContent;
