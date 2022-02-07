import React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ApSectionOne from "../../components/ApartmentDetail/ApSectionOne";
import ApSectionTwo from "../../components/ApartmentDetail/ApSectionTwo";
import ApSectionThree from "../../components/ApartmentDetail/ApSectionThree";

const data = {
  sectionOneBg: "/images/vilaRepublika/apDva/APARTMÁN10.jpg",
  layoutImage: "/images/vilaRepublika/apDva/layout.png",
  apName: "Apartmán 354/2",
  projectName: "Vila Republika",
  price: "3 990 000",
  backLink: "/vila-republika",
  sectionOneDetails: [
    {
      text: "1+",
      goldText: "kk",
      desc: "Dispozice",
    },
    {
      text: "37.6 ",
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
    "/images/vilaRepublika/apDva/APARTMÁN3.jpg",
    "/images/vilaRepublika/apDva/APARTMÁN1.jpg",
    "/images/vilaRepublika/apDva/APARTMÁN2.jpg",
    "/images/vilaRepublika/apDva/APARTMÁN10.jpg",
    "/images/vilaRepublika/apDva/APARTMÁN6.jpg",
    "/images/vilaRepublika/apDva/APARTMÁN9.jpg",
    "/images/vilaRepublika/apDva/KOUPELNA1.jpg",
    "/images/vilaRepublika/apDva/KOUPELNA5.jpg",
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
    { label: "Číslo bytu", value: "354/2 " },
    { label: "Dispozice", value: "1kk" },
    { label: "Podlaží", value: "1" },
    { label: "Podlahová plocha", value: "37.6 m2" },
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
