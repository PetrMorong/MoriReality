import React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ApSectionOne from "../../components/ApartmentDetail/ApSectionOne";
import ApSectionTwo from "../../components/ApartmentDetail/ApSectionTwo";
import ApSectionThree from "../../components/ApartmentDetail/ApSectionThree";

const data = {
  sectionOneBg: "v1647000251/vilaRepublika/ap1/o02_czzpbt.jpg",
  layoutImage: "v1645822939/vilaRepublika/ap1/layout2_y511u1.png",
  apName: "Apartmán 354/1",
  projectName: "Vila Republika",
  price: "4 790 000",
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
    "v1647000262/vilaRepublika/ap1/l07mensi_xywpsx.jpg",
    "v1647000262/vilaRepublika/ap1/l06mensi_ojitki.jpg",
    "v1647000263/vilaRepublika/ap1/l03_mszqi0.jpg",
    "v1647000261/vilaRepublika/ap1/l05_l6aizz.jpg",
    "v1647000260/vilaRepublika/ap1/l04_xlxwta.jpg",
    "v1647000259/vilaRepublika/ap1/l02_ljqbfc.jpg",
    "v1647000259/vilaRepublika/ap1/l01_bchohc.jpg",
    "v1647000259/vilaRepublika/ap1/k04_qtn5by.jpg",
    "v1647000257/vilaRepublika/ap1/k02_ohy5yk.jpg",
    "v1647000257/vilaRepublika/ap1/h04_fosbf6.jpg",
    "v1647000256/vilaRepublika/ap1/h07_ty2sbq.jpg",
    "v1647000256/vilaRepublika/ap1/h05_vjcskg.jpg",
    "v1647000254/vilaRepublika/ap1/o01_lhqt6c.jpg",
    "v1647000253/vilaRepublika/ap1/h01_njgpvp.jpg",
    "v1647000253/vilaRepublika/ap1/o03_quetkg.jpg",
    "v1647000253/vilaRepublika/ap1/h03_hxawjt.jpg",
    "v1647000253/vilaRepublika/ap1/h03_hxawjt.jpg",
    "v1647000252/vilaRepublika/ap1/h02_zj4qih.jpg",
    "v1647000251/vilaRepublika/ap1/o02_czzpbt.jpg",
    "v1647000250/vilaRepublika/ap1/h00_l1ekc3.jpg",
    "v1647000250/vilaRepublika/ap1/h06_zu8uip.jpg",
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
