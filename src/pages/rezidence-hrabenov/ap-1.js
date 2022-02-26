import React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ApSectionOne from "../../components/ApartmentDetail/ApSectionOne";
import ApSectionTwo from "../../components/ApartmentDetail/ApSectionTwo";
import ApSectionThree from "../../components/ApartmentDetail/ApSectionThree";

const data = {
  sectionOneBg: "v1645865838/hrabenov/A_3.1_e7dbga.jpg",
  layoutImage: "v1645822941/hrabenov/layout2_o7fr6m.png",
  apName: "Apartmán 245/1",
  projectName: "Rezidence Hrabenov",
  price: "3 450 000",
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
    "v1645865784/hrabenov/A_2.1.1_qm3upq.jpg",
    "v1645865838/hrabenov/A_3.1_e7dbga.jpg",
    "v1645865781/hrabenov/A_1.1_dkbpmk.jpg",
    "v1645822960/hrabenov/B_6-min_uqvhkn.jpg",
    "v1645822945/hrabenov/B_5B-min_acj2g4.jpg",
    "v1645822947/hrabenov/B_8B-min_zoy8mu.jpg",
    "v1645822950/hrabenov/B_10B-min_gnucxy.jpg",
    "v1645822946/hrabenov/B_9B-min_yjq6vr.jpg",
    "v1645823344/hrabenov/1_frp1mw.jpg",
    "v1645823341/hrabenov/4_isndkx.jpg",
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
