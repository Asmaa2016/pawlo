import React, { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
const items = [
  { name: "Home", route: "/" },
  { name: "Services", route: "/services" },
  { name: "About us", route: "/aboutus" },
];
const Header: FC = () => {
  const router = useRouter();

  return (
    <header className="sticky z-10 flex flex-col w-full px-20 py-12">
      <div className="w-full flex justify-between items-center">
        <img src="/images/logooo.png" alt="Logo" />
        <nav className="w-full flex justify-center items-center">
          <ul className="flex items-center justify-evenly w-full text-white">
            {items?.map((item) => {
              const { name, route } = item;
              return (
                <div className="relative flex flex-col" key={name}>
                  <li
                    key={name}
                    className={`${router?.pathname === route && "relative"}`}
                  >
                    <img
                      src="/images/dot.png"
                      alt="Dot"
                      className={`      ${
                        router?.pathname === route
                          ? "block absolute -top-1/2 left-full"
                          : "hidden"
                      }`}
                    />
                    <Link href={route}>
                      <a>
                        <p
                          className={`      ${
                            router?.pathname === route
                              ? "text-[#0783C1]"
                              : "text-[#A7A5A5]"
                          } text-base font-semibold`}
                        >
                          {name}
                        </p>
                      </a>
                    </Link>
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>
        <div className="w-max flex justify-center items-center ">
          <button className="w-24 bg-[#0783C1] rounded-t-full rounded-bl-full text-white py-2 px-4">
            Sign Up
          </button>
          <button className="w-24 text-[#0783C1] font-bold">Login</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
