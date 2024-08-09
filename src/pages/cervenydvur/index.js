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

const data = {
  status: "Ve výstavbě",
  title: "Wellness Resort Červený dvůr",
  locationOne: "Výzkumníků 267",
  locationTwo: "Rapotín, okres Šumperk",
  cover: "vilaRepublikaCover",
  desc: (
    <>
      Resort Červený dvůr. Místo, kde se moderna snoubí s historií. V malebné obci Rapotín pod vrcholky Hrubého Jeseníku rekonstruujeme historickou budovu z 30. let minulého století.
      Apartmánový dům bude sloužit jako ubytování hotelového typu s kompletním servisem. V ceně apartmánu je parkovací místo, podíl na přijezdové cestě i kuchyňská linka. Vlastní apartmán vám tak může sloužit jako rodinné rekreační zázemí. V době, kdy ho nebudete obývat sami, se pro vás stane pasivní investicí. O kompletní správu rezervací a pohodlí vašich hostů se vám rádi postaráme od A do Z. Více info o ubytování na našem webu. {" "}
      <a style={{ color: "B39A84" }} target="_blank" href="https://www.resortcervenydvur.cz">wwww.resortcervenydvur.cz</a>
    </>
  ),
  sliderImages: [
    {
      imageUrl: "v1723189892/Rapotin/karty/DSC02635_1_c1mvxg.jpg",
    },

    {
      imageUrl: "v1723189890/Rapotin/karty/DSC02684_1_b3zyup.jpg",
    },

    {
      imageUrl: "v1720684653/Rapotin/DSC08357-min_lmko87.jpg",
    },

    {
      imageUrl: "v1720684648/Rapotin/DSC08281-HDR-min_borxga.jpg",
    },

    {
      imageUrl: "v1720684646/Rapotin/DSC08260-HDR-min_vm5wno.jpg",
    },

    // {
    //   imageUrl: "v1720684651/Rapotin/DSC08211-HDR-min_gzilsv.jpg",
    // },

    // {
    //   imageUrl: "v1720684650/Rapotin/DSC08224-HDR-min_xdnrda.jpg",
    // },

    {
      imageUrl: "v1720684651/Rapotin/DSC08237-HDR-min_tkhhfa.jpg",
    },

    {
      imageUrl: "v1720684652/Rapotin/DSC08316-min_lwi6wz.jpg",
    },

    {
      imageUrl: "v1720684652/Rapotin/DSC08401-min_mmrtwj.jpg",
    },
    

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

    // z vrchu

    {
      imageUrl: "v1703762307/Rapotin/A_14_-_Photo_4_2_osyno8.jpg",
    },

    // venkovni wellness

    {
      imageUrl: "v1718888051/Rapotin/V09_vwm1sb.jpg",
    },

    {
      imageUrl: "v1718888052/Rapotin/V03_o4rwks.jpg",
    },

    {
      imageUrl: "v1718888055/Rapotin/V01_ozdaml.jpg",
    },

    {
      imageUrl: "v1718888057/Rapotin/V02_zow2rj.jpg",
    },

    {
      imageUrl: "v1718888058/Rapotin/V05_uqmy6x.jpg",
    },

    {
      imageUrl: "v1718888058/Rapotin/V04_pj1nhe.jpg",
    },

    {
      imageUrl: "v1718888054/Rapotin/V06_rqwq4k.jpg",
    },

    // domek interier foto

    {
      imageUrl: "v1717232231/Rapotin/domecek/VIZ2_1_yon8dt.jpg",
    },

    {
      imageUrl: "v1717230215/Rapotin/domecek/04_puzl0f.jpg",
    },

    {
      imageUrl: "v1717405266/Rapotin/domecek/02_dlsn8e.jpg",
    },

    {
      imageUrl: "v1717230211/Rapotin/domecek/03_jbc2qm.jpg",
    },

    {
      imageUrl: "v1717405262/Rapotin/domecek/01_dbdztk.jpg",
    },

    {
      imageUrl: "v1717405266/Rapotin/domecek/07_xlvyxx.jpg",
    },

    {
      imageUrl: "v1717405268/Rapotin/domecek/06_nm8rfj.jpg",
    },

    {
      imageUrl: "v1717405263/Rapotin/domecek/05_tv8jpz.jpg",
    },

    {
      imageUrl: "v1717232997/Rapotin/domecek/08_1_jyjyur.jpg",
    },

    {
      imageUrl: "v1717232993/Rapotin/domecek/09_1_zge1kp.jpg",
    },

    {
      imageUrl: "v1717232992/Rapotin/domecek/10_1_rpjley.jpg",
    },


    // ap C foto
    {
      imageUrl: "v1720440333/Rapotin/ap26/01_if3vk1.jpg",
    },
    {
      imageUrl: "v1720440321/Rapotin/ap26/02_riboo7.jpg",
    },
    {
      imageUrl: "v1720441578/Rapotin/ap26/03_yzsfur.jpg",
    },
    {
      imageUrl: "v1720440216/Rapotin/ap26/04_ilyvz5.jpg",
    },
    {
      imageUrl: "v1720440323/Rapotin/ap26/05_ib7k0m.jpg",
    },
    {
      imageUrl: "v1720440361/Rapotin/ap26/06_myfzct.jpg",
    },
    {
      imageUrl: "v1720440308/Rapotin/ap26/07_kj7eit.jpg",
    },
    {
      imageUrl: "v1720440246/Rapotin/ap26/08_rhwwc9.jpg",
    },
    {
      imageUrl: "v1720440355/Rapotin/ap26/09_fpwmjs.jpg",
    },
    

    // bureš ap C 
    // {
    //   imageUrl: "v1705667284/Rapotin/apC/Screenshot_2024-01-19_at_13.25.42_rxqond.png",
    // },

    // {
    //   imageUrl: "v1705667282/Rapotin/apC/Screenshot_2024-01-19_at_13.25.56_tlqxre.png",
    // },

    // {
    //   imageUrl: "v1705667282/Rapotin/apC/Screenshot_2024-01-19_at_13.25.14_axyziu.png",
    // },

    // {
    //   imageUrl: "v1705667282/Rapotin/apC/Screenshot_2024-01-19_at_13.25.23_krrdjo.png",
    // },

    // {
    //   imageUrl: "v1705667284/Rapotin/apC/Screenshot_2024-01-19_at_13.26.13_pyvkwq.png",
    // },

    // {
    //   imageUrl: "v1705667284/Rapotin/apC/Screenshot_2024-01-19_at_13.26.20_ufpglk.png",
    // },

    // {
    //   imageUrl: "v1705667284/Rapotin/apC/Screenshot_2024-01-19_at_13.26.35_ez4mke.png",
    // },

    // {
    //   imageUrl: "v1705667285/Rapotin/apC/Screenshot_2024-01-19_at_13.26.53_db8msw.png",
    // },

    // {
    //   imageUrl: "v1705667285/Rapotin/apC/Screenshot_2024-01-19_at_13.27.07_xmugm9.png",
    // },

    // {
    //   imageUrl: "v1705667285/Rapotin/apC/Screenshot_2024-01-19_at_13.27.14_zfemlb.png",
    // },

    // chodba

    {
      imageUrl: "v1706264230/Rapotin/Screenshot_2024-01-26_at_11.07.52_cwidfp.png",
    },

    {
      imageUrl: "v1706264226/Rapotin/Screenshot_2024-01-26_at_11.07.42_p7g1mu.png",
    },

    {
      imageUrl: "v1706264225/Rapotin/Screenshot_2024-01-26_at_11.07.30_megn8g.png",
    },

    // historie
    {
      imageUrl: "v1705767715/Rapotin/Screenshot_2024-01-20_at_17.20.59_fbyuxt.png",
    },
    {
      imageUrl: "v1705767716/Rapotin/Screenshot_2024-01-20_at_17.21.08_gkpfpc.png",
    },

    // půdorys

    // {
    //   imageUrl: "v1705769082/Rapotin/Screenshot_2024-01-20_at_17.44.35_mx5rex.png",
    // },

    // koje

    // {
    //   imageUrl: "v1706447079/Rapotin/Screenshot_2024-01-28_at_13.45.11_ybgkab.png",
    // },

    // zahradky

    // {
    //   imageUrl: "v1706447075/Rapotin/Screenshot_2024-01-28_at_13.54.19_zo91uf.png",
    // },

    // sklep

    {
      imageUrl: "v1708351098/Rapotin/F1_dv7zxz.jpg",
    },

    {
      imageUrl: "v1708351095/Rapotin/F3_pc75z5.jpg",
    },

    {
      imageUrl: "v1709224711/Rapotin/C_H4_vxueih.jpg",
    },

    {
      imageUrl: "v1709224710/Rapotin/C_H2_ekxncv.jpg",
    },   

    // venek

    // {
    //   imageUrl: "v1705770987/Rapotin/DSC09091-HDR_k4ecw6.jpg",
    // },

    // {
    //   imageUrl: "v1705770982/Rapotin/DSC09066-HDR_whr9fd.jpg",
    // },

    // {
    //   imageUrl: "v1705770977/Rapotin/DSC09090-HDR_fvmvmk.jpg",
    // },

    // {
    //   imageUrl: "v1716891888/Rapotin/IMG20240525103016_o7vmf4.jpg"
    // },

    // {
    //   imageUrl: "v1716891888/Rapotin/IMG20240525103058_qnq0kt.jpg"
    // },

    // {
    //   imageUrl: "v1716891877/Rapotin/IMG20240525103542_g5xupc.jpg"
    // },

    // {
    //   imageUrl: "v1716891880/Rapotin/IMG20240525103520_ywgwnd.jpg"
    // },

    // {
    //   imageUrl: "v1716891884/Rapotin/IMG20240525103722_sqlojj.jpg"
    // },

    // {
    //   imageUrl: "v1716891884/Rapotin/IMG20240525103642_ejat6y.jpg"
    // },

    // {
    //   imageUrl: "v1717842416/Rapotin/IMG20240607182038_1_vg5ba5.jpg"
    // }

    
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
      highlighted: "3kk",
      desc: "Dispozice Bytů",
    },
    {
      value: "červen",
      highlighted: "2025",
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
      desc: "Sklepní kóje",
    },
    {
      icon: "/features/table-football(1).png",
      desc: "Společenská místnost",
    },

    {
      icon: "/features/coffee-cup.png",
      desc: "Kavárna",
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
    desc: "Pohodlí jsme podřídili všechno. V areálu červeného dvora budujeme wellness, kde můžete načerpat síly a užívat si soukromí. Čeká zde na vás 2x finská sauna, odpočiívárna, ochlazovací bazének a jezírko."
  },

  sectionImageOne: "v1705668049/Rapotin/1928_1_1_j1wzvm.jpg",
  sectionImageTwo: "v1718888055/Rapotin/V01_ozdaml.jpg",

  sectionCover: "v1720602999/Rapotin/ap32/01_rgntmh.jpg",

  ticksSection: [
    {
      highlighted: "Postup pří koupi",
      normal: "apartmánu",
      desc: "Konkrétní byt si můžete vybrat například podle výše investice či požadovaného ročního výnosu. Uzavře se smlouva o smlouvě budoucí kupní, složí se záloha a byt máte tímto rezervovaný. Po dokončení a uzavření kupní smlouvy se stáváte jediným vlastníkem nemovitosti, tedy budete figurovat na listu vlastnictví a na katastru nemovitostí. Nemovitost nebude z naší strany zatížena žádným zástavním právem ani věcným břemenem. Od této chvíle s nemovitostí můžete nakládat jakkoliv se vy, jakožto jediný vlastník, rozhodnete.",
    },
    {
      highlighted: "správa apartmánu",
      normal: "Kompletní ",
      desc: "Kupujete si apartmán jako investici? Nabízíme vám kompletní správu a garantovaný výnos. Můžete také apartmán sami využívat 14dní v roce. Při podpisu kupní smlouvy uzavřeme vzájemnou smlouvu o nájmu a tím vaše starosti končí – platíme vždy a včas. Bez výjimky inkasujete pravidelné měsíční nájemné na svůj účet, a to bez ohledu obsazenost bytu. Od smlouvy můžete samozřejmě kdykoliv odstoupit, a to bez smluvních pokut.",
    },
    {
      highlighted: "výši 100 % původní ceny",
      normal: "Zpětný odkup",
      desc: "V případě potřeby vám garantujeme smluvně zpětný odkup, a to ve 100 % výši kupní ceny. Tato nabídka je časově neomezená, neodvolatelná a trvalá. Také můžete nemovitost převzít kdykoliv do vlastní správy, anebo ji libovolně prodat na trhu s navýšením. Výnos, který jste získali během vlastnictví bytu vám samozřejmě zůstává.",
    },
    
  ],
  apartments: [
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
      reserved: false,
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
      reserved: false,
    },
    {
      price: "2 790 000 Kč",
      number: "Byt č.26",
      floor: "2NP",
      layout: "2kk",
      size: "31,62 m2",
      terasa: "2,49 m2",
      parking: "1",
      vynos: "6%",
      priceVynos: "13 950 Kč",
      link: "/cervenydvur/byt26_",
      reserved: false,
    },
    {
      price: "2 900 000 Kč",
      number: "Byt č.27",
      floor: "2NP",
      layout: "2kk",
      size: "35,15 m2",
      terasa: "2,49 m2",
      parking: "1",
      vynos: "6%",
      priceVynos: "14 500 Kč",
      link: "/cervenydvur/byt27_",
      reserved: false,
    },
    {
      price: "3 000 000 Kč", //  2 360 000 kč mamka
      number: "Byt č.28",
      floor: "2NP",
      layout: "2kk",
      size: "38,20 m2",
      terasa: "2,49 m2",
      parking: "1",
      priceVynos: "15 000 Kč",
      vynos: "6%",
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
      reserved: false, 
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
    {
      price: "5 900 000 Kč",
      number: "Byt č.32", // 30 + 31
      floor: "2NP",
      layout: "4+1",
      size: "87,16 m2",
      terasa: "2,49 m2",
      parking: "1",
      priceVynos: "29 500 Kč",
      vynos: "5%",
      link: "/cervenydvur/byt32_",
      reserved: false,
    },

    {
      price: "3 990 000 Kč",
      number: "Domek byt č.1",
      floor: "2NP",
      layout: "2kk",
      size: "47,94 m2",
      terasa: "2,79 m2",
      parking: "1",
      priceVynos: "19 950 Kč",
      vynos: "6%",
      link: "/cervenydvur/domek-byt1",
      reserved: false,
    },
    {
      price: "3 790 000 Kč",
      number: "Domek byt č.2",
      floor: "2NP",
      layout: "2kk",
      size: "47,94 m2",
      terasa: "2,79 m2",
      parking: "1",
      priceVynos: "18 950 Kč",
      vynos: "6%",
      link: "/cervenydvur/byt26",
      reserved: false, //čeká na kartu
    },
    {
      price: "4 290 000 Kč",
      number: "Domek byt č.3",
      floor: "2NP",
      layout: "2kk",
      size: "50,2 m2",
      terasa: "2,79 m2",
      parking: "1",
      priceVynos: "21 450 Kč",
      vynos: "6%",
      link: "/cervenydvur/byt26",
      reserved: false, //čeká na kartu
    },
    {
      price: "3 990 000 Kč",
      number: "Domek byt č.4",
      floor: "2NP",
      layout: "2kk",
      size: "50,2 m2",
      terasa: "2,79 m2",
      parking: "1",
      priceVynos: "19 950 Kč",
      vynos: "6%",
      link: "/cervenydvur/byt26",
      reserved: false, //čeká na kartu
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
  timelineFill: "50%",
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
      date: "Květen 2025",
    },
    {
      title: "Předání bytu",
      date: "Červen 2025",
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
      <ProjectSectionThree data={data} onlyOnerow={false}/>
      <ProjectSectionFour data={data} />
      <ProjectSectionFive data={data} />
      <ProjectSectionSix data={data} videoSectionTitle="Video z rekonstrukce" />
      <PriceList vynos={true} data={data} />
      {/* <OtherProjects data={data} /> */}
      <Footer />
    </Layout>
  );
};

export default VilaRepublika;
