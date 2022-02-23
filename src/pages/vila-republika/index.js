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
  status: "Ve výstavbě",
  title: "Apartmánový dům Vila republika",
  locationOne: "Osvobození 354",
  locationTwo: "Velké Losiny, Olomoucký kraj",
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
      imageUrl: "/images/vilaRepublika/mp01-min.jpg",
    },
    {
      imageUrl: "/images/vilaRepublika/img2.png",
    },
    {
      imageUrl: "/images/vilaRepublika/mp02-min.jpg",
    },
    {
      imageUrl: "/images/vilaRepublika/1.1-min.jpg",
    },
    {
      imageUrl: "/images/vilaRepublika/1.3.3-min.jpg",
    },
    {
      imageUrl: "/images/vilaRepublika/F3-min.jpg",
    },
    {
      imageUrl: "/images/vilaRepublika/SAUNA1-min.jpg",
    },
    {
      imageUrl: "/images/vilaRepublika/SAUNA2-min.jpg",
    },
  ],
  stats: [
    {
      value: "950",
      highlighted: "m2",
      desc: "Plocha pozemku",
    },
    {
      value: "7",
      highlighted: "",
      desc: "Apartmánů",
    },
    {
      value: "Až",
      highlighted: "3+1",
      desc: "Dispozice Apartmánů",
    },
    {
      value: "Červen",
      highlighted: "2022",
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
  sectionImageOne: "/images/vilaRepublikaSectionImage1.jpeg",
  sectionImageTwo: "/images/vilaRepublikaSectionImage2.jpeg",
  sectionCover: "/images/vilaRepublikaSectionCover.jpeg",
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
      price: "5 490 000 Kč",
      number: "354/1",
      floor: "1NP",
      layout: "2 + 1",
      size: "48,2 m2",
      terasa: "7,8 m2",
      parking: "1",
      link: "/vila-republika/ap-1",
      reserved: true,
    },
    {
      price: "3 990 000 Kč",
      number: "354/2",
      floor: "1NP",
      layout: "1 + 1",
      size: "36,9 m2",
      terasa: "-",
      parking: "1",
      link: "/vila-republika/ap-2",
      reserved: true,
    },
    {
      price: "5 990 000 Kč",
      number: "354/3",
      floor: "1NP",
      layout: "2kk",
      size: "65,3 m2",
      terasa: "15,6 m2",
      parking: "1",
      link: "",
      reserved: true,
    },
    {
      price: "4 500 000 Kč",
      number: "354/4",
      floor: "2NP",
      layout: "1 + 1",
      size: "37,7 m2",
      terasa: "13,8m2",
      parking: "1",
      link: "",
      reserved: true,
    },
    {
      price: "4 990 000 Kč",
      number: "354/5",
      floor: "2NP",
      layout: "1 + 1",
      size: "40,6 m2",
      terasa: "3,6 m2",
      parking: "1",
      link: "/vila-republika/ap-5",
      reserved: true,
    },
    {
      price: "5 990 000 Kč",
      number: "354/6",
      floor: "2NP",
      layout: "2 + 1",
      size: "57,7 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: true,
    },
    {
      price: "7 990 000 Kč",
      number: "354/7",
      floor: "2NP",
      layout: "1kk",
      size: "133 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: true,
    },
  ],
  otherProjects: [
    {
      image: "/images/projektMalaMorava.jpg",
      name: "Horské Apartmány",
      location: "Vlaské, Malá Morava",
      link: "/apartmany-mala-morava",
    },
    {
      image: "/images/Hrabenov1.png",
      name: "Rezidence Hrabenov",
      location: "Hrabenov, Ruda Nad Moravou",
    },
    {
      image: "/images/projektVlDva.png",
      name: "Wellness ApartHotel",
      location: "Velké Losiny",
    },
  ],
  architectName: "Nikol Cojocaru",
  architectWord:
    "“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.“",
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
