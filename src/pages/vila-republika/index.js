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
      imageUrl: "v1645822941/vilaRepublika/mp01-min_pilgkw.jpg",
    },
    {
      imageUrl: "v1645822964/vilaRepublika/img2_j6mpok.png",
    },
    {
      imageUrl: "v1645822943/vilaRepublika/mp02-min_yspitq.jpg",
    },
    {
      imageUrl: "v1645822938/vilaRepublika/1.1-min_yaebmu.jpg",
    },
    {
      imageUrl: "v1645822938/vilaRepublika/1.3.3-min_j5ku93.jpg",
    },
    {
      imageUrl: "v1645822943/vilaRepublika/F3-min_icpvqo.jpg",
    },
    {
      imageUrl: "v1645822937/vilaRepublika/SAUNA1-min_r0jgcz.jpg",
    },
    {
      imageUrl: "v1645822962/vilaRepublika/SAUNA2-min_p65zfc.jpg",
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
      icon: "/features/sauna.png",
      desc: "Privátní wellness",
    },
    {
      icon: "/features/ski.png",
      desc: "Lyžárna",
    },
    {
      icon: "/features/table-football(1).png",
      desc: "Společenská místnost",
    },
    {
      icon: "/features/view.png",
      desc: "Krásný výhled",
    },
    {
      icon: "/features/park.png",
      desc: "Zahrada",
    },
    {
      icon: "/features/parking-area.png",
      desc: "Parkovací místo",
    },
    {
      icon: "/features/smart-home.png",
      desc: "Chytrá domácnost",
    },
    {
      icon: "/features/door-lock.png",
      desc: "Chytrý zámek na kód",
    },
  ],

  sectionFourOneText: {
    title: "Zachovalé historické",
    titleGold: "detaily a prvky",
    desc: "S úctou k tradicím. V rámci rekonstrukce jsme se snažili o zachování všech okouzlujících historických prvků, které dodávají místu osobitý charakter. V některých apartmánech jsme ponechali originální zrenovované parkety, stejně tak restaurujeme výklenky kolem oken, původní kování, panty, okna a dveře.",
  },

  sectionFourTwoText: {
    title: "Moderní domácnost",
    titleGold: "a vyspělé technologie",
    desc: "Domácnost, která se řídí sama a lze ji ovládat na dálku, je součástí i našeho projektu. Vydáváte se na víkend na lyže? Zapněte si topení v předstihu a přijeďte do vyhřátého. Zapomněli jste zhasnout světla při odjezdu? Učiňte tak jedním kliknutím odkudkoliv. Moderní technologie zajišťují pohodlí, šetří energie i váš čas. Pokud máte v plánu apartmán pronajímat v době, kdy ho nevyužíváte sami, stačí hostům zadat unikátní kód, pomocí kterého se dostanou do budovy.",
  },

  sectionImageOne: "v1645823019/vilaRepublikaSectionImage1_ph3pqx.jpg",
  sectionImageTwo: "v1645823022/vilaRepublikaSectionImage2_u0mzde.jpg",
  sectionCover: "v1645823020/vilaRepublikaSectionCover_hju4sd.jpg",
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
      image: "v1645823018/projektMalaMorava_nzkcnk.jpg",
      name: "Horské Apartmány",
      location: "Vlaské, Malá Morava",
      link: "/apartmany-mala-morava",
    },
    {
      image: "v1645823344/hrabenov/1_frp1mw.jpg",
      name: "Rezidence Hrabenov",
      location: "Hrabenov, Ruda Nad Moravou",
    },
    {
      image: "v1645823025/projektVlDva_p4fsrb.png",
      name: "Wellness ApartHotel",
      location: "Velké Losiny",
    },
  ],
  timelineFill: "10%",
  timeline: [
    {
      title: "Projektová dokumentace",
      date: "Únor 2022",
    },
    {
      title: "Zahájení rekonstrukce",
      date: "Duben 2022",
    },
    {
      title: "Dokončení rekonstrukce",
      date: "Listopad 2022",
    },
    {
      title: "Předání nemovitosti",
      date: "Prosinec 2022",
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
