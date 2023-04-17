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
  status: 'Předprodej',
  title: 'Vila republika druhá etapa',
  locationOne: 'Osvobození 354',
  locationTwo: 'Velké Losiny, Olomoucký kraj',
  cover: 'vilaRepublikaCover',
  videoUrl: 'https://youtu.be/23EWRlkDA4s',
  desc: (
    <>
      Wellness apartmány s prvorepublikovým šarmem. Místo, kde se moderna snoubí
      s historií. V malebné obci pod vrcholky Hrubého Jeseníku stavíme novostabu
      v duchu první republiky. Velké Losiny jsou jedny z nejstarších moravských
      lázní. A s odkazem k lázeňské tradici stavíme i všech pět apartmánů
      projektu. Ctíme minimalistické pojetí a zakomponujeme krásné
      prvorepublikové prvky.
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
      imageUrl:
        'v1676730936/VlDvojka/Screenshot_2023-02-18_at_15.12.33_ad4t03.png',
    },

    {
      imageUrl:
        'v1676730941/VlDvojka/Screenshot_2023-02-18_at_15.12.19_py1arx.png',
    },

    {
      imageUrl:
        'v1676730931/VlDvojka/Screenshot_2023-02-18_at_15.14.28_mvbvak.png',
    },

    {
      imageUrl:
        'v1676730931/VlDvojka/Screenshot_2023-02-18_at_15.14.16_b5ifow.png',
    },

    {
      imageUrl:
        'v1677958456/VlDvojka/Screenshot_2023-03-04_at_20.23.47_fcpl7i.png',
    },

    {
      imageUrl:
        'v1677958461/VlDvojka/Screenshot_2023-03-04_at_20.24.17_jux09z.png',
    },

    {
      imageUrl:
        'v1677958460/VlDvojka/Screenshot_2023-03-04_at_20.23.26_dmqrwi.png',
    },

    {
      imageUrl:
        'v1677958468/VlDvojka/Screenshot_2023-03-04_at_20.20.13_wrouo4.png',
    },

    {
      imageUrl:
        'v1677958460/VlDvojka/Screenshot_2023-03-04_at_20.20.29_vq6zbc.png',
    },

    {
      imageUrl:
        'v1677958458/VlDvojka/Screenshot_2023-03-04_at_20.22.25_cb25nd.png',
    },

    {
      imageUrl:
        'v1677958459/VlDvojka/Screenshot_2023-03-04_at_20.23.09_b8jydl.png',
    },

    {
      imageUrl:
        'v1679733439/VlDvojka/Screenshot_2023-03-25_at_9.36.57_qnzpqe.png',
    },

    {
      imageUrl:
        'v1679733448/VlDvojka/Screenshot_2023-03-25_at_9.36.48_gelooe.png',
    },
  ],
  hideArchitect: true,
  stats: [
    {
      value: '950',
      highlighted: 'm2',
      desc: 'Plocha pozemku',
    },
    {
      value: '5',
      highlighted: '',
      desc: 'Apartmánů',
    },
    {
      value: 'Až',
      highlighted: '2+kk',
      desc: 'Dispozice Apartmánů',
    },
    {
      value: 'Prosinec',
      highlighted: '2024',
      desc: 'Termín Dokončení',
    },
  ],
  features: [
    {
      icon: '/features/sauna.png',
      desc: 'Venkovní wellness',
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
    title: 'Originální koncept ',
    titleGold: 'designových apartmánů',
    desc: 'Zcela unikátní vyznění a jiné barevné ladění. Každý z našich apartmánů je originál, navrhoval ho jiný architekt. Vždy je to ale minimalismus s poctou k prvorepublikové architektuře. Ať už jsou to repasované dveře, původní parkety, dřevěná obložení nebo citlivě vybrané designové doplňky – vše ladí v jeden estetický celek. Velký důraz přitom klademe na luxusní vybavení a prvotřídní materiály.  Těšte se na pohodlné postele a kvalitní spánek.',
  },

  sectionFourTwoText: {
    title: 'Privátní wellness',
    titleGold: 's útulnou atmosférou',
    desc: 'Pohodlí jsme podřídili všechno. V přízemí vily proto budujeme designové wellness centrum, kde můžete načerpat síly a užívat si soukromí. Čeká zde na vás finská sauna s parním nárazem, odpočinková část s výhledem do zeleně, whirpool vana pro dvě osoby a zážitková sprcha s relaxačními programy. Rezervaci si můžete udělat online a prostory si otevřít sami pomocí kódu, který vám zašleme.',
  },

  sectionImageOne:
    'v1677958461/VlDvojka/Screenshot_2023-03-04_at_20.24.17_jux09z.png',
  sectionImageTwo:
    'v1677958460/VlDvojka/Screenshot_2023-03-04_at_20.23.26_dmqrwi.png',
  sectionCover:
    'v1677958456/VlDvojka/Screenshot_2023-03-04_at_20.23.47_fcpl7i.png',

  ticksSection: [
    {
      highlighted: 'Lázeňská tradice',
      normal: 'Velkých Losin',
      desc: 'Velké Losiny mají co nabídnout. Usazené pod vrcholky hor jsou vstupní branou Hrubého Jeseníku. Příznivé klima a čerstvý horský vzduch prospějí vašemu tělu i duši, stejně jako léčivé minerální prameny nebo unikátní termální lázně, které nemají v České republice obdoby. Za poznáním se můžete vydat na prohlídku pozdně renesančního zámku nebo do velkolosinské ruční papírny. A k tomu si užívat skvělou gastronomii i mlsání v místní pralinkárně.',
    },
    {
      highlighted: 'Hrubého Jeseníku',
      normal: 'Léčivá krása ',
      desc: 'Druhé největší pohoří České republiky stojí trochu stranou turistického zájmu, což ale má své velké výhody. Úchvatný ráz krajiny ještě nestihla pozměnit ruka člověka a zdejší neposkvrněná příroda má v sobě léčivou sílu. Vyšlápněte si na horu Praděd, vydejte se na okruh po vodopádech anebo místních rozhlednách. Nezapomeňte na přečerpávací vodní elektrárnu Dlouhé Stráně. Pěšky nebo na kole, kromě turistických tras je zde i široká síť cyklostezek. Jeseníky myslí na každého z vás.',
    },
    {
      highlighted: 'už od listopadu',
      normal: 'Lyžování naplno ',
      desc: 'Hrubý Jeseník má skvělé sněhového podmínky. V dosahu budete mít hned několik ski-areálů. Necelých 10 kilometrů je vzdálen ski-areál Kouty a Přemyslov. Zhruba za 20 minut dorazíte na Praděd nebo Červenohorské sedlo. A mnoho dalších menších středisek objevíte v blízkém okolí. Pro běžkaře je nejatraktivnější oblastí Jesenická magistrála. Přejezd Jesenického hřebene na lyžích je jedním z nejkrásnějších horských výletů, které u nás můžete podniknout.',
    },
  ],
  apartments: [
    {
      price: '3 390 000 Kč',
      number: '1',
      floor: '1NP',
      layout: '1 + kk',
      size: '30 m2',
      terasa: '30 m2',
      parking: '1',
      link: '',
      reserved: true,
    },
    {
      price: '3 790 000 kč',
      number: '2',
      floor: '1NP',
      layout: '2 + kk',
      size: '34 m2',
      terasa: '50 m2',
      parking: '1',
      link: '/vila-republika-druha-etapa/ap-2',
      reserved: true,
    },
    {
      price: '',
      number: '3',
      floor: '2NP',
      layout: '2kk',
      size: '30 m2',
      terasa: '-',
      parking: '1',
      link: '',
      reserved: true,
    },
    {
      price: '',
      number: '4',
      floor: '2NP',
      layout: '1 + kk',
      size: '27 m2',
      terasa: '-',
      parking: '1',
      link: '',
      reserved: true,
    },
    {
      price: '',
      number: '5',
      floor: '2NP',
      layout: '2 + kk',
      size: '40 m2',
      terasa: '-',
      parking: '1',
      link: '',
      reserved: true,
    },
  ],
  otherProjects: [
    {
      image: 'v1645823018/projektMalaMorava_nzkcnk.jpg',
      name: 'Apartmány',
      location: 'Malá Morava',
      link: '/apartmany-mala-morava',
    },
    {
      image:
        'v1664009999/Kouty/Screen_Shot_2022-08-18_at_11.27.50_1_gnjjvw.png',
      name: 'Wellness Aparthotel',
      location: 'Kouty nad Desnou',
      link: '/aparthotel-kouty',
    },
    {
      image: 'v1645823344/hrabenov/1_frp1mw.jpg',
      name: 'Rezidence Hrabenov',
      location: 'Hrabenov, Ruda Nad Moravou',
      link: '/rezidence-hrabenov',
    },
  ],
  timelineFill: '10%',
  timeline: [
    {
      title: 'Projektová dokumentace',
      date: 'Únor 2022',
    },
    {
      title: 'Zahájení stavby',
      date: 'Březen 2024',
    },
    {
      title: 'Dokončení hrubé stavby',
      date: 'Čecrven 2024',
    },
    {
      title: 'Předání nemovitosti',
      date: 'Prosinec 2024',
    },
  ],
  architectName: 'Nikol Cojocaru',
  architectWord:
    '“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.“',
}

const VilaRepublika = () => {
  return (
    <Layout>
      <Header />
      <ProjectSectionOne data={data} />
      <ProjectSectionTwo data={data} />
      <ProjectSectionThree data={data} />
      <ProjectSectionFour data={data} />
      <ProjectSectionFive data={data} />
      <ProjectSectionSix data={data} videoSectionTitle="Video z rekonstrukce" />
      <PriceList data={data} />
      {/* <OtherProjects data={data} /> */}
      <Footer />
    </Layout>
  )
}

export default VilaRepublika
