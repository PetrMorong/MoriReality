import React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ApSectionOne from "../../components/ApartmentDetail/ApSectionOne";
import ApSectionTwo from "../../components/ApartmentDetail/ApSectionTwo";
import ApSectionThree from "../../components/ApartmentDetail/ApSectionThree";

const data = {
  sectionOneBg: "v1646637293/hrabenov/apA/1_xiveuc.jpg",
  layoutImage: "v1646638993/hrabenov/apA/Untitled_9_z1vzyk.png",
  apName: "Ap. 245/1",
  projectName: "Rezidence Hrabenov",
  price: "3 940 000",
  backLink: "/rezidence-hrabenov",
  apTitle: "Apartmán Zlatník",
  apText: (
    <>
      Vzdušný mezonet se dvěma ložnicemi a nadstandardní obytnou částí. Svým
      prostorovým uspořádáním uspokojí i nároky pro pohodovou rodinnou
      dovolenou. Náleží k němu vlastní část{" "}
      <span>zahrady o velikosti 75 m2</span> se samostatným vchodem. V horním
      patře se nachází velký obývací prostor s kuchyní, první ložnice a
      prostorná koupelna. Po točitých schodech se dostanete do spodní části, kde
      je umístěna další ložnice pro klidné spaní.
      <br />
      <br />
      V ceně prodeje apartmánu je <span>parkovací stání a sklep.</span> Dále
      kompletně zařízená kuchyňská linka včetně elektrospotřebičů, podlahy,
      obklady, dlažby i sanita. Za příplatek vám také rádi vybavíme apartmán{" "}
      <span>kompletně dle návrhu interiérového designéra</span>, od nábytku
      a doplňků až k nádobí či příborům.
    </>
  ),
  sectionOneDetails: [
    {
      text: "3+",
      goldText: "kk",
      desc: "Dispozice",
    },
    {
      text: "63 ",
      goldText: "m2",
      desc: "Podlahová Plocha",
    },
    {
      text: "2 ",
      goldText: "NP",
      desc: "Umístění",
    },
    {
      text: "Jihozápad",
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
    "v1646637295/hrabenov/apA/8_h9o5zs.jpg",
    "v1646637295/hrabenov/apA/2_dvckd5.jpg",
    "v1646637293/hrabenov/apA/1_xiveuc.jpg",
    "v1646637292/hrabenov/apA/6_lzwnwa.jpg",
    "v1646637292/hrabenov/apA/6_lzwnwa.jpg",
    "v1646637291/hrabenov/apA/9_kkrr6u.jpg",
    "v1646637291/hrabenov/apA/9_kkrr6u.jpg",
    "v1646637289/hrabenov/apA/10_e90kfz.jpg",
    "v1646637289/hrabenov/apA/5_xptqfv.jpg",
    "v1645823344/hrabenov/1_frp1mw.jpg",
    "v1645823341/hrabenov/4_isndkx.jpg",
    "v1646062243/hrabenov/9_gt3rxh.jpg",
    "v1646062245/hrabenov/ISO_cjeydz.jpg",
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
      desc: "apartmány v domě",
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
    { label: "Dispozice", value: "3+kk" },
    { label: "Podlaží", value: "2" },
    { label: "Podlahová plocha", value: "63m2" },
    { label: "Orientace", value: "Jihozápad" },
    { label: "Zahrada", value: "70m2" },
    { label: "Dokončení", value: "2022" },
  ],
};

const MalaMoravaAp1Page = () => {
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

export default MalaMoravaAp1Page;
