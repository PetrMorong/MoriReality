import React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ApSectionOne from "../../components/ApartmentDetail/ApSectionOne";
import ApSectionTwo from "../../components/ApartmentDetail/ApSectionTwo";
import ApSectionThree from "../../components/ApartmentDetail/ApSectionThree";

const data = {
  sectionOneBg: "v1664193128/malaMorava/ap1/Loznice_3_c2gfqz.jpg",
  layoutImage: "v1645822958/malaMorava/ap1/A_9-min_ii0uxj.jpg",
  apName: "Ap. 39/1",
  projectName: "Malá Morava",
  price: "4 490 000",
  backLink: "/apartmany-mala-morava",
  apTitle: "Apartmán Devětsil",
  apText: (
    <>
      Nadčasový apartmán v klasickém stylu. Největší z nabízených v horské
      chalupě Malá Morava. Má velice útulnou atmosférou, kterou umocňují{" "}
      <span>původní zrenovované parkety.</span> Dominantu bydlení tvoří obývací
      prostor s kuchyní, jídelní a odpočinkovou částí. Umístěna zde může být i
      rozkládací pohovka pro hosty. Součástí je dále samostatná ložnice,
      koupelna se sprchovým koutem a dvěma umyvadly a prostorná vstupní hala.
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
      text: "72 ",
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
    "v1664193128/malaMorava/ap1/Loznice_2_yafacv.jpg",
    "v1664193128/malaMorava/ap1/Loznice_1_w1uhjd.jpg",
    "v1664193128/malaMorava/ap1/Loznice_3_c2gfqz.jpg",
    "v1664192807/malaMorava/ap1/5_b5oh0d.jpg",
    "v1664192806/malaMorava/ap1/4_olq2le.jpg",
    "v1664192807/malaMorava/ap1/3_cm2r9i.jpg",
    "v1664192806/malaMorava/ap1/KOUPELNA_3_v7ele9.jpg",
    "v1664192806/malaMorava/ap1/KOUPELNA_1_vtiyiv.jpg",
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
    { label: "Číslo bytu", value: "39/1 " },
    { label: "Dispozice", value: "2+kk" },
    { label: "Podlaží", value: "1" },
    { label: "Podlahová plocha", value: "72m2" },
    { label: "Orientace", value: "Východ" },
    { label: "Terasa", value: "-" },
    { label: "Dokončení", value: "2023" },
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
