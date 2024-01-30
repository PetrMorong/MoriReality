import React from 'react'
import Layout from '../../components/layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ApSectionOne from '../../components/ApartmentDetail/ApSectionOne'
import ApSectionTwo from '../../components/ApartmentDetail/ApSectionTwo'
import ApSectionThree from '../../components/ApartmentDetail/ApSectionThree'

const data = {
  sectionOneBg: 'v1647260373/hrabenov/AP_C/1_d7bkqe.jpg',
  layoutImage: 'v1647260361/hrabenov/AP_C/13_fjxxrl.jpg',
  apName: 'Ap. 245/3',
  projectName: 'Rezidence Hrabenov',
  price: '1 290 000',
  backLink: '/rezidence-hrabenov',
  apTitle: 'Apartmán Blýskač',
  apText: (
    <>
      Nadčasový podkrovní apartmán s velice útulnou atmosférou pro náročné.
      Největší z <span>nabízených v rezidenci Hrabenov</span>. Jeho dominantou
      je prosluněný obývací prostor s kuchyňskou, jídelní a odpočinkovou částí.
      Na patře jsou dále dvě ložnice, koupelna se sprchovým koutem a prostorná
      vstupní hala. Vhodný ke krátkodobým pronájmům i k trvalému bydlení.
      K apartmánu náleží zahrada se samostatným vstupem o velikosti 70 m2.
      <br />
      <br />
      V ceně prodeje apartmánu je <span>parkovací stání a sklep.</span> Dále
      kompletně zařízená kuchyňská linka včetně elektrospotřebičů, podlahy,
      obklady, dlažby i sanita. Za příplatek vám také rádi vybavíme apartmán{' '}
      <span>kompletně dle návrhu interiérového designéra</span>, od nábytku
      a doplňků až k nádobí či příborům.
    </>
  ),
  sectionOneDetails: [
    {
      text: '3+',
      goldText: '1',
      desc: 'Dispozice',
    },
    {
      text: '109 ',
      goldText: 'm2',
      desc: 'Podlahová Plocha',
    },
    {
      text: '3 ',
      goldText: 'NP',
      desc: 'Umístění',
    },
    {
      text: 'Východ',
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
    'v1647260371/hrabenov/AP_C/7_he8vro.jpg',
    'v1647260373/hrabenov/AP_C/8_u9gioy.jpg',
    'v1647260373/hrabenov/AP_C/1_d7bkqe.jpg',
    'v1647260370/hrabenov/AP_C/2_vxaaxp.jpg',
    'v1647260362/hrabenov/AP_C/4_yggi8f.jpg',
    'v1647260369/hrabenov/AP_C/3_pjtuia.jpg',
    'v1647260366/hrabenov/AP_C/10_qw8y7o.jpg',
    'v1647260365/hrabenov/AP_C/9_ucw8w0.jpg',
    'v1647260366/hrabenov/AP_C/5_jkjtzw.jpg',
    'v1647260366/hrabenov/AP_C/6_kf01af.jpg',
    'v1647260364/hrabenov/AP_C/11_fnuda1.jpg',
    'v1647260375/hrabenov/AP_C/12_z2tmcp.jpg',
  ],
  moreDetails: [
    {
      text: '2023',
      goldText: '',
      desc: 'Datum Dokončení',
    },
    {
      text: '',
      goldText: '3 ',
      desc: 'apartmány v domě',
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
    { label: 'Stav', value: 'Dostupný k rezervaci' },
    { label: 'Číslo bytu', value: '245/3' },
    { label: 'Dispozice', value: '3+kk' },
    { label: 'Podlaží', value: '3' },
    { label: 'Podlahová plocha', value: '109m2' },
    { label: 'Orientace', value: 'Východ' },
    { label: 'Zahrada', value: '75m2' },
    { label: 'Dokončení', value: '2023' },
  ],
}

const MalaMoravaAp3Page = () => {
  return (
    <Layout>
      <Header email="dominik.lokoc@homeportal.cz" phone="+420 602 732 879" />
      <ApSectionOne data={data} />
      <ApSectionTwo data={data} />
      <ApSectionThree data={data} />
      <Footer email="dominik.lokoc@homeportal.cz" phone="+420 602 732 879" />
    </Layout>
  )
}

export default MalaMoravaAp3Page
