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
  title: "Červený dvůr",
  locationOne: "Výzkumníků 267",
  locationTwo: "Rapotín, okres Šumperk",
  cover: "vilaRepublikaCover",
  // videoUrl: "https://youtu.be/23EWRlkDA4s",
  desc: (
    <>
      Historie Červého dvora je provázána s osudy rodu Žerotínů a následně Lichtenštejnů,
      kteří ho využívali jako panské odpočinkové sídlo. Zdejší dvory mají původ ve feudálním
      hospodářství. Vznikaly z potřeby šlechty zajistit pro svou rodinu, úředníky i služebnictvo
      dostatek potravin. První oficiální zmínky o poplužním dvoře nacházíme kolem roku 1618
      v Zemských deskách. 
     
      Dvory se zaměřovaly na zemědělskou produkci, včetně pěstování obilí,
chovu dobytka a zakládání zahrad. Rapotínský dvůr byl postaven ve tvaru nepravidelného
otevřeného čtyřúhelníku s centrální budovou zámečku. V roce 1800 došlo mezi žerotínskou
vrchností a rapotínskými sedláky k dohodě, že se mohou z roboty vyplatit. 
    </>
  ),
  sliderImages: [
    {
      imageUrl: "v1705666647/Rapotin/C_1_3_xk16jr.jpg",
    },

    {
      imageUrl: "v1705666647/Rapotin/B_2_2_b9kcym.jpg",
    },

    {
      imageUrl: "v1705666647/Rapotin/E_2_hisdw0.jpg",
    },

    {
      imageUrl:
        "v1705666647/Rapotin/A_4_3_t151fz.jpg",
    },

    {
      imageUrl:
        "v1705666647/Rapotin/A_2_rcdzvu.jpg",
    },

    {
      imageUrl:
        "v1705666647/Rapotin/A_1_1_ur1n4x.jpg",
    },

    {
      imageUrl: "v1703762307/Rapotin/A_14_-_Photo_4_2_osyno8.jpg",
    },

   
  ],
  hideArchitect: true,
  stats: [
    {
      value: "4000",
      highlighted: "m2",
      desc: "Plocha pozemku",
    },
    {
      value: "29",
      highlighted: "",
      desc: "Bytů",
    },
    {
      value: "Až",
      highlighted: "4+1",
      desc: "Dispozice Apartmánů",
    },
    {
      value: "Červenec",
      highlighted: "2024",
      desc: "Termín Dokončení",
    },
  ],
  features: [
    {
      icon: "/features/sauna.png",
      desc: "Privátní wellness",
    },
    {
      icon: "/features/ski.png",
      desc: "Kolárna",
    },
    {
      icon: "/features/view.png",
      desc: "Klid",
    },
    {
      icon: "/features/park.png",
      desc: "Společná zahrada",
    },
  ],

  sectionFourOneText: {
    title: "Historie",
    titleGold: "TODO",
    desc: "TODO",
  },

  sectionFourTwoText: {
    title: "Privátní wellness",
    titleGold: "s útulnou atmosférou",
    desc: "TODO",
  },

  sectionImageOne: "v1705668049/Rapotin/1928_1_1_j1wzvm.jpg",
  sectionImageTwo: "v1705668124/Rapotin/Screenshot_2024-01-19_at_13.39.43_vl4sgc.png",

  sectionCover: "v1647000262/vilaRepublika/ap1/l07mensi_xywpsx.jpg",

  ticksSection: [
    {
      highlighted: "Lázeňská tradice",
      normal: "Velkých Losin",
      desc: "Velké Losiny mají co nabídnout. Usazené pod vrcholky hor jsou vstupní branou Hrubého Jeseníku. Příznivé klima a čerstvý horský vzduch prospějí vašemu tělu i duši, stejně jako léčivé minerální prameny nebo unikátní termální lázně, které nemají v České republice obdoby. Za poznáním se můžete vydat na prohlídku pozdně renesančního zámku nebo do velkolosinské ruční papírny. A k tomu si užívat skvělou gastronomii i mlsání v místní pralinkárně.",
    },
    {
      highlighted: "Hrubého Jeseníku",
      normal: "Léčivá krása ",
      desc: "Druhé největší pohoří České republiky stojí trochu stranou turistického zájmu, což ale má své velké výhody. Úchvatný ráz krajiny ještě nestihla pozměnit ruka člověka a zdejší neposkvrněná příroda má v sobě léčivou sílu. Vyšlápněte si na horu Praděd, vydejte se na okruh po vodopádech anebo místních rozhlednách. Nezapomeňte na přečerpávací vodní elektrárnu Dlouhé Stráně. Pěšky nebo na kole, kromě turistických tras je zde i široká síť cyklostezek. Jeseníky myslí na každého z vás.",
    },
    {
      highlighted: "už od listopadu",
      normal: "Lyžování naplno ",
      desc: "Hrubý Jeseník má skvělé sněhového podmínky. V dosahu budete mít hned několik ski-areálů. Necelých 10 kilometrů je vzdálen ski-areál Kouty a Přemyslov. Zhruba za 20 minut dorazíte na Praděd nebo Červenohorské sedlo. A mnoho dalších menších středisek objevíte v blízkém okolí. Pro běžkaře je nejatraktivnější oblastí Jesenická magistrála. Přejezd Jesenického hřebene na lyžích je jedním z nejkrásnějších horských výletů, které u nás můžete podniknout.",
    },
  ],
  apartments: [
    {
      price: "4 790 000 Kč",
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
      price: "4 490 000 Kč",
      number: "354/5",
      floor: "2NP",
      layout: "2kk",
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
      name: "Apartmány",
      location: "Malá Morava",
      link: "/apartmany-mala-morava",
    },
    {
      image:
        "v1664009999/Kouty/Screen_Shot_2022-08-18_at_11.27.50_1_gnjjvw.png",
      name: "Wellness Aparthotel",
      location: "Kouty nad Desnou",
      link: "/aparthotel-kouty",
    },
    {
      image: "v1645823344/hrabenov/1_frp1mw.jpg",
      name: "Rezidence Hrabenov",
      location: "Hrabenov, Ruda Nad Moravou",
      link: "/rezidence-hrabenov",
    },
  ],
  timelineFill: "40%",
  timeline: [
    {
      title: "Projektová dokumentace",
      date: "Srpen 2023",
    },
    {
      title: "Zahájení rekonstrukce",
      date: "Říjen 2023",
    },
    {
      title: "Dokončení rekonstrukce",
      date: "Červenec 2023",
    },
    {
      title: "Předání nemovitosti",
      date: "Říjen 2024",
    },
  ],
  architectName: "",
  architectWord:
    "",
};

const VilaRepublika = () => {
  return (
    <Layout>
      <Header />
      <ProjectSectionOne data={data} />
      <ProjectSectionTwo data={data} />
      <ProjectSectionThree data={data} onlyOnerow={true}/>
      <ProjectSectionFour data={data} />
      <ProjectSectionFive data={data} />
      <ProjectSectionSix data={data} videoSectionTitle="Video z rekonstrukce" />
      <PriceList data={data} />
      {/* <OtherProjects data={data} /> */}
      <Footer />
    </Layout>
  );
};

export default VilaRepublika;
