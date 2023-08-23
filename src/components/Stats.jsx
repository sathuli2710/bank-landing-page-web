import React, { Fragment } from "react";
import { stats } from "../constants";

const Stats = () => {
  return (
    <div className="flex gap-x-[52px] items-center justify-center max-sm:flex-col">
      {stats.map((stat, idx) => (
        <Fragment key={stat.id}>
          <div className="flex gap-x-[25px] items-center">
            <span className="font-[600] text-[40px] leading-[53px]">
              {stat.value}
            </span>
            <span className="text-[20px] leading-[26px] text-gradient uppercase">
              {stat.title}
            </span>
          </div>
          {idx !== stats.length - 1 && (
            <div className="w-[1px] h-[20px] bg-white max-sm:hidden"></div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Stats;
