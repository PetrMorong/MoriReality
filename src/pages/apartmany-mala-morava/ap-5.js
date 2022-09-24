import React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ApSectionOne from "../../components/ApartmentDetail/ApSectionOne";
import ApSectionTwo from "../../components/ApartmentDetail/ApSectionTwo";
import ApSectionThree from "../../components/ApartmentDetail/ApSectionThree";

const data = {
  sectionOneBg: "v1645822950/malaMorava/ap5/D_2-min_m8yzjh.jpg",
  layoutImage: "v1645822939/malaMorava/ap5/layout_cfzwxy.png",
  apName: "Ap. 39/5",
  projectName: "Malá Morava",
  price: "4 490 000",
  backLink: "/apartmany-mala-morava",
  apTitle: "Apartmán Dobromysl",
  apText: (
    <>
      <span>Vzdušný mezonetový apartmán v horském stylu</span>, který má
      oddělenou obytnou a odpočinkovou zónu. V prvním patře se nachází
      společenská místnost s kuchyní, jídelnou a obývací části, dále pak
      samostatná koupelna s toaletou a sprchovým koutem. Po točitém schodišti se
      dostanete do útulné podkrovní ložnice, kde se krásně spí. Zrenovované
      trámy a dřevěné patro dodávají bydlení jedinečné vyznění.
      <br />
      <br />
      V ceně apartmánu je kompletně zařízená kuchyňská linka včetně
      elektrospotřebičů, dále podlahy, obklady, dlažby i sanita. Za příplatek
      vám rádi interiér vybavíme kompletně dle návrhu interiérového designéra.
      Postaráme se vám rovněž o správu krátkodobých pronájmů v době, kdy
      nebudete apartmán využívat sami.
    </>
  ),
  sectionOneDetails: [
    {
      text: "2+",
      goldText: "kk",
      desc: "Dispozice",
    },
    {
      text: "49.7 ",
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
    "v1645822941/malaMorava/ap5/D_4-min_rpgi1k.jpg",
    "v1645822950/malaMorava/ap5/D_2-min_m8yzjh.jpg",
    "v1645822945/malaMorava/ap5/D_5-min_tasob8.jpg",
    "v1645822947/malaMorava/ap5/D_3-min_q7owfw.jpg",
    "v1645822949/malaMorava/ap5/D_7-min_qaodtx.jpg",
    "v1645822947/malaMorava/ap5/D_6-min_yivyvx.jpg",
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
    { label: "Číslo bytu", value: "39/5" },
    { label: "Dispozice", value: "2+kk" },
    { label: "Podlaží", value: "2" },
    { label: "Podlahová plocha", value: "49.7 m2" },
    { label: "Orientace", value: "Východ" },
    { label: "Terasa", value: "-" },
    { label: "Dokončení", value: "2023" },
  ],
};

const MalaMoravaAp5Page = () => {
  return (
    <Layout>
      <Header email="dominik.lokoc@homeportal.cz" phone="+420 602 732 879" />
      <ApSectionOne data={data} />
      <ApSectionTwo data={data} />
      <ApSectionThree data={data} />
      <Footer email="dominik.lokoc@homeportal.cz" phone="+420 602 732 879" />
    </Layout>
  );
};

export default MalaMoravaAp5Page;
