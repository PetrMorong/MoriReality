import * as React from 'react'
import Layout from '../../components/layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PriceList from '../../components/ProjectDetail/PriceList'
import OtherProjects from '../../components/ProjectDetail/OtherProjects'
import ProjectSectionOne from '../../components/ProjectDetail/ProjectSectionOne'
import ProjectSectionTwo from '../../components/ProjectDetail/ProjectSectionTwo'
import ProjectSectionThree from '../../components/ProjectDetail/ProjectSectionThree'
import ProjectSectionFour from '../../components/ProjectDetail/ProjectSectionFour'
import ProjectSectionFive from '../../components/ProjectDetail/ProjectSectionFive'
import ProjectSectionSix from '../../components/ProjectDetail/ProjectSectionSix'

const data = {
  status: 'Dokončeno',
  title: 'Apartmány Hrabenov',
  locationOne: 'Hrabenov 245',
  locationTwo: 'Ruda nad Moravou, Olomoucký kraj',
  videoUrl: 'https://youtu.be/N_I-1PyQdX8',
  cover:
    'https://res.cloudinary.com/morireality/image/upload/v1645823021/vilaRepublikaCover_hykftv.png ',
  desc: (
    <>
      Utečte od starostí, vraťte se k přírodě. V malebné obci Ruda nad Moravou
      na Šumpersku jsme citlivě zrekonstruovali nemovitost z 19. století.
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
      imageUrl: 'v1724488767/hrabenov/DSC03066-HDR-min_ekphad.jpg',
    },

    {
      imageUrl: 'v1724488769/hrabenov/DSC03058-HDR-min_lzi4cg.jpg',
    },

    {
      imageUrl: 'v1724488769/hrabenov/DSC03058-HDR-min_lzi4cg.jpg',
    },

    // {
    //   imageUrl: 'v1724488771/hrabenov/DSC03072-HDR-min_j4ilcy.jpg',
    // },

    // {
    //   imageUrl: 'v1724488767/hrabenov/DSC03079-min_qdvqtf.jpg',
    // },

    // {
    //   imageUrl: 'v1724488766/hrabenov/DSC03087-min_kzsxtq.jpg',
    // },

    // {
    //   imageUrl: 'v1724488767/hrabenov/DSC03080-min_ucn7co.jpg',
    // },

    // {
    //   imageUrl: 'v1646062245/hrabenov/ISO_cjeydz.jpg',
    // },
  ],
  stats: [
    {
      value: '350',
      highlighted: 'm2',
      desc: 'Plocha zahrady',
    },
    {
      value: '3',
      highlighted: '',
      desc: 'Apartmány',
    },
    {
      value: 'Až',
      highlighted: '3+1',
      desc: 'Dispozice',
    },
    {
      value: 'Červenec',
      highlighted: '2023',
      desc: 'Termín Dokončení',
    },
  ],
  features: [
    {
      icon: '/features/sauna.png',
      desc: 'Privátní wellness',
    },
    {
      icon: '/features/ski.png',
      desc: 'Lyžárna',
    },
    {
      icon: '/features/table-football(1).png',
      desc: 'Společenská místnost',
    },
    {
      icon: '/features/view.png',
      desc: 'Krásný výhled',
    },
    {
      icon: '/features/park.png',
      desc: 'Zahrada',
    },
    {
      icon: '/features/parking-area.png',
      desc: 'Parkovací místo',
    },
    {
      icon: '/features/smart-home.png',
      desc: 'Chytrá domácnost',
    },
    {
      icon: '/features/door-lock.png',
      desc: 'Chytrý zámek na kód',
    },
  ],

  sectionFourOneText: {
    title: 'Zachovalé historické',
    titleGold: 'detaily a prvky',
    desc: 'S úctou k tradicím. V rámci rekonstrukce jsme se snažili o zachování všech okouzlujících historických prvků, které dodávají místu osobitý charakter. V některých apartmánech jsme ponechali originální zrenovované parkety, stejně tak restaurujeme výklenky kolem oken, původní kování, panty, okna a dveře.',
  },

  sectionFourTwoText: {
    title: 'Moderní domácnost',
    titleGold: 'a vyspělé technologie',
    desc: 'Domácnost, která se řídí sama a lze ji ovládat na dálku, je součástí i našeho projektu. Vydáváte se na víkend na lyže? Zapněte si topení v předstihu a přijeďte do vyhřátého. Zapomněli jste zhasnout světla při odjezdu? Učiňte tak jedním kliknutím odkudkoliv. Moderní technologie zajišťují pohodlí, šetří energie i váš čas. Pokud máte v plánu apartmán pronajímat v době, kdy ho nevyužíváte sami, stačí hostům zadat unikátní kód, pomocí kterého se dostanou do budovy.',
  },

  sectionImageOne: 'v1645865784/hrabenov/A_2.1.1_qm3upq.jpg',
  sectionImageTwo: 'v1645822960/hrabenov/B_7-min_d5ngyj.jpg',
  sectionCover: 'v1645865838/hrabenov/A_3.1_e7dbga.jpg',
  ticksSection: [
    {
      highlighted: 'Obchod i služby',
      normal: 'vše na dosah',
      desc: 'Ruda nad Moravou leží v malebném údolí řeky Morava. Nachází se pouhých 10 minut jízdy od Šumperka, kde najdete veškerou občanskou vybavenost, dále kino, krytý bazén, bary, kavárny i výborné restaurace. Přímo v Rudě je místní hospoda a koupaliště.',
    },
    {
      highlighted: 'v zimě lyžování',
      normal: 'V létě příroda, ',
      desc: 'Překrásná krajina podhůří Jeseníků svádí k výletům všeho druhu. Po svých nebo na kole se můžete vydávat za přírodními krásami, na výšlapy do vrcholků Hanušovické vrchoviny nebo na zdejší rozhlednu Háj. Nejbližší lyžařský areál Štědrákova Lhota je vzdálen 7 km, Buková Hora 20 km a Kunčice necelých 30 km.',
    },
    {
      highlighted: 'a wellness zázemí',
      normal: 'Propojení se zelení',
      desc: 'Myslíme na to, aby apartmány byly co nejvíce propojeny s okolní krajinou. Každý má proto vlastní zahradu nebo terasu. Za domem stavíme společnou wellness zónu se saunou, vířivkou, ochlazovacím koutem a odpočinkovou částí. Ke společenským účelům bude sloužit místnost v přízemí se stolním fotbálkem a posezením.',
    },
  ],
  apartments: [
    {
      price: '2 390 000 Kč',
      number: '245/1',
      floor: '2NP',
      layout: '3 + kk',
      size: '63 m2',
      terasa: '70 m2',
      parking: '1',
      link: '/',
      reserved: true,
    },
    {
      price: '3 400 000 Kč',
      number: '245/2',
      floor: '2NP',
      layout: '2 + kk',
      size: '53 m2',
      terasa: '18 m2',
      parking: '1',
      link: '/',
      reserved: true,
    },
    {
      price: '1 290 000 Kč',
      number: '245/3',
      floor: '3NP',
      layout: '3 + 1',
      size: '109 m2',
      terasa: '75 m2',
      parking: '2',
      link: '/',
      reserved: true,
    },
  ],



  otherProjects: [
    {
      image: "v1723189892/Rapotin/karty/DSC02635_1_c1mvxg.jpg",
      name: "Wellnness Resort",
      location: "Červený dvůr",
      link: "/cervenydvur",
    },
    {
      image: "v1689504195/vilaRepublikaFoto/356584285_1096124314696983_2263942071942825600_n_xv0nkq.jpg",
      name: 'Vila republika',
      location: 'Velké Losiny',
      link: '/vila-republika',
    },
    {
      image:
        'v1664009999/Kouty/Screen_Shot_2022-08-18_at_11.27.50_1_gnjjvw.png',
      name: 'Wellness Aparthotel',
      location: 'Kouty nad Desnou',
      link: '/aparthotel-kouty',
    },
  ],
  architectName: 'Pavol Vojtek',
  architectWord:
    '“Viacgeneračný rodinný dom situovaný na kopcovitom pozemku má obrovský potenciál, ktorý sme sa rozhodli naplno využiť. Dispozičnými zmenami sa nám podarilo vyriešiť 3 bytové jednotky, ktoré sú vhodné ako na prechodné, tak na trvalé bývanie. Takto zrekonštruovaný dom bude poskytovať priestor na bývanie a relax.“',
  timelineFill: '40%',
  timeline: [
    {
      title: 'Projektová dokumentace',
      date: 'Listopad 2022',
    },
    {
      title: 'Zahájení rekonstrukce',
      date: 'Leden 2023',
    },
    {
      title: 'Dokončení rekonstrukce',
      date: 'Březen 2024',
    },
    {
      title: 'Předání nemovitosti',
      date: 'Duben 2024',
    },
  ],
}

const VilaRepublika = () => {
  return (
    <Layout>
      <Header email="info@josefandrle.cz" phone="+420 605 177 870" />
      <ProjectSectionOne data={data} />
      <ProjectSectionTwo data={data} />
      <ProjectSectionThree data={data} />
      <ProjectSectionFour data={data} />
      <ProjectSectionFive data={data} />
      {/* <ProjectSectionSix data={data} /> */}
      <PriceList data={data} />
      <OtherProjects data={data} />
      <Footer email="info@josefandrle.cz" phone="+420 605 177 870" />
    </Layout>
  )
}

export default VilaRepublika
