import * as React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PriceList from "../../components/ProjectDetail/PriceList";
import Gallery from "../../components/ProjectDetail/Gallery"
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
     Čtyřhvězdičkový aparthotel s restaurací a prémiovým wellness v srdci Jeseníků.
Pouhých 800 metrů od skiareálu Kouty s 3. nejdelší sjezdovkou v ČR a lanovkou na Praděd.

V projektu vznikne 23 designových jednotek, všechny jsou k prodeji —
od komfortních apartmánů až po investiční ubytovací jednotky se stabilním výnosem. Majitelům nabízíme také kompletní správu, provoz i marketing.

Součástí resortu bude:

Privátní wellness s prémiovým vybavením, stylové bistro.h otelové pokoje a apartmány ve čtyřhvězdičkovém standardu, profesionální správa a plný servis pro investory

Investujte do aparthotelu v jedné z nejrychleji rostoucích lokalit Jeseníků.
Zajistíme vysokou obsazenost, bezstarostný provoz a dlouhodobý výnos.
    </>
  ),
  sliderImages: [
    {
      imageUrl:
        "v1763645408/Kouty/01-min_uxjr1h.jpg",
    },
    {
      imageUrl:
        "v1763645411/Kouty/04-min_ob6z5p.jpg",
    },
    {
      imageUrl:
        "v1763645409/Kouty/02-min_ez8vl9.jpg",
    },
    {
      imageUrl:
        "v1763645409/Kouty/03-min_mlwxdh.jpg",
    },
    {
      imageUrl:
        "v1763645405/Kouty/recepce_01_tyr3cq.png",
    },
    {
      imageUrl:
        "v1763645392/Kouty/1000015941_wzwq3z.png",
    },
    {
      imageUrl:
        "v1763645403/Kouty/1000015942_k415zz.png",
    },
    {
      imageUrl:
        "v1763645405/Kouty/1000015946_zr6ulp.png",
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
      value: "23",
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
      highlighted: "2027",
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
      desc: "Lyžárna",
    },
    {
      icon: "/features/table-football(1).png",
      desc: "Bistro",
    },
    {
      icon: "/features/view.png",
      desc: "4 hvězdičkový servis",
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
      desc: "Self checkin",
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
    desc: "Pohodlí jsme podřídili všechno. V přízemí hotelu proto budujeme designové wellness, kde můžete načerpat síly a užívat si soukromí. Čeká zde na vás finská sauna s parním nárazem, odpočinková část s výhledem do zeleně, whirpool vana pro dvě osoby a zážitková sprcha s relaxačními programy. Rezervaci si můžete udělat online a prostory si otevřít sami pomocí kódu, který vám zašleme.",
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
      price: "Projekt je v příprave",
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
      price: "Projekt je v příprave",
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
      price: "Projekt je v příprave",
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
      price: "Projekt je v příprave",
      number: "131/4",
      floor: "2NP",
      layout: "1 + kk",
      size: "30 m2",
      terasa: "-",
      parking: "1",
      // link: "/vila-republika/ap-1",
      reserved: false,
    },
    {
      price: "Projekt je v příprave",
      number: "131/5",
      floor: "2NP",
      layout: "1 + kk",
      size: "30 m2",
      terasa: "-",
      parking: "1",
      // link: "/vila-republika/ap-1",
      reserved: false,
    },
    {
      price: "Projekt je v příprave",
      number: "131/6",
      floor: "2NP",
      layout: "1 + kk",
      size: "25 m2",
      terasa: "-",
      parking: "1",
      // link: "/vila-republika/ap-1",
      reserved: false,
    },
    {
      price: "Projekt je v příprave",
      number: "131/7",
      floor: "2NP",
      layout: "1 + kk",
      size: "30 m2",
      terasa: "-",
      parking: "1",
      // link: "/vila-republika/ap-1",
      reserved: false,
    },
    {
      price: "Projekt je v příprave",
      number: "131/8",
      floor: "2NP",
      layout: "1 + kk",
      size: "30 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: false,
    },
    {
      price: "Projekt je v příprave",
      number: "131/9",
      floor: "2NP",
      layout: "1 + kk",
      size: "39 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: false,
    },
    {
      price: "Projekt je v příprave",
      number: "131/10",
      floor: "2NP",
      layout: "1 + kk",
      size: "34 m2",
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
      date: "Listopad 2025",
    },
    {
      title: "Zahájení rekonstrukce",
      date: "Leden 2025",
    },
    {
      title: "Dokončení rekonstrukce fasády",
      date: "Září 2026",
    },
    {
      title: "Předání nemovitosti",
      date: "Říjen 2026",
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
      {/* <Gallery projectName="aparthotel-kouty" /> */}
      <OtherProjects data={data} />
      <Footer />
    </Layout>
  );
};

export default Kouty;
