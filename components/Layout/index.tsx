import React, { FC, ReactNode } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export interface Props {
  children?: ReactNode;
}
const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <div className="bgImage">
      <Header />
      <div className="flex flex-col justify-between  layoutContainer overflow-x-hidden overflow-y-auto layoutContainer ">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
