import React, { FC } from "react";
import { TPlace } from "../index";
interface Props {
  place: TPlace;
}
const Card: FC<Props> = ({ place: { date, description, picture } }: Props) => {
  return (
    <div className="w-64 flex flex-col rounded-b-2xl shadow-lg cursor-pointer">
      <img src={picture} alt="Place" className="w-full h-72 rounded-t-2xl" />

      <div className="w-full flex items-center text-sm font-bold p-3">
        <img src="/images/icons/indicator.png" alt="Indicator" />
        <p className="ml-2">{date}</p>
      </div>
      <p className="text-[#A7A5A5] text-sm pb-3 px-3">{description}</p>
    </div>
  );
};
export default Card;
