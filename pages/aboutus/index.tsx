import React, { FC } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

const AboutUs: FC = () => {
  return (
    <Layout>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
};
export default AboutUs;
