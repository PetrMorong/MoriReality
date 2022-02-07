import React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ApSectionOne from "../../components/ApartmentDetail/ApSectionOne";
import ApSectionTwo from "../../components/ApartmentDetail/ApSectionTwo";
import ApSectionThree from "../../components/ApartmentDetail/ApSectionThree";

const data = {
  sectionOneBg: "/images/vilaRepublika/ap5/4.png",
  layoutImage: "/images/vilaRepublika/ap5/layout4.png",
  apName: "Apartmán 354/5",
  projectName: "Vila Republika",
  price: "3 990 000",
  backLink: "/vila-republika",
  sectionOneDetails: [
    {
      text: "1+",
      goldText: "1",
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
    "/images/vilaRepublika/ap5/1.png",
    "/images/vilaRepublika/ap5/2.png",
    "/images/vilaRepublika/ap5/3.png",
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
    { label: "Dispozice", value: "1+1" },
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
