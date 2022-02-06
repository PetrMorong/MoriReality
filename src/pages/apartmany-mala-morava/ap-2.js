import React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ApSectionOne from "../../components/ApartmentDetail/ApSectionOne";
import ApSectionTwo from "../../components/ApartmentDetail/ApSectionTwo";
import ApSectionThree from "../../components/ApartmentDetail/ApSectionThree";

const data = {
  sectionOneBg: "/images/malaMorava/apDva/B_4-min.jpg",
  layoutImage: "/images/malaMorava/apDva/B_9-min.jpg",
  apName: "Apartmán 39/2",
  projectName: "Malá Morava",
  price: "5 290 000",
  backLink: "/apartmany-mala-morava",
  sectionOneDetails: [
    {
      text: "2+",
      goldText: "kk",
      desc: "Dispozice",
    },
    {
      text: "51 ",
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
    "/images/malaMorava/apDva/B_4-min.jpg",
    "/images/malaMorava/apDva/B_3-min.jpg",
    "/images/malaMorava/apDva/B_2-min.jpg",
    "/images/malaMorava/apDva/B_5-min.jpg",
    "/images/malaMorava/apDva/B_1-min.jpg",
    "/images/malaMorava/apDva/B_6-min.jpg",
    "/images/malaMorava/apDva/B_7-min.jpg",
    "/images/malaMorava/apDva/B_8-min.jpg",
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
    { label: "Číslo bytu", value: "39/2" },
    { label: "Dispozice", value: "2+kk" },
    { label: "Podlaží", value: "1" },
    { label: "Podlahová plocha", value: "51m2" },
    { label: "Orientace", value: "Východ" },
    { label: "Terasa", value: "19.25" },
    { label: "Dokončení", value: "2023" },
  ],
};

const MalaMoravaAp2Page = () => {
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

export default MalaMoravaAp2Page;
