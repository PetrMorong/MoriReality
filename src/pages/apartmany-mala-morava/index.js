import * as React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PriceList from "../../components/ProjectDetail/PriceList";
import OtherProjects from "../../components/ProjectDetail/OtherProjects";
import ProjectSectionOne from "../../components/ProjectDetail/ProjectSectionOne";
import ProjectSectionTwo from "../../components/ProjectDetail/ProjectSectionTwo";
import ProjectSectionThree from "../../components/ProjectDetail/ProjectSectionThree";
import ProjectSectionFour from "../../components/ProjectDetail/ProjectSectionFour";
import ProjectSectionFive from "../../components/ProjectDetail/ProjectSectionFive";
import ProjectSectionSix from "../../components/ProjectDetail/ProjectSectionSix";

const data = {
  status: "Předprodej",
  title: "Horské Apartmány Malá Morava",
  locationOne: "Vlaské 39",
  locationTwo: "Malá Morava, Olomoucký kraj",
  cover: "vilaRepublikaCover",
  desc: (
    <>
      Zde je místo pri krátky slovní popis prezentovaného projektu. Jsme rodinná
      firma, která se s důrazem na poctivé řemeslo, kvalitu a nadčasový design
      soutředí na výstavbu horských apartmánů v Jeseníkách a rezidenčních
      nemovitostí na Šumpersku.
      <br />
      <br />
      Našim cílem je poskytovat kvalitní a spolehlivé stavební služby. Při
      realizaci vašich představ, myšlenek. Našim cílem je poskytovat kvalitní a
      spolehlivé stavební služby.
    </>
  ),
  sliderImages: [
    {
      imageUrl: "/images/malaMorava/POHLAD1-min.jpg",
    },
    {
      imageUrl: "/images/malaMorava/POHLAD2-min.jpg",
    },
    {
      imageUrl: "/images/malaMorava/CHODBA3-2-min.jpg",
    },
    {
      imageUrl: "/images/malaMorava/CHODBA3-1-min.jpg",
    },
    {
      imageUrl: "/images/malaMorava/SKLEP-min.jpg",
    },
    {
      imageUrl: "/images/malaMorava/SKLEP-WELLNESS-min.jpg",
    },
    {
      imageUrl: "/images/malaMorava/ap5/D_2-min.jpg",
    },
    {
      imageUrl: "/images/malaMorava/ap5/D_3-min.jpg",
    },
    {
      imageUrl: "/images/malaMorava/ap5/D_4-min.jpg",
    },
    {
      imageUrl: "/images/malaMorava/ap5/D_5-min.jpg",
    },
    {
      imageUrl: "/images/malaMorava/1NPpůdorys-min.png",
    },
    {
      imageUrl: "/images/malaMorava/2NPpůdorys-min.png",
    },
    {
      imageUrl: "/images/malaMorava/1PP-min.png",
    },
    {
      imageUrl: "/images/malaMorava/malaMoravaRez.png",
    },
    {
      imageUrl: "/images/malaMorava/situace.png",
    },
  ],
  stats: [
    {
      value: "1500",
      highlighted: "m2",
      desc: "Plocha pozemku",
    },
    {
      value: "6",
      highlighted: "",
      desc: "Apartmánů",
    },
    {
      value: "Až",
      highlighted: "2+1",
      desc: "Dispozice Apartmánů",
    },
    {
      value: "Duben",
      highlighted: "2023",
      desc: "Termín Dokončení Apartmánů",
    },
  ],
  features: [
    {
      icon: "saunaIcon",
      desc: "Privátní wellness",
    },
    {
      icon: "saunaIcon",
      desc: "Lyžárna",
    },
    {
      icon: "saunaIcon",
      desc: "Herní koutek",
    },
    {
      icon: "saunaIcon",
      desc: "Vinný sklípek",
    },
    {
      icon: "saunaIcon",
      desc: "15 parkovacích míst",
    },
    {
      icon: "saunaIcon",
      desc: "Chytrá domácnost Loxone",
    },
    {
      icon: "saunaIcon",
      desc: "Podlahové Topení",
    },
    {
      icon: "saunaIcon",
      desc: "Chytrý zámek na kód",
    },
  ],
  sectionImageOne: "/images/malaMorava/apDva/B_6-min.jpg",
  sectionImageTwo: "/images/malaMorava/ap4/C_5-min.jpg",
  sectionCover: "/images/malaMorava/ap1/A_3-min.jpg",
  ticksSection: [
    {
      highlighted: "Obchod i služby",
      normal: "vše na dosah",
      desc: "Nemovisti které stavíme jsou navrženy v moderním a nadčasovém designu, ale jsme připraveni vyhovět vaším požadavkům a představám do nejvyšší možné míry.",
    },
    {
      highlighted: "na dosah vašich rukou",
      normal: "Zeleň a příroda",
      desc: "Nemovisti které stavíme jsou navrženy v moderním a nadčasovém designu, ale jsme připraveni vyhovět vaším požadavkům a představám do nejvyšší možné míry.",
    },
    {
      highlighted: "na dosah vašich rukou",
      normal: "Zeleň a příroda",
      desc: "Nemovisti které stavíme jsou navrženy v moderním a nadčasovém designu, ale jsme připraveni vyhovět vaším požadavkům a představám do nejvyšší možné míry.",
    },
  ],
  apartments: [
    {
      price: "5 790 000 Kč",
      number: "39/1",
      floor: "1NP",
      layout: "2kk",
      size: "72 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: false,
      link: "/apartmany-mala-morava/ap-1",
    },
    {
      price: "5 290 000 Kč",
      number: "39/2",
      floor: "1NP",
      layout: "2kk",
      size: "51 m2",
      terasa: "19,25 m2",
      parking: "1",
      link: "",
      reserved: false,
      link: "/apartmany-mala-morava/ap-2",
    },
    {
      price: "4 490 000 Kč",
      number: "39/3",
      floor: "1NP",
      layout: "2kk",
      size: "49 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: true,
    },

    {
      price: "3 990 000Kč",
      number: "39/4",
      floor: "2NP",
      layout: "1kk",
      size: "36.4 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: false,
      link: "/apartmany-mala-morava/ap-4",
    },
    {
      price: "4 490 000 Kč",
      number: "39/5",
      floor: "2NP",
      layout: "2kk",
      size: "49.7 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: false,
      link: "/apartmany-mala-morava/ap-5",
    },
    {
      price: "2 990 000 Kč",
      number: "39/6",
      floor: "2NP",
      layout: "1kk",
      size: "24.6 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: false,
      link: "/apartmany-mala-morava/ap-6",
    },
    {
      price: "4 390 000 Kč",
      number: "39/7",
      floor: "2NP",
      layout: "2kk",
      size: "48.92 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: false,
      link: "/apartmany-mala-morava/ap-7",
    },
  ],
  otherProjects: [
    {
      image: "/images/vilaRepublika/mp01-min.jpg",
      name: "Vila republika",
      location: "Velké Losiny",
      link: "/vila-republika",
    },
    {
      image: "/images/projektVlDva.png",
      name: "Wellness ApartHotel",
      location: "Velké Losiny",
    },
    {
      image: "/images/Hrabenov1.png",
      name: "Rezidence Hrabenov",
      location: "Hrabenov, Ruda Nad Moravou",
    },
  ],
  architectName: "Pavol Vojtek",
  architectWord:
    "“Historický objekt zo začiatku minulého storočia tu bol pred každým z nás a vďaka citlivej a poctivej rekonštrukcií bude ešte dlho slúžiť aj budúcim generáciám. Ukrýva v sebe niekoľko odkazov na dobu svojho vzniku, ktoré sme prečítali a nechali odprezentované Vám - budúcim užívateľom.“",
};

const VilaRepublika = () => {
  return (
    <Layout>
      <Header />
      <ProjectSectionOne data={data} />
      <ProjectSectionTwo data={data} />
      <ProjectSectionThree data={data} />
      <ProjectSectionFour data={data} />
      <ProjectSectionFive data={data} />
      <ProjectSectionSix data={data} />
      <PriceList data={data} />
      <OtherProjects data={data} />
      <Footer />
    </Layout>
  );
};

export default VilaRepublika;
