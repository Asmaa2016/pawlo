import React, { FC } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import GetFund from "../../components/pages/Services/GetFund";
import PreferredDoctor from "../../components/pages/Services/PreferredDoctor";
const Services: FC = () => {
  return (
    <Layout>
      <Head>
        <title>Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col">
        <GetFund />
        <PreferredDoctor />
      </div>
    </Layout>
  );
};
export default Services;
