import React, { FC } from "react";
import { TTrip } from "../index";

interface Props {
  trip: TTrip;
}
const Card: FC<Props> = ({ trip: { percent, type, description } }: Props) => {
  return (
    <div className="w-1/2 flex justify-start items-start  py-8 ">
      <div className="flex flex-col min-w-[80px]">
        <h1 className="text-lg font-bold mb-2">{percent}</h1>
        <p className="text-sm">{type}</p>
      </div>
      <div className="max-w-[22.5rem] border-l-2 border-l-[#CCCCCC] pl-3.5 ml-4">
        <p className="text-[#A7A5A5] text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};
export default Card;
