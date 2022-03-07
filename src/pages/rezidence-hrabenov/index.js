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
      Utečte od starostí, vraťte se k přírodě. V malebné obci Ruda nad Moravou
      na Šumpersku jsme citlivě zrekonstruovali historický objekt z 19. století.
      Tři moderní apartmány se zahradou v sobě snoubí požadavky na komfortní
      bydlení nového tisíciletí, přitom si ale uchovávají genius loci původního
      architektonického díla.
      <br />
      <br />
      Zdejší nádherná lokalita je protkána turistickými trasami i cyklostezkami,
      v létě s možnostmi koupání a v zimě lyžování. V dosahu budete mít
      panenskou přírodu i veškeré služby. Užívat si přitom budete klidné
      prostředí vesničky zasazené v podhůří Jeseníků. Apartmány jsou vhodné jako
      investice i k trvalému bydlení.
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
    {
      imageUrl: "v1646062243/hrabenov/8_dupwox.jpg",
    },
    {
      imageUrl: "v1646062243/hrabenov/9_gt3rxh.jpg",
    },
    {
      imageUrl: "v1646062245/hrabenov/ISO_cjeydz.jpg",
    },
  ],
  stats: [
    {
      value: "350",
      highlighted: "m2",
      desc: "Plocha zahrady",
    },
    {
      value: "3",
      highlighted: "",
      desc: "Apartmány",
    },
    {
      value: "Až",
      highlighted: "3+1",
      desc: "Dispozice",
    },
    {
      value: "Prosinec",
      highlighted: "12/2022",
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
    title: "Zachovalé historické",
    titleGold: "detaily a prvky",
    desc: "S úctou k tradicím. V rámci rekonstrukce jsme se snažili o zachování všech okouzlujících historických prvků, které dodávají místu osobitý charakter. V některých apartmánech jsme ponechali originální zrenovované parkety, stejně tak restaurujeme výklenky kolem oken, původní kování, panty, okna a dveře.",
  },

  sectionFourTwoText: {
    title: "Moderní domácnost",
    titleGold: "a vyspělé technologie",
    desc: "Domácnost, která se řídí sama a lze ji ovládat na dálku, je součástí i našeho projektu. Vydáváte se na víkend na lyže? Zapněte si topení v předstihu a přijeďte do vyhřátého. Zapomněli jste zhasnout světla při odjezdu? Učiňte tak jedním kliknutím odkudkoliv. Moderní technologie zajišťují pohodlí, šetří energie i váš čas. Pokud máte v plánu apartmán pronajímat v době, kdy ho nevyužíváte sami, stačí hostům zadat unikátní kód, pomocí kterého se dostanou do budovy.",
  },

  sectionImageOne: "v1645865784/hrabenov/A_2.1.1_qm3upq.jpg",
  sectionImageTwo: "v1645822960/hrabenov/B_7-min_d5ngyj.jpg",
  sectionCover: "v1645865838/hrabenov/A_3.1_e7dbga.jpg",
  ticksSection: [
    {
      highlighted: "Obchod i služby",
      normal: "vše na dosah",
      desc: "Ruda nad Moravou leží v malebném údolí řeky Morava. Nachází se pouhých 10 minut jízdy od Šumperka, kde najdete veškerou občanskou vybavenost, dále kino, krytý bazén, bary, kavárny i výborné restaurace. Přímo v Rudě je místní hospoda a koupaliště.",
    },
    {
      highlighted: "v zimě lyžování",
      normal: "V létě příroda, ",
      desc: "Překrásná krajina podhůří Jeseníků svádí k výletům všeho druhu. Po svých nebo na kole se můžete vydávat za přírodními krásami, na výšlapy do vrcholků Hanušovické vrchoviny nebo na zdejší rozhlednu Háj. Nejbližší lyžařský areál Štědrákova Lhota je vzdálen 7 km, Buková Hora 20 km a Kunčice necelých 30 km.",
    },
    {
      highlighted: "a wellness zázemí",
      normal: "Propojení se zelení",
      desc: "Myslíme na to, aby apartmány byly co nejvíce propojeny s okolní krajinou. Každý má proto vlastní zahradu nebo terasu. Za domem stavíme společnou wellness zónu se saunou, vířivkou, ochlazovacím koutem a odpočinkovou částí. Ke společenským účelům bude sloužit místnost v přízemí se stolním fotbálkem a posezením.",
    },
  ],
  apartments: [
    {
      price: "3 790 000 Kč",
      number: "245/1",
      floor: "2NP",
      layout: "3 + kk",
      size: "63 m2",
      terasa: "70 m2",
      parking: "1",
      link: "/rezidence-hrabenov/ap-1",
      reserved: false,
    },
    {
      price: "3 250 000 Kč",
      number: "245/2",
      floor: "2NP",
      layout: "2 + kk",
      size: "53 m2",
      terasa: "18 m2",
      parking: "1",
      link: "/rezidence-hrabenov/ap-2",
      reserved: false,
    },
    {
      price: "3 990 000 Kč",
      number: "245/3",
      floor: "3NP",
      layout: "3 + 1",
      size: "88 m2",
      terasa: "75 m2",
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
    "“Historický objekt zo začiatku minulého storočia tu bol pred každým z nás a vďaka citlivej a poctivej rekonštrukcií bude ešte dlho slúžiť aj budúcim generáciám. Ukrýva v sebe niekoľko odkazov na dobu svojho vzniku, ktoré sme prečítali a nechali odprezentované Vám - budúcim užívateľom.“",
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
