import React, { FC } from "react";

const GetFund: FC = () => {
  return (
    <div className="w-full flex md:flex-row flex-col items-center justify-between lg:px-36 py-16 px-10 ">
      <div className="flex flex-col max-w-md">
        <h1 className="font-Poppins text-3xl leading-normal">
          <span className="text-[#0783C1]">what</span> are you waiting for
          Travel and enjoy !
        </h1>
        <p className="text-[#A7A5A5] py-4">
          Select preferred doctor and time slot to book appointment or video
          consultation
        </p>
        <button className="w-32 border-2 border-[#0783C1] font-Poppins text-[#0783C1] rounded-t-full rounded-bl-full py-2">
          Get Fund
        </button>
      </div>
      <img src="/images/plane.png" alt="Plane" className="max-w-md" />
    </div>
  );
};
export default GetFund;
