import React from 'react'
import Layout from '../../components/layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ApSectionOne from '../../components/ApartmentDetail/ApSectionOne'
import ApSectionTwo from '../../components/ApartmentDetail/ApSectionTwo'
import ApSectionThree from '../../components/ApartmentDetail/ApSectionThree'

const data = {
  sectionOneBg: "v1720602996/Rapotin/ap32/02_trnovx.jpg",

  // layoutImage: "v1705667282/Rapotin/apC/Screenshot_2024-01-19_at_13.25.33_gxqh5m.png",
  apName: 'Bytová jednotka č.26',
  projectName: 'Rezidence Červený Dvůr',
  // price: '3 590 000',
  backLink: '/cervenydvur',
  apTitle: 'Bytová jednotka č.26',
  apText: (
    <></>
  ),
  sectionOneDetails: [
    {
      text: '3+',
      goldText: 'kk',
      desc: 'Dispozice',
    },
    {
      text: '31,62 ',
      goldText: 'm2',
      desc: 'Podlahová Plocha',
    },
    {
      text: '2 ',
      goldText: 'NP',
      desc: 'Umístění',
    },
    {
      text: '',
      goldText: 'Červený',
      desc: 'Dvůr',
    },

    {
      text: '',
      goldText: 'Rapotín',
      desc: 'Okres Šumperk',
    },
  ],
  gallery: [
    "v1720440333/Rapotin/ap26/01_if3vk1.jpg",
    'v1717406553/Rapotin/karty/cerveny_dvur_karta_B26_nezarizeny_cibmde.jpg',
    "v1720440321/Rapotin/ap26/02_riboo7.jpg",
    "v1720441578/Rapotin/ap26/03_yzsfur.jpg",
    "v1720440216/Rapotin/ap26/04_ilyvz5.jpg",
    "v1720440323/Rapotin/ap26/05_ib7k0m.jpg",
    "v1720440361/Rapotin/ap26/06_myfzct.jpg",
    "v1720440308/Rapotin/ap26/07_kj7eit.jpg",
    "v1720440246/Rapotin/ap26/08_rhwwc9.jpg",
    "v1720440355/Rapotin/ap26/09_fpwmjs.jpg",
  ],
  moreDetails: [
    {
      text: '',
      goldText: '',
      desc: '',
    },
    {
      text: '',
      goldText: ' ',
      desc: '',
    },
    {
      text: '',
      goldText: '',
      desc: '',
    },
    {
      text: '',
      goldText: '',
      desc: '',
    },
  ],

}

const CervenyDvurDetail = () => {
  return (
    <Layout>
      <Header email="info@mori-reality.cz" phone="+420 737 211 314" />
      <ApSectionOne data={data} />
      <ApSectionTwo data={data} />
      {/* <ApSectionThree data={data} /> */}
      <Footer email="info@mori-reality.cz" phone="+420 737 211 314" />
    </Layout>
  )
}

export default CervenyDvurDetail
