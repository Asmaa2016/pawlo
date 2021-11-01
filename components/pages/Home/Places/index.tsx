import React, { FC } from "react";
import Card from "./Card";
import { places } from "./data";
export interface TPlace {
  id: number;
  picture: string;
  country: string;
  duration: string;
  price: number;
}
const Places: FC = () => {
  return (
    <div className="w-full flex flex-col items-center  lg:px-36 px-4 py-12">
      <h1 className="text-3xl font-bold font-Poppins mb-4">The Best Places</h1>
      <div className="w-full flex  md:flex-row flex-col items-center justify-evenly py-20">
        {places.map((place: TPlace) => (
          <Card key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};
export default Places;
