import React, { FC } from "react";
import Card from "./Card";
import { trips } from "./data";

export interface TTrip {
  id: number;
  percent: string;
  type: string;
  description: string;
}
const Booking: FC = () => {
  return (
    <div className="w-full flex flex-col items-center lg:px-72 px-36 py-12">
      <div className="self-start">
        <h1 className="text-lg font-Poppins text-[#0783C1] mb-4 ">
          Book the trip
        </h1>
        <p className="max-w-lg">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et
        </p>
      </div>
      <div className="w-full flex-wrap md:flex-row flex-col flex items-center py-8">
        {trips.map((trip: TTrip) => (
          <Card key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
};
export default Booking;
