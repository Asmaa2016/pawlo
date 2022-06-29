import React, { FC } from "react";
import { motion } from "framer-motion";

import Card from "./Card";
import { categories } from "./data";
export interface TCategory {
  id: number;
  title: string;
  description: string;
}
const Categories: FC = () => {
  return (
    <motion.div
      className="w-full lg:px-36 px-4 py-16"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold font-Poppins mb-4">Category</h1>
        <img src="/images/bar.png" alt="Bar" className="w-52" />
      </div>
      <div className="w-full flex  md:flex-row flex-col items-center md:justify-between py-20">
        {categories.map((category: TCategory) => (
          <Card key={category.id} category={category} />
        ))}
      </div>
    </motion.div>
  );
};
export default Categories;
