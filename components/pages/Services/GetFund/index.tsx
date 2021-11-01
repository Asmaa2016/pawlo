import React, { FC } from "react";

const GetFund: FC = () => {
  return (
    <div className="w-full flex md:flex-row flex-col items-center justify-between lg:px-36 py-10 px-10 ">
      <div className="flex flex-col max-w-md">
        <h1 className="font-Poppins text-3xl leading-normal">
          GET a fund easily !
        </h1>
        <p className="text-[#A7A5A5] py-4">
          Select preferred doctor and time slot to book appointment or video
          consultation
        </p>
      </div>
      <img src="/images/getFund.png" alt="Plane" className="max-w-md" />
    </div>
  );
};
export default GetFund;
