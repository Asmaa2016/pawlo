import React, { FC } from "react";
import { TPlace } from "../index";
interface Props {
  place: TPlace;
}
const Card: FC<Props> = ({
  place: { picture, country, duration, price },
}: Props) => {
  return (
    <div className="w-64 flex flex-col rounded-b-2xl shadow-lg cursor-pointer">
      <img src={picture} alt="Place" className="w-full h-72 rounded-t-2xl" />
      <div className="w-full flex items-center justify-between text-sm font-bold p-3">
        <h1>{country}</h1>
        <h1>{price}$</h1>
      </div>
      <div className="flex items-center w-full pt-1 pb-3 px-3">
        <img src="/images/icons/indicator.png" alt="Indicator" />
        <p className="text-[#A7A5A5] text-sm ml-1">{duration}</p>
      </div>
    </div>
  );
};
export default Card;
