import React, { FC } from "react";
import Link from "next/link";
import { TCategory } from "../index";
interface Props {
  category: TCategory;
}
const Card: FC<Props> = ({ category: { title, description } }: Props) => {
  return (
    <div className="lg:mr-0 mr-4 w-64 flex flex-col items-start py-8 hover:shadow-md hover:cursor-pointer">
      <h1 className="text-lg font-bold px-6">{title}</h1>
      <p className="text-[#A7A5A5] text-base pt-2 pb-10 px-6">{description}</p>
      <div className="flex items-center justify-between w-full bg-[#0783C1]  rounded-lg py-3 px-5">
        <Link href="#">
          <a className="text-white text-sm">Learn More →</a>
        </Link>
        <img src="/images/icons/cloud.png" alt="Cloud" />
      </div>
    </div>
  );
};
export default Card;
