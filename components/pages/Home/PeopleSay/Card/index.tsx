import React, { FC } from "react";
import { TComment } from "../index";
interface Props {
  comment: TComment;
}
const Card: FC<Props> = ({
  comment: { picture, title, name, comment, description, date },
}: Props) => {
  return (
    <div className="w-1/2 flex flex-col items-start rounded-2xl shadow-xl md:pl-20 pl-4 py-8">
      <h1 className='text-lg font-Poppins'>{title}</h1>
      <p className="text-[#A7A5A5] text-sm ml-1 max-w-md">{description}</p>
      <div className="w-full flex items-start justify-start text-sm font-bold p-3">
        <img src={picture} alt="Place" className="w-6 h-6 rounded-full mr-4" />
        <div className=" flex flex-col">
          <h1>{name}</h1>
          <p>{date}</p>
          <p className='text-xs text-[#A7A5A5] max-w-xs mt-1'>{comment}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
