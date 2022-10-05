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
  title: "Horské Apartmány Malá Morava",
  locationOne: "Vlaské 39",
  locationTwo: "Malá Morava, Olomoucký kraj",
  cover: "vilaRepublikaCover",
  videoUrl: "https://youtu.be/_EIrESBeclU",
  desc: (
    <>
      Načerpejte energii z čisté přírody. Na polosamotě, ve vísce Vlaské na
      Šumpersku, rekonstruujeme kouzelnou chalupu z konce 19. století. Zasazena
      je do půvabné krajiny Hanušovické vrchoviny, která lemuje povodí řeky
      Moravy. Sedm luxusních apartmánů renovujeme v tradičním duchu, přitom se
      všemi výdobytky moderního bydlení.
      <br />
      <br />
      Podhorská oblast Malá Morava leží na rozmezí mezi dvěma pohořími –
      Králickým Sněžníkem a Jeseníky. V zimě si tu na své přijdou milovníci
      všech zimních sportů, v létě zase příznivci horské turistiky a cyklistiky.
      Na dovolenou sem ale můžete vyrážet bez ohledu na roční dobu a užívat si
      sepjetí s přírodou pod hvězdnou oblohou.
    </>
  ),
  sliderImages: [
    {
      imageUrl: "v1645822943/malaMorava/POHLAD1-min_aihqvk.jpg",
    },
    {
      imageUrl: "v1645822954/malaMorava/POHLAD2-min_rnl73g.jpg",
    },
    {
      imageUrl: "v1645822944/malaMorava/CHODBA3-2-min_gtbied.jpg",
    },
    {
      imageUrl: "v1645822951/malaMorava/SKLEP-min_trvqem.jpg",
    },
    {
      imageUrl: "v1645822950/malaMorava/ap5/D_2-min_m8yzjh.jpg",
    },
    {
      imageUrl: "v1645822947/malaMorava/ap5/D_3-min_q7owfw.jpg",
    },
    {
      imageUrl: "v1645822941/malaMorava/ap5/D_4-min_rpgi1k.jpg",
    },
    {
      imageUrl: "v1645822945/malaMorava/ap5/D_5-min_tasob8.jpg",
    },
    {
      imageUrl: "v1645822945/malaMorava/2NPpu%CC%8Adorys-min_ueox9k.png",
    },

    {
      imageUrl:
        "v1665000042/malaMorava/Screen_Shot_2022-10-05_at_21.35.29_kmnreq.png",
    },

    {
      imageUrl: "v1645822962/malaMorava/situace_vpz28f.png",
    },
  ],
  stats: [
    {
      value: "2400",
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
      highlighted: "2+1",
      desc: "Dispozice Apartmánů",
    },
    {
      value: "Červenec",
      highlighted: "2023",
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
    title: " Moderní pojetí s",
    titleGold: "půvabnými historickými detaily ",
    desc: "Máme rádi původní architekturu podhůří Jeseníků. Celý objekt proto rekonstruujeme s citem a úctou k tradicím. Vstupní halu ozdobí zrenovované sloupy, romantickou atmosféru jednotlivých apartmánů podtrhnou obloukové klenby a dřevěná trámoví. Interiér domu ctí originální styl dřevěných oken a dveří, veškeré vybavení současně splňuje novodobé technické požadavky pro pohodlné bydlení. Dispozice apartmánů navrhl architekt tak, aby vyhovovaly nárokům moderní doby a žilo se tu lehce a bez starostí.",
  },

  sectionFourTwoText: {
    title: "Moderní domácnost",
    titleGold: "a vyspělé technologie",
    desc: "Nadstandard už ve standardu. Při rekonstrukci používáme jen ty nejkvalitnější materiály – keramické obklady a dlažby, dřevěné podlahy, moderní spotřebiče, kuchyně na míru a luxusní sanitu. Celý objekt bude vytápěn podlahovým vytápěním a řízen moderními technologiemi. Na dálku půjde ovládat vše – od topení a osvětlení až k elektrickým zámkům. Pokud plánujete apartmán pronajímat, stačí hostům zadat unikátní kód, pomocí kterého se dostanou do budovy.",
  },

  sectionImageOne: "v1664194158/malaMorava/ap3/07_gnrdbf.jpg",
  sectionImageTwo: "v1645822956/malaMorava/SKLEP-WELLNESS-min_kuyk5e.jpg",
  sectionCover: "v1656865840/malaMorava/02_2_nlgatf.jpg",
  ticksSection: [
    {
      highlighted: "Lyžování v ",
      normal: "srdci moravských hor",
      desc: "Chalupa Malá Morava je skvělým výchozím bodem pro zimní dovolenou. V okolí se nachází hned několik lyžařských středisek a velké množství běžeckých tratí. Ski-areál Dolní Morava v podhůří Králického Sněžníku s 10 kilometry sjezdovek je vzdálen pouhých 14 minut jízdy autem. Další ski- areály jako například Červená Voda, Štědrákova Lhota nebo Stříbrnice se nachází v dojezdové vzdálenosti do 20 minut.",
    },
    {
      highlighted: "povodí řeky Moravy",
      normal: "Půvabná příroda ",
      desc: "Víska Vlaské spadá pod katastr obce Malá Morava. Na polosamotě najdete místo k relaxaci a hlubokému odpočinku. Dobře se tu spí. Zdejší idylické podhůří vás okouzlí neposkvrněnou přírodou. Údolím se klikatí řeka Morava, všude kolem jsou jen louky, lesy, čistý vzduch a božský klid. A také turistické trasy, cyklostezky, koupaliště nebo orosené pivo v nedalekém pivovaru Holba. To vše jsou důvody, proč se sem budete tak rádi vracet.",
    },
    {
      highlighted: " a zábava",
      normal: "Wellness, grilování",
      desc: "Nudit se nebudete ani na chalupě. Na zahradě vznikne wellness zóna s finskou sauna a vířivkou. Těšit se můžete na dlouhé večery pod hvězdami, krásné výhledy a grilování pod pergolou. K posezení, hudbě a oslavám poslouží vinný sklípek, kde se zabavíte i v zimě a při nepříznivém počasí. Pro vaše pohodlí budujeme také místnost pro kola a lyžárnu s vyhřívanými stojany na lyžařské boty.",
    },
  ],
  apartments: [
    {
      price: "4 990 000 Kč",
      number: "39/1",
      floor: "1NP",
      layout: "2kk",
      size: "72 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: false,
      link: "/apartmany-mala-morava/ap-1",
    },
    {
      price: "3 990 000 Kč",
      number: "39/2",
      floor: "1NP",
      layout: "2kk",
      size: "51 m2",
      terasa: "19,25 m2",
      parking: "1",
      link: "",
      reserved: false,
      link: "/apartmany-mala-morava/ap-2",
    },
    {
      price: "2 990 000 Kč",
      number: "39/3",
      floor: "1NP",
      layout: "2kk",
      size: "36 m2",
      terasa: "12,5 m2",
      parking: "1",
      link: "/apartmany-mala-morava/ap-5",
      reserved: false,
    },
    {
      price: "2 790 000 Kč",
      number: "39/4",
      floor: "2NP",
      layout: "1kk",
      size: "36 m2",
      terasa: "-",
      parking: "1",
      link: "/apartmany-mala-morava/ap-4",
      reserved: false,
    },
    {
      price: "3 490 000 Kč",
      number: "39/5",
      floor: "2NP",
      layout: "2kk",
      size: "49 m2",
      terasa: "-",
      parking: "1",
      link: "/apartmany-mala-morava/ap-7",
      reserved: false,
    },
    {
      price: "3 490 000 Kč",
      number: "39/6",
      floor: "2NP",
      layout: "1kk",
      size: "24 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: true,
    },
    {
      price: "3 490 000 Kč",
      number: "39/7",
      floor: "2NP",
      layout: "2kk",
      size: "48 m2",
      terasa: "-",
      parking: "1",
      link: "",
      reserved: true,
    },
  ],
  otherProjects: [
    {
      image: "v1645822941/vilaRepublika/mp01-min_pilgkw.jpg",
      name: "Vila republika",
      location: "Velké Losiny",
      link: "/vila-republika",
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
  timelineFill: "10%",
  timeline: [
    {
      title: "Projektová dokumentace",
      date: "Únor 2022",
    },
    {
      title: "Zahájení rekonstrukce",
      date: "Prosinec 2022",
    },
    {
      title: "Dokončení rekonstrukce",
      date: "Červen 2023",
    },
    {
      title: "Předání nemovitosti",
      date: "Červenec 2023",
    },
  ],
  architectName: "Pavol Vojtek",
  architectWord:
    "“Historický objekt zo začiatku minulého storočia tu bol pred každým z nás a vďaka citlivej a poctivej rekonštrukcií bude ešte dlho slúžiť aj budúcim generáciám. Ukrýva v sebe niekoľko odkazov na dobu svojho vzniku, ktoré sme prečítali a nechali odprezentované Vám - budúcim užívateľom.“",
};

const VilaRepublika = () => {
  return (
    <Layout>
      <Header email="dominik.lokoc@homeportal.cz" phone="+420 602 732 879" />
      <ProjectSectionOne data={data} />
      <ProjectSectionTwo data={data} />
      <ProjectSectionThree data={data} />
      <ProjectSectionFour data={data} />
      <ProjectSectionFive data={data} />
      <ProjectSectionSix data={data} />
      <PriceList data={data} />
      <OtherProjects data={data} />
      <Footer email="dominik.lokoc@homeportal.cz" phone="+420 602 732 879" />
    </Layout>
  );
};

export default VilaRepublika;
