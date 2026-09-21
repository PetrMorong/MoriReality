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
import Faq from "../../components/ProjectDetail/Faq";
import OtherProjects from "../../components/ProjectDetail/OtherProjects";
import dataProjektu from "../../utils/dataProjektuCervenyDvur"
import InvestBlock from "../../components/ProjectDetail/InvestBlock";
import NordMoraviaFlexSection from "../../components/ProjectDetail/NordMoraviaFlexSection";

const CervenyDvurPage = () => {
  return (
    <Layout>
      <Header email="info@mori-reality.cz" phone="601 502 889" />
      <ProjectSectionOne data={dataProjektu} />
      <ProjectSectionTwo data={dataProjektu} />
      <ProjectSectionThree data={dataProjektu} onlyOnerow={false} />
      <ProjectSectionFour data={dataProjektu} />
      <ProjectSectionFive data={dataProjektu} />
      <InvestBlock />
      <ProjectSectionSix data={dataProjektu} />
      <PriceList
        vynos={true}
        data={dataProjektu}
        showBonus={false}
        category={true}
        koje={false}
        vynosLabelOne="Měsíční zisk"
        vynosLabelTwo="Čistý výnos"
        vynosNote="** Jednotky, které ještě nejsou v provozu – modelový odhad při 60% obsazenosti po dokončení a zapojení do provozu resortu. Průměrná cena za noc odvozena od dosažených cen srovnatelných apartmánů v domě."
      />
      <NordMoraviaFlexSection />
      <Faq />
       {/*<OtherProjects data={dataProjektu} /> */}
      <Footer email="info@mori-reality.cz" phone="601 502 889" />
    </Layout>
  );
};

export default CervenyDvurPage;
