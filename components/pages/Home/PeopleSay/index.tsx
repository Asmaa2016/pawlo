import React, { FC, useState, useEffect } from "react";
import Card from "./Card";
import RightArrow from "../../../../public/icons/rightArrow.svg";
import LeftArrow from "../../../../public/icons/leftArrow.svg";

import { comments } from "./data";
export interface TComment {
  id: number;
  picture: string;
  title: string;
  name: string;
  comment: string;
  description: string;
  date: string;
}
const bullets = [{ id: 0 }, { id: 1 }, { id: 2 }];

const PeopleSay: FC = () => {
  const [contentID, setContentID] = useState(0);
  useEffect(() => {
    setInterval(() => setContentID(Math.floor(Math.random() * 3)), 6000);
  }, []);
  return (
    <div className="w-full flex flex-col items-center  lg:px-36 px-4 py-12">
      <h1 className="text-3xl font-bold font-Poppins mb-4">What People Say</h1>
      <p className="text-base max-w-md text-center">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et
      </p>
      <div className="flex justify-between w-24">
        {bullets?.map((bullet) => (
          <div
            key={bullet.id}
            className={`w-3 h-3 rounded-full border border-black my-5 cursor-pointer ${
              bullet.id === contentID ? "bg-black" : "bg-transparent"
            }`}
            onClick={() => setContentID(bullet.id)}
          />
        ))}
      </div>
      <div className="w-full flex items-center justify-around">
        <div className="flex">
          <LeftArrow
            onClick={() =>
              contentID > 0 ? setContentID(contentID - 1) : setContentID(2)
            }
            className="hover:fill-current text-[#0783C1] text-xs cursor-pointer"
          />
          <RightArrow
            onClick={() =>
              contentID < 2 ? setContentID(contentID + 1) : setContentID(0)
            }
            className="ml-6 hover:fill-current text-[#0783C1] text-xs cursor-pointer"
          />
        </div>
        {comments.map((comment: TComment) =>
          contentID === comment.id ? (
            <Card key={comment.id} comment={comment} />
          ) : null
        )}
      </div>
    </div>
  );
};
export default PeopleSay;
