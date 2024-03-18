import React from 'react'
import Layout from '../../components/layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ApSectionOne from '../../components/ApartmentDetail/ApSectionOne'
import ApSectionTwo from '../../components/ApartmentDetail/ApSectionTwo'
import ApSectionThree from '../../components/ApartmentDetail/ApSectionThree'

const data = {
  sectionOneBg: 'v1710771831/hrabenov/ap1/DSC00304-HDR_dgs33t.jpg',
  layoutImage: 'v1710771831/hrabenov/ap1/DSC00304-HDR_dgs33t.jpg',
  apName: 'Ap. 245/1',
  projectName: 'Rezidence Hrabenov',
  price: '2 900 000',
  backLink: '/rezidence-hrabenov',
  apTitle: 'Apartmán Zlatník',
  apText: (
    <>
      Utečte od starostí, vraťte se k přírodě. V malebné obci Ruda nad Moravou na Šumpersku jsme citlivě zrekonstruovali nemovitost <span>z 19. století.</span> Apartmány v sobě snoubí požadavky na komfortní bydlení nového tisíciletí, přitom si ale uchovávají genius loci původního architektonického díla.
      <br />
      <br />
      Zdejší nádherná lokalita je protkána turistickými trasami i cyklostezkami, v létě s možnostmi koupání a v zimě <span>lyžování</span> . V dosahu budete mít panenskou přírodu i veškeré služby. Užívat si přitom budete klidné prostředí vesničky zasazené v podhůří Jeseníků. Apartmány jsou vhodné jako investice i k trvalému bydlení.
      <br />
      <br />
      Vzdušný byt se dvěma ložnicemi a nadstandardní obytnou částí. Náleží k němu vlastní část{' '}
      <span>zahrady o velikosti 75 m2</span> se samostatným vchodem. V horním
      patře se nachází velký obývací prostor s kuchyní, první ložnice a
      prostorná koupelna. Po točitých schodech se dostanete do spodní části, kde
      je umístěna další ložnice pro klidné spaní, která svoji vlastní koupelnu.
      <br />
      <br />
    </>
  ),
  sectionOneDetails: [
    {
      text: '3+',
      goldText: 'kk',
      desc: 'Dispozice',
    },
    {
      text: '63 ',
      goldText: 'm2',
      desc: 'Podlahová Plocha',
    },
    {
      text: '2 ',
      goldText: 'NP',
      desc: 'Umístění',
    },
    {
      text: 'Jihozápad',
      goldText: '',
      desc: 'Orientace',
    },

    {
      text: '',
      goldText: 'Hrabenov',
      desc: 'Lokatita',
    },
  ],
  gallery: [
    "v1710771823/hrabenov/ap1/DSC00334-HDR_nysx7l.jpg",
    "v1710771818/hrabenov/ap1/DSC00340-HDR_pwiwbh.jpg",
    "v1710771815/hrabenov/ap1/DSC00331-HDR_zkx7nu.jpg",
    "v1710771831/hrabenov/ap1/DSC00304-HDR_dgs33t.jpg",
    "v1710771841/hrabenov/ap1/DSC00301-HDR_kh2kv7.jpg",
    "v1710771841/hrabenov/ap1/DSC00289-HDR_sbb18n.jpg",
    "v1710771846/hrabenov/ap1/DSC00292-HDR_gq7zxu.jpg",
    "v1710771850/hrabenov/ap1/DSC00277-HDR_e2xsx4.jpg",
    "v1710771818/hrabenov/ap1/DSC00280-HDR_mtxvcp.jpg",
    "v1710771850/hrabenov/ap1/DSC00286-HDR_oy9duv.jpg",
    "v1710771829/hrabenov/ap1/DSC00313-HDR_vea5ow.jpg",
    "v1710771830/hrabenov/ap1/DSC00316-HDR_v2rmjt.jpg",
    "v1710771823/hrabenov/ap1/DSC00328-HDR_c2pmzp.jpg",
    "v1710771823/hrabenov/ap1/DSC00322-HDR_gv1u6n.jpg",
    "v1710771855/hrabenov/ap1/DSC00349-HDR_gw39zw.jpg",
    "v1710771855/hrabenov/ap1/DSC00346-HDR_t6tmbm.jpg",
    "v1710771852/hrabenov/ap1/DSC00358-HDR_s78pfw.jpg",
    "v1646062245/hrabenov/ISO_cjeydz.jpg"
  ],
  moreDetails: [
    {
      text: '2024',
      goldText: '',
      desc: 'Datum Dokončení',
    },
    {
      text: '',
      goldText: '3 ',
      desc: 'jednotky v domě',
    },
    {
      text: 'Cihlová',
      goldText: '',
      desc: 'Stavba',
    },
    {
      text: '',
      goldText: 'Parkovací',
      desc: 'místo v ceně',
    },
  ],
  table: [
    { label: 'Stav', value: 'Dostupný' },
    { label: 'Číslo bytu', value: '245/1 ' },
    { label: 'Dispozice', value: '3+kk' },
    { label: 'Podlaží', value: '2' },
    { label: 'Podlahová plocha', value: '63m2' },
    { label: 'Orientace', value: 'Jihozápad' },
    { label: 'Zahrada', value: '70m2' },
    { label: 'Dokončení', value: '2024' },
  ],
}

const MalaMoravaAp1Page = () => {
  return (
    <Layout>
      <Header email="info@mori-reality.cz" phone="+420 737 211 314" />
      <ApSectionOne data={data} />
      <ApSectionTwo data={data} />
      <ApSectionThree data={data} />
      <Footer email="info@mori-reality.cz" phone="+420 737 211 314" />
    </Layout>
  )
}

export default MalaMoravaAp1Page
