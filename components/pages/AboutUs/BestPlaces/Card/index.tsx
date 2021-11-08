import React, { FC } from "react";
import { TPlace } from "../index";
interface Props {
  place: TPlace;
}
const Card: FC<Props> = ({ place: { title, description, picture } }: Props) => {
  return (
    <div className="w-80 flex flex-col mr-4 cursor-pointer">
      <img src={picture} alt="Place" className="w-full h-52 rounded-2xl" />
      <p className="font-bold py-2">{title}</p>
      <p className="text-[#A7A5A5] text-sm pb-3 ">{description}</p>
    </div>
  );
};
export default Card;
