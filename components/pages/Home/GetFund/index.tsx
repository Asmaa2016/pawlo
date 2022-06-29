import React, { FC } from "react";
import { motion } from "framer-motion";

const GetFund: FC = () => {
  return (
    <div className="w-full flex md:flex-row flex-col items-center justify-between lg:px-36 py-16 px-10 ">
      <div className="flex flex-col max-w-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, speed: 5000 }}
          transition={{ duration: 2 }}
        >
          <h1 className="font-Poppins text-3xl leading-normal">
            <span className="text-[#0783C1]">what</span> are you waiting for
            Travel and enjoy !
          </h1>
          <p className="text-[#A7A5A5] py-4">
            Select preferred doctor and time slot to book appointment or video
            consultation
          </p>
        </motion.div>
        <motion.button
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(7, 131, 193)",
          }}
          className="w-32 border-2 border-[#0783C1] font-Poppins text-[#0783C1] rounded-t-full rounded-bl-full py-2"
        >
          Get Fund
        </motion.button>
      </div>
      <motion.div
        initial={{ y: -350 }}
        animate={{ y: -10, speed: 5000 }}
        transition={{ duration: 2, type: "spring", stiffness: 80 }}
      >
        <img src="/images/plane.png" alt="Plane" className="max-w-md" />
      </motion.div>
    </div>
  );
};
export default GetFund;
