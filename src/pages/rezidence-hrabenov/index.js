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
  title: "Rezidence Hrabenov",
  locationOne: "Hrabenov 245",
  locationTwo: "Ruda nad Moravou, Olomoucký kraj",
  cover:
    "https://res.cloudinary.com/morireality/image/upload/v1645823021/vilaRepublikaCover_hykftv.png ",
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
      imageUrl: "v1645823344/hrabenov/1_frp1mw.jpg",
    },
    {
      imageUrl: "v1645823341/hrabenov/2_g1tut1.jpg",
    },
    {
      imageUrl: "v1645823341/hrabenov/4_isndkx.jpg",
    },
    {
      imageUrl: "v1645823305/hrabenov/A_1.1_ah7zah.jpg",
    },
    {
      imageUrl: "v1645865784/hrabenov/A_2.1.1_qm3upq.jpg",
    },
    {
      imageUrl: "v1645865838/hrabenov/A_3.1_e7dbga.jpg",
    },
    {
      imageUrl: "v1645822960/hrabenov/B_6-min_uqvhkn.jpg",
    },
    {
      imageUrl: "v1645822947/hrabenov/B_8B-min_zoy8mu",
    },
    {
      imageUrl: "v1645822946/hrabenov/B_9B-min_yjq6vr.jpg",
    },
  ],
  stats: [
    {
      value: "350",
      highlighted: "m2",
      desc: "Plocha pozemku",
    },
    {
      value: "3",
      highlighted: "",
      desc: "Byty",
    },
    {
      value: "Až",
      highlighted: "3+1",
      desc: "Dispozice Bytů",
    },
    {
      value: "Prosinec",
      highlighted: "2023",
      desc: "Termín Dokončení Apartmánů",
    },
  ],
  features: [
    {
      icon: "saunaIcon",
      desc: "Sauna",
    },
    {
      icon: "saunaIcon",
      desc: "Lyžárna",
    },
    {
      icon: "saunaIcon",
      desc: "Kulečník",
    },
    {
      icon: "saunaIcon",
      desc: "Bazén",
    },
    {
      icon: "saunaIcon",
      desc: "Zahrada",
    },
    {
      icon: "saunaIcon",
      desc: "5 parkovacích míst",
    },
    {
      icon: "saunaIcon",
      desc: "Sklep",
    },
    {
      icon: "saunaIcon",
      desc: "Chytrý zámek na kód",
    },
  ],
  sectionImageOne: "v1645865784/hrabenov/A_2.1.1_qm3upq.jpg",
  sectionImageTwo: "v1645822960/hrabenov/B_7-min_d5ngyj.jpg",
  sectionCover: "v1645865838/hrabenov/A_3.1_e7dbga.jpg",
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
      price: "3 450 000 Kč",
      number: "245/1",
      floor: "2NP",
      layout: "2 + kk",
      size: "75 m2",
      terasa: "95 m2",
      parking: "1",
      link: "/rezidence-hrabenov/ap-1",
      reserved: false,
    },
    {
      price: "3 450 000 Kč",
      number: "245/2",
      floor: "2NP",
      layout: "2 + 1",
      size: "74 m2",
      terasa: "50 m2",
      parking: "1",
      link: "/rezidence-hrabenov/ap-2",
      reserved: false,
    },
    {
      price: "3 990 000 Kč",
      number: "245/3",
      floor: "3NP",
      layout: "3 + 1",
      size: "100 m2",
      terasa: "50 m2",
      parking: "1",
      link: "/rezidence-hrabenov/ap-3",
      reserved: false,
    },
  ],
  otherProjects: [
    {
      image: "v1645823018/projektMalaMorava_nzkcnk.jpg",
      name: "Horské Apartmány",
      location: "Vlaské, Malá Morava",
      link: "/apartmany-mala-morava",
    },
    {
      image: "v1645822941/vilaRepublika/mp01-min_pilgkw.jpg",
      name: "Vila republika",
      location: "Velké Losiny",
      link: "/vila-republika",
    },
    {
      image: "v1645823025/projektVlDva_p4fsrb.png",
      name: "Wellness ApartHotel",
      location: "Velké Losiny",
    },
  ],
  architectName: "Pavol Vojtek",
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
