import React from 'react'
import Layout from '../../components/layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ApSectionOne from '../../components/ApartmentDetail/ApSectionOne'
import ApSectionTwo from '../../components/ApartmentDetail/ApSectionTwo'
import ApSectionThree from '../../components/ApartmentDetail/ApSectionThree'

const data = {
  sectionOneBg: 'v1710771831/hrabenov/ap1/DSC00304-HDR_dgs33t.jpg',
  layoutImage: 'v1646638993/hrabenov/apA/Untitled_9_z1vzyk.png',
  apName: 'Ap. 245/1',
  projectName: 'Apartmány Hrabenov',
  price: '2 390 000',
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
V horním patře se nachází velký obývací prostor s kuchyní, první ložnice a prostorná koupelna. Po točitých schodech se dostanete do spodní části, kde je umístěna další ložnice pro klidné spaní, která má přes chodbu i svoji vlastní koupelnu.

<br />
      <br />

Na společné terase můžete posedět, vypít si ránno kávu nebo grilovat večer s přáteli. Bude zde také brzy vybudována sdílená wellness zona sauna pro 6 osob a ochlazovací káď.

<br />
      <br />

K bytu také náleží sklep, parkovací místo a zahrádka ve svahu o výměře 207m2 s parc. č. 647/9. Na zahradě je možné po zbudování opěrné zídky udělat bazén a další privátní posezení.

 
<br />
      <br />
Vytápění je elektrickým podlahovým topením. Dům je napojen na obecní vodovod a kanalizaci.

<br />
      <br />

Nábytek na fotografiích není součástí prodeje bytu. Prohlídky jsou možné ve čtvrtek a v pátek.



     
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
    "v1724488767/hrabenov/DSC03066-HDR-min_ekphad.jpg",
    "v1724488769/hrabenov/DSC03058-HDR-min_lzi4cg.jpg",
    "v1724488771/hrabenov/DSC03072-HDR-min_j4ilcy.jpg",
    "v1724488767/hrabenov/DSC03079-min_qdvqtf.jpg",
    "v1724488766/hrabenov/DSC03087-min_kzsxtq.jpg",
    "v1724488767/hrabenov/DSC03080-min_ucn7co.jpg",
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
    "v1646062245/hrabenov/ISO_cjeydz.jpg",
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
    { label: 'Zahrada', value: '207m2' },
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
