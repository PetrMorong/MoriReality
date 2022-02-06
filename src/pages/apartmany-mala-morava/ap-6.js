import React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ApSectionOne from "../../components/ApartmentDetail/ApSectionOne";
import ApSectionTwo from "../../components/ApartmentDetail/ApSectionTwo";
import ApSectionThree from "../../components/ApartmentDetail/ApSectionThree";

const data = {
  sectionOneBg: "/images/malaMorava/ap4/C_3-min.jpg",
  layoutImage: "/images/malaMorava/apSest/layout.png",
  apName: "Apartmán 39/6",
  projectName: "Malá Morava",
  price: "2 990 000",
  backLink: "/apartmany-mala-morava",
  sectionOneDetails: [
    {
      text: "1+",
      goldText: "kk",
      desc: "Dispozice",
    },
    {
      text: "24.6",
      goldText: "m2",
      desc: "Podlahová Plocha",
    },
    {
      text: "2",
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
    "/images/malaMorava/ap4/C_4-min.jpg",
    "/images/malaMorava/ap4/C_3-min.jpg",
    "/images/malaMorava/ap4/C_2-min.jpg",
    "/images/malaMorava/ap4/C_1-min.jpg",
    "/images/malaMorava/ap4/C_5-min.jpg",
    "/images/malaMorava/ap4/C_6-min.jpg",
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
    { label: "Číslo bytu", value: "39/6" },
    { label: "Dispozice", value: "1+kk" },
    { label: "Podlaží", value: "2" },
    { label: "Podlahová plocha", value: "24.6m2" },
    { label: "Orientace", value: "Východ" },
    { label: "Terasa", value: "-" },
    { label: "Dokončení", value: "2023" },
  ],
};

const MalaMoravaAp6Page = () => {
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

export default MalaMoravaAp6Page;
