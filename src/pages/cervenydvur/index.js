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
  title: "Rezidence Červený dvůr",
  locationOne: "Výzkumníků 267",
  locationTwo: "Rapotín, okres Šumperk",
  cover: "vilaRepublikaCover",
  desc: (
    <>
      Zámecká rezidence Červený dvůt. Místo, kde se moderna snoubí s historií. V malebné obci Rapotín pod vrcholky Hrubého Jeseníku rekonstruujeme historickou budovu z 30. let minulého století.
      V cenovém standardu nabízíme kuchyňskou linku, podlahovou krytinu, dveře, osvětlení a je možné za příplatek vybavit byt nábytkem. Nyní máte stále možnost si zařídit design bytu podle svých představ.
      Naše Společnost je přímým vlastníkem nemovitosti, budete tedy jednat přímo s majitelem a ne s realitní kanceláří.
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

    // ap C foto
    {
      imageUrl: "v1705667282/Rapotin/apC/Screenshot_2024-01-19_at_13.25.33_gxqh5m.png",
    },

    {
      imageUrl: "v1705667284/Rapotin/apC/Screenshot_2024-01-19_at_13.25.42_rxqond.png",
    },

    {
      imageUrl: "v1705667282/Rapotin/apC/Screenshot_2024-01-19_at_13.25.56_tlqxre.png",
    },

    {
      imageUrl: "v1705667282/Rapotin/apC/Screenshot_2024-01-19_at_13.25.14_axyziu.png",
    },

    {
      imageUrl: "v1705667282/Rapotin/apC/Screenshot_2024-01-19_at_13.25.23_krrdjo.png",
    },

    {
      imageUrl: "v1705667284/Rapotin/apC/Screenshot_2024-01-19_at_13.26.13_pyvkwq.png",
    },

    {
      imageUrl: "v1705667284/Rapotin/apC/Screenshot_2024-01-19_at_13.26.20_ufpglk.png",
    },

    {
      imageUrl: "v1705667284/Rapotin/apC/Screenshot_2024-01-19_at_13.26.35_ez4mke.png",
    },

    {
      imageUrl: "v1705667285/Rapotin/apC/Screenshot_2024-01-19_at_13.26.53_db8msw.png",
    },

    {
      imageUrl: "v1705667285/Rapotin/apC/Screenshot_2024-01-19_at_13.27.07_xmugm9.png",
    },

    {
      imageUrl: "v1705667285/Rapotin/apC/Screenshot_2024-01-19_at_13.27.14_zfemlb.png",
    },

    {
      imageUrl: "v1705767715/Rapotin/Screenshot_2024-01-20_at_17.20.59_fbyuxt.png",
    },

    {
      imageUrl: "v1705767716/Rapotin/Screenshot_2024-01-20_at_17.21.08_gkpfpc.png",
    },

    {
      imageUrl: "v1705769082/Rapotin/Screenshot_2024-01-20_at_17.44.35_mx5rex.png",
    },

    {
      imageUrl: "v1705770987/Rapotin/DSC09091-HDR_k4ecw6.jpg",
    },

    {
      imageUrl: "v1705770982/Rapotin/DSC09066-HDR_whr9fd.jpg",
    },

    {
      imageUrl: "v1705770977/Rapotin/DSC09090-HDR_fvmvmk.jpg",
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
      desc: "Sklepní koje",
    },
    {
      icon: "/features/view.png",
      desc: "Klid a příroda",
    },
    {
      icon: "/features/park.png",
      desc: "Vlastní zahrádka k bytu",
    },
  ],

  sectionFourOneText: {
    title: "Historie ",
    titleGold: "Červého dvora",
    desc: "je provázána s osudy rodu Žerotínů a následně Lichtenštejnů, kteří ho využívali jako panské odpočinkové sídlo. Zdejší dvory mají původ ve feudálním hospodářství. Vznikaly z potřeby šlechty zajistit pro svou rodinu, úředníky i služebnictvo dostatek potravin. První oficiální zmínky o poplužním dvoře nacházíme kolem roku 1618 v Zemských deskách. Dvory se zaměřovaly na zemědělskou produkci, včetně pěstování obilí, chovu dobytka a zakládání zahrad. Rapotínský dvůr byl postaven ve tvaru nepravidelného otevřeného čtyřúhelníku s centrální budovou zámečku.",
  },

  sectionFourTwoText: {
    title: "Privátní wellness",
    titleGold: "s útulnou atmosférou",
    desc: "Pohodlí jsme podřídili všechno. V areálu červeného dvora budujeme privátní wellness, kde můžete načerpat síly a užívat si soukromí. Čeká zde na vás finská sauna, odpočinková část s výhledem do zeleně, koupací sud pro čtyři osoby. Budouocí majitelé bytů mají jeden vstup za měsíc zdarma.",
  },

  sectionImageOne: "v1705668049/Rapotin/1928_1_1_j1wzvm.jpg",
  sectionImageTwo: "v1705768460/Rapotin/DSC08873-HDR_isv4un.jpg",

  sectionCover: "v1705768953/Rapotin/DSC09002-HDR_psufeb.jpg",

  ticksSection: [
    {
      highlighted: "Kompletní",
      normal: "správa apartmánu",
      desc: "Kupujete si byt jako investici? Nabízíme vám kompletní správu krátkodobých i dlouhodobých pronájmů, abyste dosáhli co nejvyššího výnosu a pasivního příjmu bez starostí.",
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
      price: "3 420 000 Kč",
      number: "Byt č.18",
      floor: "2NP",
      layout: "2kk",
      size: "76 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: false,
    },
    {
      price: "2 790 000 Kč",
      number: "Byt č.19",
      floor: "2NP",
      layout: "2kk",
      size: "55,63 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: false,
    },
    {
      price: "2 500 000 Kč",
      number: "Byt č.20",
      floor: "2NP",
      layout: "2kk",
      size: "38.48 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: false,
    },
    {
      price: "3 690 000 Kč",
      number: "Byt č.21",
      floor: "2NP",
      layout: "1 + 1",
      size: "82 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: false,
    },
    {
      price: "1 900 000 Kč",
      number: "Byt č.22",
      floor: "2NP",
      layout: "1kk",
      size: "30.82 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: false,
    },
    {
      price: "2 090 000 Kč",
      number: "Byt č.23",
      floor: "2NP",
      layout: "1kk",
      size: "35,4 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: false,
    },
    {
      price: "1 790 000 Kč",
      number: "Byt č.24",
      floor: "2NP",
      layout: "1kk",
      size: "25,4 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: false,
    },
    {
      price: "3 990 000 Kč",
      number: "Byt č.25",
      floor: "2NP",
      layout: "2kk",
      size: "89,9 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: false,
    },
    {
      price: "2 990 000 Kč",
      number: "Byt č.26",
      floor: "2NP",
      layout: "3kk",
      size: "67,3 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: false,
    },
    {
      price: "2 590 000 Kč",
      number: "Byt č.27",
      floor: "2NP",
      layout: "2kk",
      size: "43,8 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: false,
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
