import React, { FC } from "react";
const companies = [
  { name: "axon", picture: "/images/axon.png" },
  { name: "jestae", picture: "/images/jestae.png" },
  { name: "expedo", picture: "/images/expedo.png" },
  { name: "Qantas", picture: "/images/Qantas.png" },
  { name: "illata", picture: "/images/illata.png" },
];
const PreferredDoctor: FC = () => {
  return (
    <div className="bg-[#0783C10F] w-full flex md:flex-col flex-row items-start  lg:px-36 py-20 px-10 ">
      <p className="text-[#0783C1] ">Select preferred doctor and time</p>
      <h1 className="font-Poppins text-3xl my-1">
        Lorem ipsum dolor sit amet, consetetur
      </h1>
      <p className="text-[#A7A5A5] max-w-4xl mb-4">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
      </p>
      <div className="w-[90%] flex items-center justify-between">
        {companies.map((item) => (
          <div className="flex items-center">
            <img src={item.picture} alt={item.picture} />
            <h1 className='text-lg font-bold ml-3'>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PreferredDoctor;
