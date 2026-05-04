import * as React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PriceList from "../../components/ProjectDetail/PriceList";
import Gallery from "../../components/ProjectDetail/Gallery"
import OtherProjects from "../../components/ProjectDetail/OtherProjects";
import ProjectSectionOne from "../../components/ProjectDetail/ProjectSectionOne";
import ProjectSectionTwo from "../../components/ProjectDetail/ProjectSectionTwo";
import ProjectSectionThree from "../../components/ProjectDetail/ProjectSectionThree";
import ProjectSectionFour from "../../components/ProjectDetail/ProjectSectionFour";
import ProjectSectionFive from "../../components/ProjectDetail/ProjectSectionFive";
import ProjectSectionSix from "../../components/ProjectDetail/ProjectSectionSix";
//import KoutyWhoSection from "../../components/ProjectDetail/KoutyWhoSection";
//import KoutyFinancingSection from "../../components/ProjectDetail/KoutyFinancingSection";
import KoutyInvestBlock from "../../components/ProjectDetail/KoutyInvestBlock";
import {data} from "../../utils/dataKouty"


const Kouty = () => {
  return (
    <Layout>
      <Header />
      <ProjectSectionOne data={data} />
      <ProjectSectionTwo data={data} />
      <ProjectSectionThree data={data} />
      <ProjectSectionFour data={data} />
      <ProjectSectionFive data={data} />
      <ProjectSectionSix data={data} />
      <PriceList data={data} terasa={true} vynos={false} koje={false} />
      <KoutyInvestBlock />
      {/* <Gallery projectName="aparthotel-kouty" /> */}
      <OtherProjects data={data} />
      <Footer />
    </Layout>
  );
};

export default Kouty;
