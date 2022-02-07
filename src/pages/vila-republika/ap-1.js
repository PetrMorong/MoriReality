import React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ApSectionOne from "../../components/ApartmentDetail/ApSectionOne";
import ApSectionTwo from "../../components/ApartmentDetail/ApSectionTwo";
import ApSectionThree from "../../components/ApartmentDetail/ApSectionThree";

const data = {
  sectionOneBg: "/images/vilaRepublika/ap1/velkáložnice6.jpg",
  layoutImage: "/images/vilaRepublika/ap1/layout2.png",
  apName: "Apartmán 354/1",
  projectName: "Vila Republika",
  price: "5 490 000",
  backLink: "/vila-republika",
  sectionOneDetails: [
    {
      text: "2+",
      goldText: "1",
      desc: "Dispozice",
    },
    {
      text: "51.7 ",
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
      text: "Velké ",
      goldText: "Losiny",
      desc: "Lokatita",
    },
  ],
  gallery: [
    "/images/vilaRepublika/ap1/APARTMÁN5.jpg",
    "/images/vilaRepublika/ap1/APARTMÁN7.jpg",
    "/images/vilaRepublika/ap1/APARTMÁN9.jpg",
    "/images/vilaRepublika/ap1/KOUPELNA3(1).jpg",
    "/images/vilaRepublika/ap1/velkáložnice2.jpg",
    "/images/vilaRepublika/ap1/velkáložnice6.jpg",
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
    { label: "Číslo bytu", value: "354/1 " },
    { label: "Dispozice", value: "2+1" },
    { label: "Podlaží", value: "1" },
    { label: "Podlahová plocha", value: "51.7 m2" },
    { label: "Orientace", value: "Východ" },
    { label: "Terasa", value: "7 m2" },
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
