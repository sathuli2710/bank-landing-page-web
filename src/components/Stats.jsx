import React, { Fragment } from "react";
import { stats } from "../constants";

const Stats = () => {
  return (
    <div className="w-full flex flex-col gap-y-[1.25rem] lg:flex-row items-center justify-around">
      {stats.map((stat, idx) => (
        <Fragment key={stat.id}>
          <div className="flex gap-x-[1.5625rem] items-center">
            <span className="font-[600] xl:text-[3rem] lg:text-[2rem]">
              {stat.value}
            </span>
            <span className="xl:text-[1.125rem] lg:text-[1rem] text-gradient uppercase">
              {stat.title}
            </span>
          </div>
          {idx !== stats.length - 1 && (
            <div className="w-[3rem] lg:w-[0.0625rem] xl:h-[2.25rem] lg:h-[2rem] h-[0.0625rem] bg-white"></div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Stats;
