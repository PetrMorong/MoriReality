import React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ApSectionOne from "../../components/ApartmentDetail/ApSectionOne";
import ApSectionTwo from "../../components/ApartmentDetail/ApSectionTwo";
import ApSectionThree from "../../components/ApartmentDetail/ApSectionThree";

const data = {
  sectionOneBg: "v1664194162/malaMorava/ap3/04_mq9nfl.jpg",
  layoutImage: "v1664194158/malaMorava/ap3/08_1_jt4n0a.jpg",
  apName: "Ap. 39/3",
  projectName: "Malá Morava",
  price: "2 990 000",
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
      text: "1+",
      goldText: "kk",
      desc: "Dispozice",
    },
    {
      text: "36 ",
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
    "v1664194161/malaMorava/ap3/03_mdgnpv.jpg",
    "v1664194160/malaMorava/ap3/02.1_uczinq.jpg",
    "v1664194163/malaMorava/ap3/05_oukwjc.jpg",
    "v1664194162/malaMorava/ap3/04_mq9nfl.jpg",
    "v1664194158/malaMorava/ap3/07_gnrdbf.jpg",
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
    { label: "Číslo bytu", value: "39/3" },
    { label: "Dispozice", value: "1+kk" },
    { label: "Podlaží", value: "1" },
    { label: "Podlahová plocha", value: "36 m2" },
    { label: "Orientace", value: "Východ" },
    { label: "Terasa", value: "12.5 m2" },
    { label: "Dokončení", value: "2023" },
  ],
};

const MalaMoravaAp5Page = () => {
  return (
    <Layout>
      <Header email="info@mori-reality.cz" phone="+420 737 211 314" />
      <ApSectionOne data={data} />
      <ApSectionTwo data={data} />
      <ApSectionThree data={data} />
      <Footer email="info@mori-reality.cz" phone="+420 737 211 314" />
    </Layout>
  );
};

export default MalaMoravaAp5Page;
