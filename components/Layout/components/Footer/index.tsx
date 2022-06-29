import React, { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const menuItems = [
  { name: "About", route: "/" },
  { name: "Classes", route: "/" },
  { name: "Instructors", route: "/" },
  { name: "Memberships", route: "/" },
  { name: "Book a session", route: "/" },
];
const platforms = [
  { name: "Facebook", route: "/" },
  { name: "Instagram", route: "/" },
  { name: "Twitter", route: "/" },
  { name: "Pinterest", route: "/" },
];
const Footer: FC = () => {
  return (
    <div className="relative  w-full flex items-start">
      <div className="bg-[#4bc4ff] w-2/3 h-96 absolute left-0 top-[-20%] z-5 px-28 py-14">
        <img src="images/whiteLogo.png" alt="Logo" />
        <p className="text-xs text-white font-bold max-w-sm leading-0 my-6">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et
        </p>
        <p className="text-sm text-white">
          © Copyright 2017, WELL+NESS Design by Henry Reyes
        </p>
      </div>
      <div className="flex justify-around bg-[#bbeaff] w-[40rem] h-72 absolute right-0 top-[60px] z-10 px-24 py-6">
        <div className="flex flex-col">
          <p className="font-Poppins mb-2">Menu</p>

          {menuItems.map((item) => (
            <motion.p
              whileHover={{ scale: 1.3, originX: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-white text-[#0783C1]"
            >
              <Link href={item.route}>{item.name}</Link>
            </motion.p>
          ))}
        </div>
        <div className="flex flex-col">
          <p className="font-Poppins mb-2">Follow Us</p>
          {platforms.map((item) => (
            <motion.p
              whileHover={{ scale: 1.3, originX: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-white text-[#0783C1]"
            >
              <Link href={item.route}>{item.name}</Link>
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
