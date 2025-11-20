import * as React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PriceList from "../../components/ProjectDetail/PriceList";
import ProjectSectionOne from "../../components/ProjectDetail/ProjectSectionOne";
import ProjectSectionTwo from "../../components/ProjectDetail/ProjectSectionTwo";
import ProjectSectionThree from "../../components/ProjectDetail/ProjectSectionThree";
import ProjectSectionFour from "../../components/ProjectDetail/ProjectSectionFour";
import ProjectSectionFive from "../../components/ProjectDetail/ProjectSectionFive";
import ProjectSectionSix from "../../components/ProjectDetail/ProjectSectionSix";
import OtherProjects from "../../components/ProjectDetail/OtherProjects";

const data = {
  status: "Ve výstavbě",
  title: "Wellness Resort Červený dvůr",
  locationOne: "Výzkumníků 267",
  locationTwo: "Rapotín, okres Šumperk",
  cover: "vilaRepublikaCover",
  desc: (
    <>
      Resort Červený dvůr. Místo, kde se moderna snoubí s historií. V malebné obci Rapotín pod vrcholky Hrubého Jeseníku rekonstruujeme historickou budovu z 30. let minulého století.
      Apartmánový dům bude sloužit jako ubytování hotelového typu s kompletním servisem. Vlastní apartmán vám tak může sloužit jako rodinné rekreační zázemí. V době, kdy ho nebudete obývat sami, se pro vás stane pasivní investicí. O kompletní správu a pohodlí vašich hostů se vám rádi postaráme od A do Z. Více info o ubytování na našem webu. {" "}
      <a style={{ color: "B39A84" }} target="_blank" href="https://www.resortcervenydvur.cz">wwww.resortcervenydvur.cz</a>
    </>
  ),
  sliderImages: [

    {
      imageUrl: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
    },
    {
      imageUrl: "v1763643021/Rapotin/DSC01347-HDR-min_aev5ff.jpg",
    },
    {
      imageUrl: "v1763643018/Rapotin/DSC01338-HDR-min_ovm1qq.jpg",
    },
    {
      imageUrl: "v1763643021/Rapotin/DSC01326-HDR-min_aii9k1.jpg",
    },
    {
      imageUrl: "v1763643019/Rapotin/DSC00731-HDR-min_rhlch6.jpg",
    },
    {
      imageUrl: "v1763643022/Rapotin/DSC00866-min_vlwgs5.jpg",
    },
    {
      imageUrl: "v1763643020/Rapotin/DSC00919-min_kdr0gt.jpg",
    },
    {
      imageUrl: "v1763643007/Rapotin/DSC01118-HDR-min_ztlt5k.jpg",
    },
    {
      imageUrl: "v1763643018/Rapotin/DSC01123-HDR-min_bb20ze.jpg",
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
      value: "38",
      highlighted: "",
      desc: "Bytů",
    },
    {
      value: "Až",
      highlighted: "3kk",
      desc: "Dispozice Bytů",
    },
    {
      value: "září",
      highlighted: "2026",
      desc: "Termín Dokončení",
    },
  ],
  features: [
    {
      icon: "/features/sauna.png",
      desc: "Veřejné wellness",
    },
    {
      icon: "/features/ski.png",
      desc: "Lyžárna, Kolárna",
    },
    {
      icon: "/features/table-football(1).png",
      desc: "Společenská místnost",
    },

    {
      icon: "/features/coffee-cup.png",
      desc: "Snídaně",
    },

    {
      icon: "/features/parking-area.png",
      desc: "Parkovácí místo",
    },

    {
      icon: "/features/door-lock.png",
      desc: "Self checkin",
    },

    {
      icon: "/features/treadmill.png",
      desc: "Privátní Fitness",
    },
    {
      icon: "/features/view.png",
      desc: "Klid a příroda",
    },
  ],

  sectionFourOneText: {
    title: "Historie ",
    titleGold: "Červého dvora",
    desc: "je provázána s osudy rodu Žerotínů a následně Lichtenštejnů, kteří ho využívali jako panské odpočinkové sídlo. Zdejší dvory mají původ ve feudálním hospodářství. Vznikaly z potřeby šlechty zajistit pro svou rodinu, úředníky i služebnictvo dostatek potravin. První oficiální zmínky o poplužním dvoře nacházíme kolem roku 1618 v Zemských deskách. Dvory se zaměřovaly na zemědělskou produkci, včetně pěstování obilí, chovu dobytka a zakládání zahrad. Rapotínský dvůr byl postaven ve tvaru nepravidelného otevřeného čtyřúhelníku s centrální budovou zámečku.",
  },

  sectionFourTwoText: {
    title: "Wellness",
    titleGold: "s útulnou atmosférou",
    desc: "V areálu Červeného dvora klademe maximální důraz na pohodlí a kvalitní odpočinek. Aktuálně budujeme nové veřejné designové wellness, které nabídne dvě finské sauny, prostornou odpočívárnu a ochlazovací bazének."
  },

  sectionImageOne: "v1705668049/Rapotin/1928_1_1_j1wzvm.jpg",
  sectionImageTwo: "v1763644198/Rapotin/wellnessOdp.png",

  sectionCover: "v1763643017/Rapotin/DSC00809-HDR-min_ubagg2.jpg",

  ticksSection: [
    {
      highlighted: "Postup pří koupi",
      normal: "apartmánu",
      desc: "Konkrétní byt si můžete vybrat například podle výše investice či požadovaného ročního výnosu. Uzavře se smlouva o smlouvě budoucí kupní, složí se záloha a byt máte tímto rezervovaný. Po dokončení a uzavření kupní smlouvy se stáváte jediným vlastníkem nemovitosti, tedy budete figurovat na listu vlastnictví a na katastru nemovitostí. Nemovitost nebude z naší strany zatížena žádným zástavním právem ani věcným břemenem. Od této chvíle s nemovitostí můžete nakládat jakkoliv se vy, jakožto jediný vlastník, rozhodnete.",
    },
    {
      highlighted: "správa apartmánu",
      normal: "Kompletní ",
      desc: "Kupujete si apartmán jako investici? Nabízíme vám kompletní správu a garantovaný výnos. Můžete také apartmán sami využívat 10dní v roce. Při podpisu kupní smlouvy uzavřeme vzájemnou smlouvu o nájmu a tím vaše starosti končí – platíme vždy a včas. Bez výjimky inkasujete pravidelné měsíční nájemné na svůj účet, a to bez ohledu obsazenost bytu. Od smlouvy můžete samozřejmě kdykoliv odstoupit, a to bez smluvních pokut.",
    },
    {
      highlighted: "už od listopadu",
      normal: "Lyžování naplno ",
      desc: "Hrubý Jeseník má skvělé sněhového podmínky. V dosahu budete mít hned několik ski-areálů. Necelých 10 kilometrů je vzdálen ski-areál Kouty a Přemyslov. Zhruba za 20 minut dorazíte na Praděd nebo Červenohorské sedlo. A mnoho dalších menších středisek objevíte v blízkém okolí. Pro běžkaře je nejatraktivnější oblastí Jesenická magistrála. Přejezd Jesenického hřebene na lyžích je jedním z nejkrásnějších horských výletů, které u nás můžete podniknout.",
    }
  ],
  apartments: [
    {
      price: "3 290 000 Kč",
      number: "Byt č.1",
      floor: "1NP",
      layout: "3+1",
      size: "40,26 m2",
      terasa: "2,79 m2",
      parking: "1",
      vynos: "7%",
      priceVynos: "19 191 Kč",
      link: "/cervenydvur/byt1_",
      reserved: false,
    },
    {
      price: "4 340 000 Kč",
      number: "Byt č.12",
      floor: "3NP",
      layout: "3+1",
      size: "62 m2",
      terasa: "2,79 m2",
      parking: "1",
      vynos: "6%",
      priceVynos: "21 700 Kč",
      link: "/",
      reserved: true,
    },
    {
      price: "4 620 000 Kč",
      number: "Byt č.14",
      floor: "3NP",
      layout: "2kk",
      size: "66 m2",
      terasa: "2,79 m2",
      parking: "1",
      vynos: "5%",
      priceVynos: "19 250 Kč",
      link: "/cervenydvur/byt14",
      reserved: true, // maky
    },
    {
      price: "3 360 000 Kč",
      number: "Byt č.15",
      floor: "1NP",
      layout: "1kk",
      size: "42 m2",
      terasa: "2,79 m2",
      parking: "1",
      vynos: "6%",
      priceVynos: "16 800 Kč",
      link: "/cervenydvur/byt15",
      reserved: true, // vlasní bydlení
    },
    {
      price: "4 830 000 Kč",
      number: "Byt č.16",
      floor: "1NP",
      layout: "3kk",
      size: "69 m2",
      terasa: "2,79 m2",
      parking: "1",
      vynos: "5%",
      priceVynos: "24 150 Kč",
      link: "/cervenydvur/byt16",
      reserved: true,
    },
    {
      price: "3 480 000 Kč",
      number: "Byt č.23", // investor Platil
      floor: "2NP",
      layout: "2kk",
      size: "43,51 m2",
      terasa: "2,79 m2",
      parking: "1",
      vynos: "6%",
      priceVynos: "17 400 Kč",
      link: "/cervenydvur/byt23_",
      reserved: false,
    },
    {
      price: "4 970 000 Kč",
      number: "Byt č.24", // dříve 19
      floor: "2NP",
      layout: "2kk",
      size: "71,05 m2",
      terasa: "2,49 m2",
      parking: "1",
      vynos: "6%",
      priceVynos: "24 850 Kč",
      link: "/cervenydvur/byt24_",
      reserved: true,
    },
    // {
    //   price: "2 500 000 Kč",
    //   number: "Byt č.24", // dříve 20
    //   floor: "2NP",
    //   layout: "2kk",
    //   size: "38.48 m2",
    //   terasa: "2,49 m2",
    //   parking: "1",
    //   link: "/cervenydvur/byt20",
    //   reserved: true,
    // },
    {
      price: "5 800 000 Kč",
      number: "Byt č.25", // dříve 21
      floor: "2NP",
      layout: "3kk",
      size: "82 m2",
      terasa: "2,79 m2",
      parking: "1",
      vynos: "5%",
      priceVynos: "29 000 Kč",
      link: "/cervenydvur/byt25_",
      reserved: true,
    },
    {
      price: "2 790 000 Kč",
      number: "Byt č.26",
      floor: "2NP",
      layout: "1kk",
      size: "31,62 m2",
      terasa: "2,49 m2",
      parking: "1",
      vynos: "7%",
      priceVynos: "16 275 Kč", // 8% výnos 18,600
      link: "/cervenydvur/byt26_",
      reserved: false,
    },
    {
      price: "2 900 000 Kč",
      number: "Byt č.27",
      floor: "2NP",
      layout: "1kk",
      size: "35,15 m2",
      terasa: "2,49 m2",
      parking: "1",
      vynos: "7%",
      priceVynos: "16 916 Kč", // 8% výnos 19,333
      link: "/cervenydvur/byt27_",
      reserved: false,
    },
    {
      price: "3 000 000 Kč",
      number: "Byt č.28",
      floor: "2NP",
      layout: "1kk",
      size: "38,20 m2",
      terasa: "2,49 m2",
      parking: "1",
      priceVynos: "17 500 Kč", // 8% výnos 20,000
      vynos: "7%",
      link: "/cervenydvur/byt28_",
      reserved: false,
    },
    // {
    //   price: "1 890 000 Kč",
    //   number: "Byt č.25",
    //   floor: "2NP",
    //   layout: "1kk",
    //   size: "28,08 m2",
    //   terasa: "2,49 m2",
    //   parking: "1",
    //   link: "/cervenydvur/byt25",
    //   reserved: false,
    // },
    {
      price: "4 490 000 Kč",
      number: "Byt č.30", // dříve 26
      floor: "2NP",
      layout: "2kk",
      size: "57,66 m2",
      terasa: "2,79 m2",
      parking: "1",
      priceVynos: "22 450 Kč",
      vynos: "6%",
      link: "/cervenydvur/byt30_",
      reserved: true,
    },
    {
      price: "3 640 000 Kč",
      number: "Byt č.31", // dříve 27
      floor: "2NP",
      layout: "2kk",
      size: "45,52 m2",
      terasa: "2,49 m2",
      parking: "1",
      priceVynos: "18 208 Kč",
      vynos: "6%",
      link: "/cervenydvur/byt31_",
      reserved: false,
    },
    // {
    //   price: "5 900 000 Kč",
    //   number: "Byt č.32", // 30 + 31
    //   floor: "2NP",
    //   layout: "4+1",
    //   size: "87,16 m2",
    //   terasa: "2,49 m2",
    //   parking: "1",
    //   priceVynos: "29 500 Kč",
    //   vynos: "5%",
    //   link: "/cervenydvur/byt32_",
    //   reserved: true,
    // },

    // {
    //   price: "3 990 000 Kč",
    //   number: "Domek byt č.1",
    //   floor: "2NP",
    //   layout: "2kk",
    //   size: "47,94 m2",
    //   terasa: "2,79 m2",
    //   parking: "1",
    //   priceVynos: "19 950 Kč",
    //   vynos: "6%",
    //   link: "/cervenydvur/domek-byt1",
    //   reserved: true,
    // },
    // {
    //   price: "3 790 000 Kč",
    //   number: "Domek byt č.2",
    //   floor: "2NP",
    //   layout: "2kk",
    //   size: "47,94 m2",
    //   terasa: "2,79 m2",
    //   parking: "1",
    //   priceVynos: "18 950 Kč",
    //   vynos: "6%",
    //   link: "/cervenydvur/domek-byt2",
    //   reserved: true, //čeká na kartu
    // },
    // {
    //   price: "4 290 000 Kč",
    //   number: "Domek byt č.3",
    //   floor: "2NP",
    //   layout: "2kk",
    //   size: "50,2 m2",
    //   terasa: "2,79 m2",
    //   parking: "1",
    //   priceVynos: "21 450 Kč",
    //   vynos: "6%",
    //   link: "/cervenydvur/domek-byt3",
    //   reserved: true, //čeká na kartu
    // },
    // {
    //   price: "3 990 000 Kč",
    //   number: "Domek byt č.4",
    //   floor: "2NP",
    //   layout: "2kk",
    //   size: "50,2 m2",
    //   terasa: "2,79 m2",
    //   parking: "1",
    //   priceVynos: "19 950 Kč",
    //   vynos: "6%",
    //   link: "/cervenydvur/domek-byt4",
    //   reserved: true, //čeká na kartu
    // },
  ],
  otherProjects: [


    {
      image: "v1724488767/hrabenov/DSC03066-HDR-min_ekphad.jpg",
      name: "Rezidence Hrabenov",
      location: "Hrabenov, Ruda Nad Moravou",
      link: "/rezidence-hrabenov",
    },
    {
      image: "v1689504195/vilaRepublikaFoto/356584285_1096124314696983_2263942071942825600_n_xv0nkq.jpg",
      name: 'Vila republika',
      location: 'Velké Losiny',
      link: '/vila-republika',
    },

    {
      image:
        "v1664009931/Kouty/Screen_Shot_2022-08-18_at_11.26.44_2_yytalh.png",
      name: "Wellness Aparthotel",
      location: "Kouty nad Desnou",
      link: "/aparthotel-kouty",
    },

  ],
  timelineFill: "85%",
  timeline: [
    {
      title: "Projektová dokumentace",
      date: "Srpen 2023",
    },
    {
      title: "Zahájení zateplení fasády",
      date: "Říjen 2023",
    },
    {
      title: "Zisk stavebního povolení",
      date: "listopad 2025",
    },
    {
      title: "Předání bytu",
      date: "Říjen 2026",
    },
  ],
  architectName: "",
  architectWord:
    "",
};

const CervenyDvurPage = () => {
  return (
    <Layout>
      <Header />
      <ProjectSectionOne data={data} />
      <ProjectSectionTwo data={data} />
      <ProjectSectionThree data={data} onlyOnerow={false} />
      <ProjectSectionFour data={data} />
      <ProjectSectionFive data={data} />
      <ProjectSectionSix data={data} videoSectionTitle="Video z rekonstrukce" />
      <PriceList vynos={true} data={data} showBonus={false} />
      <OtherProjects data={data} />
      <Footer />
    </Layout>
  );
};

export default CervenyDvurPage;
