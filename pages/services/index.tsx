import React, { FC } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import GetFund from "../../components/pages/Services/GetFund";
import PreferredDoctor from "../../components/pages/Services/PreferredDoctor";
import BestPlaces from "../../components/pages/Services/BestPlaces";
import Charts from "../../components/pages/Services/Charts";
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
        <BestPlaces />
        <Charts />
      </div>
    </Layout>
  );
};
export default Services;
