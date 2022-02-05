import React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ApSectionOne from "../../components/ApartmentDetail/ApSectionOne";
import ApSectionTwo from "../../components/ApartmentDetail/ApSectionTwo";
import ApSectionThree from "../../components/ApartmentDetail/ApSectionThree";

const data = {
  sectionOneBg: "/images/A_3-min.jpg",
  apName: "Apartmán 39/1",
  projectName: "Malá Morava",
  sectionOneDetails: [
    {
      text: "2+",
      goldText: "kk",
      desc: "Dispozice",
    },
    {
      text: "38 ",
      goldText: "m2",
      desc: "Podlahová Plocha",
    },
    {
      text: "1 ",
      goldText: "NP",
      desc: "Podlaží",
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
  gallery: ["/images/A_3-min.jpg", "/images/C_1-min.jpg"],
  moreDetails: [
    {
      text: "2024",
      goldText: "",
      desc: "Datum Kolaudace",
    },
    {
      text: "6 ",
      goldText: "bytů",
      desc: "Celkem v komplexu",
    },
    {
      text: "6 ",
      goldText: "bytů",
      desc: "Celkem v komplexu",
    },
    {
      text: "6 ",
      goldText: "bytů",
      desc: "Celkem v komplexu",
    },
  ],
  table: [
    { label: "Stav", value: "Rezervováno" },
    { label: "Číslo bytu", value: "39/1 " },
    { label: "Dispozice", value: "3+kk" },
    { label: "Podlaží", value: "1" },
    { label: "Podlahová plocha", value: "70m2" },
    { label: "Orientace", value: "Východ" },
    { label: "Terasa", value: "15m2" },
    { label: "K nastěhování", value: "2023" },
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
