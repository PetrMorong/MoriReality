import React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ApSectionOne from "../../components/ApartmentDetail/ApSectionOne";
import ApSectionTwo from "../../components/ApartmentDetail/ApSectionTwo";
import ApSectionThree from "../../components/ApartmentDetail/ApSectionThree";

const data = {
  sectionOneBg: "v1645822951/malaMorava/ap4/C_2-min_nnuqx1.jpg",
  layoutImage: "v1645822951/malaMorava/ap4/layout_p7wr7r.png",
  apName: "Apartmán 39/4",
  projectName: "Malá Morava",
  price: "3 990 000",
  backLink: "/apartmany-mala-morava",
  sectionOneDetails: [
    {
      text: "1+",
      goldText: "kk",
      desc: "Dispozice",
    },
    {
      text: "36.4 ",
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
      text: "Malá ",
      goldText: "Morava",
      desc: "Lokatita",
    },
  ],
  gallery: [
    "v1645822952/malaMorava/ap4/C_4-min_kcsxn0.jpg",
    "v1645822946/malaMorava/ap4/C_3-min_lfymtf.jpg",
    "v1645822951/malaMorava/ap4/C_2-min_nnuqx1.jpg",
    "v1645822952/malaMorava/ap4/C_1-min_m48ufp.jpg",
    "v1645822948/malaMorava/ap4/C_5-min_za5wxv.jpg",
    "v1645822950/malaMorava/ap4/C_6-min_kfoh60.jpg",
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
    { label: "Číslo bytu", value: "39/4 " },
    { label: "Dispozice", value: "1+kk" },
    { label: "Podlaží", value: "2" },
    { label: "Podlahová plocha", value: "36.4m2" },
    { label: "Orientace", value: "Východ" },
    { label: "Terasa", value: "-" },
    { label: "Dokončení", value: "2023" },
  ],
};

const MalaMoravaAp4Page = () => {
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

export default MalaMoravaAp4Page;
