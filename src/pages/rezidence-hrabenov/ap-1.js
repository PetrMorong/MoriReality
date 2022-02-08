import React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ApSectionOne from "../../components/ApartmentDetail/ApSectionOne";
import ApSectionTwo from "../../components/ApartmentDetail/ApSectionTwo";
import ApSectionThree from "../../components/ApartmentDetail/ApSectionThree";

const data = {
  sectionOneBg: "/images/hrabenov/B_1-min.jpg",
  layoutImage: "/images/hrabenov/layout2.png",
  apName: "Byt 245/1",
  projectName: "Rezidence Hrabenov",
  price: "5 790 000",
  backLink: "/rezidence-hrabenov",
  sectionOneDetails: [
    {
      text: "2+",
      goldText: "kk",
      desc: "Dispozice",
    },
    {
      text: "75 ",
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
      text: "",
      goldText: "Hrabenov",
      desc: "Lokatita",
    },
  ],
  gallery: [
    "/images/hrabenov/B_1-min.jpg",
    "/images/hrabenov/B_2-min.jpg",
    "/images/hrabenov/B_3-min.jpg",
    "/images/hrabenov/B_4-min.jpg",
    "/images/hrabenov/B_5-min.jpg",
    "/images/hrabenov/B_6-min.jpg",
    "/images/hrabenov/B_7-min.jpg",
    "/images/hrabenov/B_8-min.jpg",
    "/images/hrabenov/B_9-min.jpg",
    "/images/hrabenov/B_10-min.jpg",
  ],
  moreDetails: [
    {
      text: "2023",
      goldText: "",
      desc: "Datum Dokončení",
    },
    {
      text: "",
      goldText: "3 ",
      desc: "byty v domě",
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
    { label: "Číslo bytu", value: "245/1 " },
    { label: "Dispozice", value: "2+kk" },
    { label: "Podlaží", value: "2" },
    { label: "Podlahová plocha", value: "75m2" },
    { label: "Orientace", value: "Východ" },
    { label: "Terasa", value: "17" },
    { label: "Zahrada", value: "75" },
    { label: "Dokončení", value: "2022" },
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
