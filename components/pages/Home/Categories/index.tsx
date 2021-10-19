import React, { FC } from "react";
import Card from "./Card";
import { categories } from "./data";
export interface TCategory {
  id: number;
  title: string;
  description: string;
}
const Categories: FC = () => {
  return (
    <div className="w-full px-36 py-16">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold font-Poppins mb-4">Category</h1>
        <img src="/images/bar.png" alt="Bar" className="w-52" />
      </div>
      <div className="w-full flex items-center justify-between py-20">
        {categories.map((category: TCategory) => (
          <Card key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};
export default Categories;
