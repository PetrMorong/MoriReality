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
        'v1676730933/VlDvojka/Screenshot_2023-02-18_at_15.14.58_ffxzoi.png',
    },

    {
      imageUrl:
        'v1676730943/VlDvojka/Screenshot_2023-02-18_at_15.13.45_gjvwmu.png',
    },

    {
      imageUrl:
        'v1676730942/VlDvojka/Screenshot_2023-02-18_at_15.13.33_rmmnaw.png',
    },

    {
      imageUrl:
        'v1676926374/VlDvojka/Screenshot_2023-02-20_at_21.50.24_bomcoc.png',
    },

    {
      imageUrl:
        'v1676926378/VlDvojka/Screenshot_2023-02-20_at_21.50.46_hjmfoe.png',
    },

    {
      imageUrl: 'v1676926397/VlDvojka/DSC08542-HDR_rz5odo.jpg',
    },

    {
      imageUrl: 'v1676926402/VlDvojka/DSC08539-HDR_yzb5gz.jpg',
    },

    // {
    //   imageUrl: 'v1664012323/vilaRepublika/IMG_20220904_161049_1_t0hjwu.jpg',
    // },

    // {
    //   imageUrl: 'v1664012323/vilaRepublika/IMG_20220826_113059_gfvbvq.jpg',
    // },

    // {
    //   imageUrl: 'v1664012323/vilaRepublika/IMG_20220826_113059_gfvbvq.jpg',
    // },

    // {
    //   imageUrl: 'v1664012327/vilaRepublika/IMG_20220826_113115_g4bpst.jpg',
    // },

    // {
    //   imageUrl: 'v1664012327/vilaRepublika/IMG_20220826_113115_g4bpst.jpg',
    // },

    // {
    //   imageUrl: 'v1664012327/vilaRepublika/IMG_20220826_121733_2_ysn42z.jpg',
    // },

    // {
    //   imageUrl: 'v1664012327/vilaRepublika/IMG_20220617_150325_1_jlewrv.jpg',
    // },

    // {
    //   imageUrl: 'v1664012329/vilaRepublika/IMG_20220904_160945_1_mkktp8.jpg',
    // },

    // {
    //   imageUrl: 'v1664013013/vilaRepublika/IMG_20220914_111001_ubpytt.jpg',
    // },

    // {
    //   imageUrl: 'v1664013012/vilaRepublika/IMG_20220914_110241_kjojys.jpg',
    // },

    // {
    //   imageUrl: "v1645822964/vilaRepublika/img2_j6mpok.png",
    // },
    // {
    //   imageUrl: "v1645822941/vilaRepublika/mp01-min_pilgkw.jpg",
    // },
    // {
    //   imageUrl: "v1645822938/vilaRepublika/1.1-min_yaebmu.jpg",
    // },
    // {
    //   imageUrl: "v1645822938/vilaRepublika/1.3.3-min_j5ku93.jpg",
    // },
    // {
    //   imageUrl: "v1645822943/vilaRepublika/F3-min_icpvqo.jpg",
    // },
    // {
    //   imageUrl: "v1645822937/vilaRepublika/SAUNA1-min_r0jgcz.jpg",
    // },
    // {
    //   imageUrl: "v1645822962/vilaRepublika/SAUNA2-min_p65zfc.jpg",
    // },

    // {
    //   imageUrl: "v1647000262/vilaRepublika/ap1/l07mensi_xywpsx.jpg",
    // },

    // {
    //   imageUrl: "v1647000262/vilaRepublika/ap1/l06mensi_ojitki.jpg",
    // },

    // {
    //   imageUrl: "v1647000263/vilaRepublika/ap1/l03_mszqi0.jpg",
    // },

    // {
    //   imageUrl: "v1647000261/vilaRepublika/ap1/l05_l6aizz.jpg",
    // },

    // {
    //   imageUrl: "v1647000260/vilaRepublika/ap1/l04_xlxwta.jpg",
    // },

    // {
    //   imageUrl: "v1647000259/vilaRepublika/ap1/l02_ljqbfc.jpg",
    // },

    // {
    //   imageUrl: "v1647000259/vilaRepublika/ap1/l01_bchohc.jpg",
    // },

    // {
    //   imageUrl: "v1647000259/vilaRepublika/ap1/k04_qtn5by.jpg",
    // },

    // {
    //   imageUrl: "v1647000257/vilaRepublika/ap1/k02_ohy5yk.jpg",
    // },

    // {
    //   imageUrl: "v1647000257/vilaRepublika/ap1/h04_fosbf6.jpg",
    // },
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
    title: 'Originální koncept ',
    titleGold: 'designových apartmánů',
    desc: 'Zcela unikátní vyznění a jiné barevné ladění. Každý z našich apartmánů je originál, navrhoval ho jiný architekt. Vždy je to ale minimalismus s poctou k prvorepublikové architektuře. Ať už jsou to repasované dveře, původní parkety, dřevěná obložení nebo citlivě vybrané designové doplňky – vše ladí v jeden estetický celek. Velký důraz přitom klademe na luxusní vybavení a prvotřídní materiály.  Těšte se na pohodlné postele a kvalitní spánek.',
  },

  sectionFourTwoText: {
    title: 'Privátní wellness',
    titleGold: 's útulnou atmosférou',
    desc: 'Pohodlí jsme podřídili všechno. V přízemí vily proto budujeme designové wellness centrum, kde můžete načerpat síly a užívat si soukromí. Čeká zde na vás finská sauna s parním nárazem, odpočinková část s výhledem do zeleně, whirpool vana pro dvě osoby a zážitková sprcha s relaxačními programy. Rezervaci si můžete udělat online a prostory si otevřít sami pomocí kódu, který vám zašleme.',
  },

  sectionImageOne: 'v1647000254/vilaRepublika/ap1/o01_lhqt6c.jpg',
  sectionImageTwo: 'v1645822962/vilaRepublika/SAUNA2-min_p65zfc.jpg',
  sectionCover: 'v1647000262/vilaRepublika/ap1/l07mensi_xywpsx.jpg',
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
      price: '4 390 000 Kč',
      number: '1',
      floor: '1NP',
      layout: '1 + kk',
      size: '30 m2',
      terasa: '30 m2',
      parking: '1',
      link: '',
      reserved: false,
    },
    {
      price: '4 690 000 Kč',
      number: '2',
      floor: '1NP',
      layout: '2 + kk',
      size: '34 m2',
      terasa: '50 m2',
      parking: '1',
      link: '',
      reserved: false,
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
