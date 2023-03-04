import React from 'react'
import Layout from '../../components/layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ApSectionOne from '../../components/ApartmentDetail/ApSectionOne'
import ApSectionTwo from '../../components/ApartmentDetail/ApSectionTwo'
import ApSectionThree from '../../components/ApartmentDetail/ApSectionThree'

const data = {
  sectionOneBg:
    'v1677958456/VlDvojka/Screenshot_2023-03-04_at_20.23.47_fcpl7i.png',
  layoutImage:
    'v1677960911/VlDvojka/Screenshot_2023-03-04_at_21.14.53_tuvftg.png',
  apName: 'Apartmán 2',
  projectName: 'Vila Republika',
  price: '3 990 000',
  backLink: '/vila-republika-druha-etapa',
  sectionOneDetails: [
    {
      text: '2+',
      goldText: 'kk',
      desc: 'Dispozice',
    },
    {
      text: '34 ',
      goldText: 'm2',
      desc: 'Podlahová Plocha',
    },
    {
      text: '1 ',
      goldText: 'NP',
      desc: 'Umístění',
    },
    {
      text: 'Východ',
      goldText: '',
      desc: 'Orientace',
    },

    {
      text: 'Velké ',
      goldText: 'Losiny',
      desc: 'Lokatita',
    },
  ],
  gallery: [
    'v1677958461/VlDvojka/Screenshot_2023-03-04_at_20.24.17_jux09z.png',
    'v1677958456/VlDvojka/Screenshot_2023-03-04_at_20.23.47_fcpl7i.png',
    'v1677958460/VlDvojka/Screenshot_2023-03-04_at_20.23.26_dmqrwi.png',
    'v1677958468/VlDvojka/Screenshot_2023-03-04_at_20.20.13_wrouo4.png',
    'v1677958460/VlDvojka/Screenshot_2023-03-04_at_20.20.29_vq6zbc.png',
    'v1677958458/VlDvojka/Screenshot_2023-03-04_at_20.22.25_cb25nd.png',
    'v1677958459/VlDvojka/Screenshot_2023-03-04_at_20.23.09_b8jydl.png',
    'v1677958465/VlDvojka/Screenshot_2023-03-04_at_20.27.18_n2vnbe.png',
    'v1677958463/VlDvojka/Screenshot_2023-03-04_at_20.27.43_njonyu.png',
    'v1677958465/VlDvojka/Screenshot_2023-03-04_at_20.27.53_e90han.png',
    'v1677958471/VlDvojka/Screenshot_2023-03-04_at_20.27.31_neem5s.png',
  ],
  moreDetails: [
    {
      text: '12/2024',
      goldText: '',
      desc: 'Datum Kolaudace',
    },
    {
      text: '',
      goldText: '5 ',
      desc: 'apartmánů v domě',
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
    { label: 'Číslo bytu', value: '2 ' },
    { label: 'Dispozice', value: '2+kk' },
    { label: 'Podlaží', value: '1' },
    { label: 'Podlahová plocha', value: '34 m2' },
    { label: 'Orientace', value: 'Východ' },
    { label: 'Terasa', value: '50 m2' },
    { label: 'Dokončení', value: '12/2024' },
  ],
}

const VilaRepublikaDruhaEtapa2Page = () => {
  return (
    <Layout>
      <Header />
      <ApSectionOne data={data} />
      <ApSectionTwo data={data} />
      <ApSectionThree data={data} />
      <Footer />
    </Layout>
  )
}

export default VilaRepublikaDruhaEtapa2Page
