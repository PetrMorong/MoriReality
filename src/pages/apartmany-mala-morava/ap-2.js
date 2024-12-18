import React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ApSectionOne from "../../components/ApartmentDetail/ApSectionOne";
import ApSectionTwo from "../../components/ApartmentDetail/ApSectionTwo";
import ApSectionThree from "../../components/ApartmentDetail/ApSectionThree";

const data = {
  sectionOneBg: "v1664193868/malaMorava/apDva/02_javate.jpg",
  layoutImage: "v1664193870/malaMorava/apDva/08_wgonym.jpg",
  apName: "Ap. 39/2",
  projectName: "Malá Morava",
  price: "3 990 000",
  backLink: "/apartmany-mala-morava",
  apTitle: "Apartmán Zvonečník",
  apText: (
    <>
      <span>Designový apartmán s klenbami</span>, působivými interiérovými prvky
      a členitou dispozicí. Dominantu tvoří společenský pokoj s kuchyňským
      ostrůvkem, jídelním koutem a obývací části. Na tuto místnost navazuje
      první z ložnic, která je pro zachování vzdušnosti oddělena prosklenou
      francouzskou stěnou. Do druhé ložnice se vchází ze vstupní haly, stejně
      jako do samostatné koupelny. Tento umělecky pojatý apartmán rozhodně{" "}
      <span>patří mezi nejoriginálnější v našem projektu Malá Morava</span>.
      Jako jediný má vlastní terasu, ideální pro ranní kávu či snídani
      s výhledem.
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
      text: "51 ",
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
    "v1664193869/malaMorava/apDva/03_q8fsme.jpg",
    "v1664193868/malaMorava/apDva/02_javate.jpg",
    "v1664193865/malaMorava/apDva/01_fyzfct.jpg",
    "v1664193866/malaMorava/apDva/05_qzb5kz.jpg",
    "v1664193867/malaMorava/apDva/07_ocvf3e.jpg",
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
    { label: "Číslo bytu", value: "39/2" },
    { label: "Dispozice", value: "2+kk" },
    { label: "Podlaží", value: "1" },
    { label: "Podlahová plocha", value: "51m2" },
    { label: "Orientace", value: "Východ" },
    { label: "Terasa", value: "19.25" },
    { label: "Dokončení", value: "2023" },
  ],
};

const MalaMoravaAp2Page = () => {
  return (
    <Layout>
      <Header email="info@mori-reality.cz" phone="+420 775 561 091" />
      <ApSectionOne data={data} />
      <ApSectionTwo data={data} />
      <ApSectionThree data={data} />
      <Footer email="info@mori-reality.cz" phone="+420 775 561 091" />
    </Layout>
  );
};

export default MalaMoravaAp2Page;
