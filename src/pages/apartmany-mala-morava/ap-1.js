import React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ApSectionOne from "../../components/ApartmentDetail/ApSectionOne";
import ApSectionTwo from "../../components/ApartmentDetail/ApSectionTwo";
import ApSectionThree from "../../components/ApartmentDetail/ApSectionThree";

const data = {
  sectionOneBg: "/images/malaMorava/ap1/A_3-min.jpg",
  layoutImage: "/images/malaMorava/A_9-min.jpg",
  apName: "Apartmán 39/1",
  projectName: "Malá Morava",
  price: "5 790 000",
  backLink: "/apartmany-mala-morava",
  sectionOneDetails: [
    {
      text: "2+",
      goldText: "kk",
      desc: "Dispozice",
    },
    {
      text: "72 ",
      goldText: "m2",
      desc: "Podlahová Plocha",
    },
    {
      text: "1 ",
      goldText: "NP",
      desc: "Umístění",
    },
    {
      text: "Východ",
      goldText: "",
      desc: "Orientace",
    },

    {
      text: "Malá ",
      goldText: "Morava",
      desc: "Lokatita",
    },
  ],
  gallery: [
    "/images/malaMorava/ap1/A_3-min.jpg",
    "/images/malaMorava/ap1/A_2-min.jpg",
    "/images/malaMorava/ap1/A_1-min.jpg",
    // "/images/malaMorava/ap1/A_4-min.jpg",
    "/images/malaMorava/ap1/A_8-min.jpg",
    "/images/malaMorava/ap1/A_6-min.jpg",
    "/images/malaMorava/ap1/A_7-min.jpg",
  ],
  moreDetails: [
    {
      text: "2023",
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
    { label: "Číslo bytu", value: "39/1 " },
    { label: "Dispozice", value: "2+kk" },
    { label: "Podlaží", value: "1" },
    { label: "Podlahová plocha", value: "72m2" },
    { label: "Orientace", value: "Východ" },
    { label: "Terasa", value: "-" },
    { label: "Dokončení", value: "2023" },
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
