import React, { FC, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import Menu from "../../../../public/images/icons/humburg.svg";
const items = [
  { name: "Home", route: "/" },
  { name: "Services", route: "/services" },
  { name: "About us", route: "/aboutus" },
];
const Header: FC = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="sticky z-10 flex flex-col w-full md:px-20 px-4 py-12">
      <div className="w-full flex justify-between items-center">
        <img src="/images/logooo.png" alt="Logo" />
        <nav className="w-full flex justify-center items-center md:block hidden">
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
        <button
          className="md:hidden block w-8"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <Menu />
        </button>
        <div className="w-max  justify-center items-center md:flex hidden">
          <button className="w-24 bg-[#0783C1] rounded-t-full rounded-bl-full text-white py-2 px-4">
            Sign Up
          </button>
          <button className="w-24 text-[#0783C1] font-bold">Login</button>
        </div>
      </div>
      {openMenu && (
        <>
          <div
            className={`z-30 inset-0 w-full h-screen transition-all duration-300 ease-in-out transform bg-black   ${
              openMenu ? "absolute opacity-50" : "hidden opacity-0 "
            }`}
            onClick={() => setOpenMenu(false)}
            aria-hidden="true"
          />
          <aside
            className={`fixed top-0 right-0 z-30 w-[370px] h-full overflow-y-auto	overflow-x-hidden transition-all duration-300 ease-in-out transform gradient 
         bg-[#382eb4]  ${openMenu ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex items-center justify-center h-24 bg-[#3938c8]">
              {" "}
              <button
                type="button"
                onClick={() => setOpenMenu(false)}
                className="flex items-center"
              ></button>
              <h3 className="ml-4 text-base text-white font-RussoOne">Pawol</h3>
            </div>
            {/* <div className="flex flex-col items-start pt-4 pl-16 pr-10 md:items-end md:pt-14 md:pl-0">
            {!withOutUser && user?.id && (
              <div className="flex items-center block my-4 md:hidden">
                <button
                  type="button"
                  onClick={() => router.push({ pathname: `/${user.username}` })}
                >
                  <Avatar
                    image={user?.picture || "/images/syftGGJ.png"}
                    className="mr-4 w-14 h-14 border-1 border-yellow-light"
                    alt={user?.name || "profile"}
                  />
                </button>
                <h3 className="text-sm font-bold text-white font-RussoOne">
                  {user?.name}
                </h3>
              </div>
            )} */}
            {/* {items.map((item) => {
              const { route, title, Icon } = item;
              const sameRoute = router?.pathname === route;
              return ( */}
            {/* // <Link href={route} key={item.route}> */}
            {/* <div
                    className={`${
                      sameRoute && "bg-blue-dark  transform skew-x-12"
                    } group hover:bg-blue-dark  hover:transform hover:skew-x-12 
                  flex items-center md:justify-end my-6 py-2 px-7 cursor-pointer md:w-10/12 w-full`}
                  >
                    <Icon
                      className={` ${
                        sameRoute && "-skew-x-12"
                      } group-hover:-skew-x-12 mr-3 text-sm text-white fill-current`}
                    />
                    <h3
                      className={`text-lg font-semibold text-white group-hover:-skew-x-12 ${
                        sameRoute && "-skew-x-12"
                      }`}
                    >
                      {title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div> */}
          </aside>
        </>
      )}
    </header>
  );
};
export default Header;
