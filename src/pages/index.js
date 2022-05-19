import * as React from "react";
import Layout from "../components/layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeSectionOne from "../components/HomePage/HomeSectionOne";
import HomeSectionTwo from "../components/HomePage/HomeSectionTwo";
import HomeSectionThree from "../components/HomePage/HomeSectionThree";
import HomeSectionFour from "../components/HomePage/HomeSectionFour";
import HomeSectionFive from "../components/HomePage/HomeSectionFive";
import HomeSectionSix from "../components/HomePage/HomeSectionSix";

const HomePage = () => {
  return (
    <Layout>
      <Header />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      {/* Gallery */}
      <HomeSectionFour />
      <HomeSectionFive />
      <HomeSectionSix />
      <Footer />
    </Layout>
  );
};

export default HomePage;
