import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Header from "../components/Header";
import HomeSectionOne from "../components/HomePage/HomeSectionOne";

const HomePage = () => {
  return (
    <Layout>
      <Header />
      <HomeSectionOne />
    </Layout>
  );
};

export default HomePage;
