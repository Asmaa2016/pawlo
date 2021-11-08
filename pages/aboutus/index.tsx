import React, { FC } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import GetFund from "../../components/pages/AboutUs/GetFund";
import BestPlaces from "../../components/pages/AboutUs/BestPlaces";
const AboutUs: FC = () => {
  return (
    <Layout>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GetFund />
      <BestPlaces />
    </Layout>
  );
};
export default AboutUs;
