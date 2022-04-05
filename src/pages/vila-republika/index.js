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
  videoUrl: "https://youtu.be/vnrog-OczGQ",
  desc: (
    <>
      Wellness apartmány s prvorepublikovým šarmem. Místo, kde se moderna snoubí
      s historií. V malebné obci pod vrcholky Hrubého Jeseníku rekonstruujeme
      vilu z 30. let minulého století. Velké Losiny jsou jedny z nejstarších
      moravských lázní. A s odkazem k lázeňské tradici renovujeme i všech sedm
      apartmánů projektu. Ctíme minimalistické pojetí, všechny krásné
      prvorepublikové prvky zůstanou zachovány.
      <br />
      <br />
      Apartmánový dům bude sloužit jako ubytování hotelového typu s kompletním
      servisem. Vlastní apartmán vám tak může sloužit jako rodinné rekreační
      zázemí. V době, kdy ho nebudete obývat sami, se pro vás stane pasivní
      investicí. O kompletní správu rezervací a pohodlí vašich hostů se vám rádi
      postaráme od A do Z.
    </>
  ),
  sliderImages: [
    {
      imageUrl: "v1645822964/vilaRepublika/img2_j6mpok.png",
    },
    {
      imageUrl: "v1645822941/vilaRepublika/mp01-min_pilgkw.jpg",
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

    {
      imageUrl: "v1647000262/vilaRepublika/ap1/l07mensi_xywpsx.jpg",
    },

    {
      imageUrl: "v1647000262/vilaRepublika/ap1/l06mensi_ojitki.jpg",
    },

    {
      imageUrl: "v1647000263/vilaRepublika/ap1/l03_mszqi0.jpg",
    },

    {
      imageUrl: "v1647000261/vilaRepublika/ap1/l05_l6aizz.jpg",
    },

    {
      imageUrl: "v1647000260/vilaRepublika/ap1/l04_xlxwta.jpg",
    },

    {
      imageUrl: "v1647000259/vilaRepublika/ap1/l02_ljqbfc.jpg",
    },

    {
      imageUrl: "v1647000259/vilaRepublika/ap1/l01_bchohc.jpg",
    },

    {
      imageUrl: "v1647000259/vilaRepublika/ap1/k04_qtn5by.jpg",
    },

    {
      imageUrl: "v1647000257/vilaRepublika/ap1/k02_ohy5yk.jpg",
    },

    {
      imageUrl: "v1647000257/vilaRepublika/ap1/h04_fosbf6.jpg",
    },
  ],
  hideArchitect: true,
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
      value: "Červenec",
      highlighted: "2022",
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
    title: "Originální koncept ",
    titleGold: "designových apartmánů",
    desc: "Zcela unikátní vyznění a jiné barevné ladění. Každý z našich apartmánů je originál, navrhoval ho jiný architekt. Vždy je to ale minimalismus s poctou k prvorepublikové architektuře. Ať už jsou to repasované dveře, původní parkety, dřevěná obložení nebo citlivě vybrané designové doplňky – vše ladí v jeden estetický celek. Velký důraz přitom klademe na luxusní vybavení a prvotřídní materiály.  Těšte se na pohodlné postele a kvalitní spánek.",
  },

  sectionFourTwoText: {
    title: "Privátní wellness",
    titleGold: "s útulnou atmosférou",
    desc: "Pohodlí jsme podřídili všechno. V přízemí vily proto budujeme designové wellness centrum, kde můžete načerpat síly a užívat si soukromí. Čeká zde na vás finská sauna s parním nárazem, odpočinková část s výhledem do zeleně, whirpool vana pro dvě osoby a zážitková sprcha s relaxačními programy. Rezervaci si můžete udělat online a prostory si otevřít sami pomocí kódu, který vám zašleme.",
  },

  sectionImageOne: "v1647000254/vilaRepublika/ap1/o01_lhqt6c.jpg",
  sectionImageTwo: "v1645822962/vilaRepublika/SAUNA2-min_p65zfc.jpg",
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
      reserved: false,
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
      reserved: false,
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
      image: "v1645823025/projektVlDva_p4fsrb.png",
      name: "Wellness Apartmány",
      location: "Velké Losiny",
    },
    {
      image: "v1645823341/hrabenov/2_g1tut1.jpg",
      name: "Rezidence Hrabenov",
      location: "Hrabenov, Ruda Nad Moravou",
    },
  ],
  timelineFill: "80%",
  timeline: [
    {
      title: "Projektová dokumentace",
      date: "Prosinec 2020",
    },
    {
      title: "Zahájení rekonstrukce",
      date: "Leden 2021",
    },
    {
      title: "Dokončení rekonstrukce",
      date: "Červen 2022",
    },
    {
      title: "Předání nemovitosti",
      date: "Červenec 2022",
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
