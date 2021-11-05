import React, { FC } from "react";
import Chart from "./Chart";
const Charts: FC = () => {
  return (
    <div className="w-full flex flex-col items-start lg:px-36 px-4 py-12">
      <h1 className="text-3xl font-bold font-Poppins mb-4">Charts</h1>
      <p className="max-w-lg  text-[#7D7D7D]">
        Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu
        degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum
        teneam sententiam, quid bonum esse vult.
      </p>
      <div className="my-10">
        <Chart />
      </div>
    </div>
  );
};
export default Charts;
