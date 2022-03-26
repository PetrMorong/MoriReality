import React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ApSectionOne from "../../components/ApartmentDetail/ApSectionOne";
import ApSectionTwo from "../../components/ApartmentDetail/ApSectionTwo";
import ApSectionThree from "../../components/ApartmentDetail/ApSectionThree";

const data = {
  sectionOneBg: "v1645822952/vilaRepublika/ap5/4_p2lybw.png",
  layoutImage: "v1645822937/vilaRepublika/ap5/layout4_ae2qhy.png",
  apName: "Apartmán 354/5",
  projectName: "Vila Republika",
  price: "4 490 000",
  backLink: "/vila-republika",
  sectionOneDetails: [
    {
      text: "2+",
      goldText: "kk",
      desc: "Dispozice",
    },
    {
      text: "42.4 ",
      goldText: "m2",
      desc: "Podlahová Plocha",
    },
    {
      text: "2 ",
      goldText: "NP",
      desc: "Umístění",
    },
    {
      text: "Východ",
      goldText: "",
      desc: "Orientace",
    },

    {
      text: "Velké ",
      goldText: "Losiny",
      desc: "Lokatita",
    },
  ],
  gallery: [
    "v1647001091/vilaRepublika/ap5/Screenshot_2022-01-06_at_21.57.44_pbwm6d.png",
    "v1645822948/vilaRepublika/ap5/1_mszurb.png",
    "v1645822950/vilaRepublika/ap5/2_ejccat.png",
    "v1645822941/vilaRepublika/ap5/3_fec1za.png",
    "v1645822952/vilaRepublika/ap5/4_p2lybw.png",
    "/images/vilaRepublika/ap5/4.png",
  ],
  moreDetails: [
    {
      text: "07/2022",
      goldText: "",
      desc: "Datum Kolaudace",
    },
    {
      text: "",
      goldText: "7 ",
      desc: "apartmánů v domě",
    },
    {
      text: "Cihlová",
      goldText: "",
      desc: "Stavba",
    },
    {
      text: "",
      goldText: "Parkovací",
      desc: "místo v ceně",
    },
  ],
  table: [
    { label: "Stav", value: "Dostupný k rezervaci" },
    { label: "Číslo bytu", value: "354/5 " },
    { label: "Dispozice", value: "2+kk" },
    { label: "Podlaží", value: "1" },
    { label: "Podlahová plocha", value: "42.4 m2" },
    { label: "Orientace", value: "Východ" },
    { label: "Terasa", value: "-" },
    { label: "Dokončení", value: "07/2022" },
  ],
};

const MalaMoravaAp1Page = () => {
  return (
    <Layout>
      <Header />
      <ApSectionOne data={data} />
      <ApSectionTwo data={data} />
      <ApSectionThree data={data} />
      <Footer />
    </Layout>
  );
};

export default MalaMoravaAp1Page;
