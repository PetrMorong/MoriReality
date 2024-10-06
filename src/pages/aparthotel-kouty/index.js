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
  title: "ApartHotel Kouty",
  locationOne: "Rejhotice 131",
  locationTwo: "Loučná nad Desnou",
  cover: "vilaRepublikaCover",
  //   videoUrl: "https://youtu.be/vnrog-OczGQ",
  desc: (
    <>
      4 hvězdičkový aparthotel s restaurací a prémiovým wellness. Hotel se
      nachází v Koutech nad Desnou 800m od skiareálu Kouty, kde je 3. nejdelší
      sjezdovka v ČR a lanovka na nejvyšší horu Moravy Praděd. Celkem vznikne 24
      luxusních apartmánů, 12 apartmánů bude na prodej a zbytek si majitel
      ponechá na pronájem.
    </>
  ),
  sliderImages: [
    {
      imageUrl:
        "v1664009931/Kouty/Screen_Shot_2022-08-18_at_11.26.44_2_yytalh.png",
    },
    {
      imageUrl:
        "v1664009999/Kouty/Screen_Shot_2022-08-18_at_11.27.50_1_gnjjvw.png",
    },
    {
      imageUrl:
        "v1664010001/Kouty/Screen_Shot_2022-08-18_at_11.26.52_1_qlpgeb.png",
    },
    {
      imageUrl:
        "v1664010789/Kouty/Screen_Shot_2022-09-24_at_11.11.44_teirz1.png",
    },
    {
      imageUrl:
        "v1664009995/Kouty/Screen_Shot_2022-08-18_at_11.27.02_i9llj9.png",
    },
    {
      imageUrl:
        "v1664009993/Kouty/Screen_Shot_2022-08-18_at_11.27.23_qrojc1.png",
    },
    {
      imageUrl:
        "v1664010789/Kouty/Screen_Shot_2022-09-24_at_11.12.17_zaex8g.png",
    },
    {
      imageUrl:
        "v1664010792/Kouty/Screen_Shot_2022-09-24_at_11.10.36_fq6mot.png",
    },
    {
      imageUrl:
        "v1664010796/Kouty/Screen_Shot_2022-09-24_at_11.11.25_fauwtr.png",
    },
    {
      imageUrl:
        "v1664010794/Kouty/Screen_Shot_2022-09-24_at_11.11.07_x6lloq.png",
    },
    {
      imageUrl:
        "v1656862992/Kouty/pm-eme-room-220316-cam001_16475882541423_1920x1080_ttt_90_ffvt96.webp",
    },
    {
      imageUrl:
        "v1656862992/Kouty/pm-eme-room2-211116-cam003-jpeg_16391630075761_1920x1080_ttt_90_oruiqe.webp",
    },
    {
      imageUrl:
        "v1656862992/Kouty/pm-eme-room2-211116-cam002-jpeg_16391630070542_1920x1080_ttt_90_ucqrqi.jpg",
    },
    {
      imageUrl:
        "v1656862993/Kouty/pm-eme-room2-211116-cam001-jpeg_16391630079451_1920x1080_ttt_90_qlyasp.webp",
    },

    {
      imageUrl:
        "v1656862994/Kouty/pm-eme-cor-211116-cam001-jpeg_16384625467577_1920x1080_ftt_100_z2mvui.jpg",
    },
    {
      imageUrl:
        "v1656862995/Kouty/14-interactive-lightmix_16384625075802_1920x1080_ftt_100_jmhi5e.jpg",
    },

    {
      imageUrl:
        "v1656862996/Kouty/9_16384624011471_1920x1080_ftt_100_mgtuvi.jpg",
    },

    {
      imageUrl: "v1656863000/Kouty/7_16384624009_1920x1080_ftt_100_ejgakf.jpg",
    },

    {
      imageUrl:
        "v1656862995/Kouty/4_16384623847907_1920x1080_ftt_100_suy0ie.jpg",
    },
  ],
  hideArchitect: true,
  stats: [
    {
      value: "7000",
      highlighted: "m2",
      desc: "Plocha pozemku",
    },
    {
      value: "32",
      highlighted: "",
      desc: "Apartmánů",
    },
    {
      value: "Až",
      highlighted: "2+kk",
      desc: "Dispozice Apartmánů",
    },
    {
      value: "Říjen",
      highlighted: "2024",
      desc: "Termín Dokončen",
    },
  ],
  features: [
    {
      icon: "/features/sauna.png",
      desc: "Saunový svět",
    },
    {
      icon: "/features/ski.png",
      desc: "Lyžárna",
    },
    {
      icon: "/features/table-football(1).png",
      desc: "Restaurace",
    },
    {
      icon: "/features/view.png",
      desc: "5-ti hvězdičkový servis",
    },
    {
      icon: "/features/park.png",
      desc: "Uprostřed přírody",
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
    title: "Originální koncept ",
    titleGold: "designových apartmánů",
    desc: "Zcela unikátní vyznění a jiné barevné ladění. Každý z našich apartmánů je originál, navrhoval ho jiný architekt. Vždy je to ale minimalismus s poctou k prvorepublikové architektuře. Ať už jsou to repasované dveře, původní parkety, dřevěná obložení nebo citlivě vybrané designové doplňky – vše ladí v jeden estetický celek. Velký důraz přitom klademe na luxusní vybavení a prvotřídní materiály.  Těšte se na pohodlné postele a kvalitní spánek.",
  },

  sectionFourTwoText: {
    title: "Wellness",
    titleGold: "s útulnou atmosférou",
    desc: "Pohodlí jsme podřídili všechno. V přízemí hotelu proto budujeme designové wellness centrum, kde můžete načerpat síly a užívat si soukromí. Čeká zde na vás finská sauna s parním nárazem, odpočinková část s výhledem do zeleně, whirpool vana pro dvě osoby a zážitková sprcha s relaxačními programy. Rezervaci si můžete udělat online a prostory si otevřít sami pomocí kódu, který vám zašleme.",
  },

  sectionImageOne:
    "v1656862993/Kouty/pm-eme-room2-211116-cam001-jpeg_16391630079451_1920x1080_ttt_90_qlyasp.webp",
  sectionImageTwo:
    "v1656862994/Kouty/pm-eme-cor-211116-cam001-jpeg_16384625467577_1920x1080_ftt_100_z2mvui.jpg",
  sectionCover:
    "v1656862992/Kouty/pm-eme-room2-211116-cam002-jpeg_16391630070542_1920x1080_ttt_90_ucqrqi.jpg",

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
      price: "Cena na dotaz",
      number: "131/1",
      floor: "2NP",
      layout: "1 + kk",
      size: "20 m2",
      terasa: "-",
      parking: "1",
      // link: "/vila-republika/ap-1",
      reserved: false,
    },
    {
      price: "Cena na dotaz",
      number: "131/2",
      floor: "2NP",
      layout: "2 + kk",
      size: "23 m2",
      terasa: "-",
      parking: "1",
      // link: "/vila-republika/ap-1",
      reserved: false,
    },
    {
      price: "Cena na dotaz",
      number: "131/3",
      floor: "2NP",
      layout: "1 + kk",
      size: "25 m2",
      terasa: "-",
      parking: "1",
      // link: "/vila-republika/ap-1",
      reserved: false,
    },
    {
      price: "Cena na dotaz",
      number: "131/4",
      floor: "2NP",
      layout: "1 + kk",
      size: "30 m2",
      terasa: "-",
      parking: "1",
      link: "/vila-republika/ap-1",
      reserved: false,
    },
    {
      price: "Cena na dotaz",
      number: "131/5",
      floor: "2NP",
      layout: "1 + kk",
      size: "30 m2",
      terasa: "-",
      parking: "1",
      link: "/vila-republika/ap-1",
      reserved: false,
    },
    {
      price: "Cena na dotaz",
      number: "131/6",
      floor: "2NP",
      layout: "1 + kk",
      size: "25 m2",
      terasa: "-",
      parking: "1",
      link: "/vila-republika/ap-1",
      reserved: false,
    },
    {
      price: "Cena na dotaz",
      number: "131/7",
      floor: "2NP",
      layout: "1 + kk",
      size: "30 m2",
      terasa: "-",
      parking: "1",
      link: "/vila-republika/ap-1",
      reserved: false,
    },
    {
      price: "Cena na dotaz",
      number: "131/8",
      floor: "2NP",
      layout: "1 + kk",
      size: "30 m2",
      terasa: "-",
      parking: "1",
      // link: "/vila-republika/ap-1",
      reserved: false,
    },
    {
      price: "Cena na dotaz",
      number: "131/9",
      floor: "2NP",
      layout: "1 + kk",
      size: "39 m2",
      terasa: "-",
      parking: "1",
      // link: "/vila-republika/ap-1",
      reserved: false,
    },
    {
      price: "Cena na dotaz",
      number: "131/10",
      floor: "2NP",
      layout: "1 + kk",
      size: "34 m2",
      terasa: "-",
      parking: "1",
      // link: "/vila-republika/ap-1",
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
      image: "v1689504195/vilaRepublikaFoto/356584285_1096124314696983_2263942071942825600_n_xv0nkq.jpg",
      name: "Vila republika",
      location: "Velké Losiny",
      link: "/vila-republika",
    },
    {
      image: "v1645823344/hrabenov/1_frp1mw.jpg",
      name: "Rezidence Hrabenov",
      location: "Hrabenov, Ruda Nad Moravou",
      link: "/rezidence-hrabenov",
    },
  ],
  timelineFill: "5%",
  timeline: [
    {
      title: "Projektová dokumentace",
      date: "Listopad 2022",
    },
    {
      title: "Zahájení rekonstrukce",
      date: "Listopad 2023",
    },
    {
      title: "Dokončení rekonstrukce",
      date: "Září 2024",
    },
    {
      title: "Předání nemovitosti",
      date: "Říjen 2024",
    },
  ],
  architectName: "Arch. Studio Reaktor",
  architectWord:
    "“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.“",
};

const Kouty = () => {
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

export default Kouty;
