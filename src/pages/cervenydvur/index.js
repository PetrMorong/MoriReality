// @ts-check

import * as React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PriceList from "../../components/ProjectDetail/PriceList";
import ProjectSectionOne from "../../components/ProjectDetail/ProjectSectionOne";
import ProjectSectionTwo from "../../components/ProjectDetail/ProjectSectionTwo";
import ProjectSectionThree from "../../components/ProjectDetail/ProjectSectionThree";
import ProjectSectionFour from "../../components/ProjectDetail/ProjectSectionFour";
import ProjectSectionFive from "../../components/ProjectDetail/ProjectSectionFive";
import ProjectSectionSix from "../../components/ProjectDetail/ProjectSectionSix";
import OtherProjects from "../../components/ProjectDetail/OtherProjects";
import dataProjektu from "./dataProjektu"

const CervenyDvurPage = () => {
  return (
    <Layout>
      <Header />
      <ProjectSectionOne data={dataProjektu} />
      <ProjectSectionTwo data={dataProjektu} />
      <ProjectSectionThree data={dataProjektu} onlyOnerow={false} />
      <ProjectSectionFour data={dataProjektu} />
      <ProjectSectionFive data={dataProjektu} />
      <ProjectSectionSix data={dataProjektu} videoSectionTitle="Video z rekonstrukce" />
      <PriceList vynos={true} data={dataProjektu} showBonus={false} />
      <OtherProjects data={dataProjektu} />
      <Footer />
    </Layout>
  );
};

export default CervenyDvurPage;
