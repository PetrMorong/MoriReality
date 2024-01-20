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
import OtherProjects from "../components/ProjectDetail/OtherProjects";

const HomePage = () => {
  return (
    <Layout>
      <Header />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      {/* Proejcts */}
      {/* <OtherProjects data={data} /> */}
      <HomeSectionFour />
      
      <HomeSectionFive />
      {/* Prices */}
      {/* <HomeSectionSix /> */}

      <Footer />
    </Layout>
  );
};

const data = {
  otherProjects: [
    {
      image: "v1645823018/projektMalaMorava_nzkcnk.jpg",
      name: "Apartmány",
      location: "Malá Morava",
      link: "/apartmany-mala-morava",
    },
    {
      image:
        "v1664009999/Kouty/Screen_Shot_2022-08-18_at_11.27.50_1_gnjjvw.png",
      name: "Wellness Aparthotel",
      location: "Kouty nad Desnou",
      link: "/aparthotel-kouty",
    },
    {
      image: "v1645823344/hrabenov/1_frp1mw.jpg",
      name: "Rezidence Hrabenov",
      location: "Hrabenov, Ruda Nad Moravou",
      link: "/rezidence-hrabenov",
    },
  ],
}



export default HomePage;
