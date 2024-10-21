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
  apName: 'Bytová jednotka č. 32',
  projectName: 'Rezidence Červený Dvůr',
  // price: '5 790 000',
  backLink: '/cervenydvur',
  apTitle: 'Bytová jednotka č.32',
  apText: (
    <></>
  ),
  sectionOneDetails: [
    {
      text: '4+',
      goldText: '1',
      desc: 'Dispozice',
    },
    {
      text: '87,16 ',
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
    "v1720602999/Rapotin/ap32/01_rgntmh.jpg",
    "v1720602996/Rapotin/ap32/02_trnovx.jpg",
    "v1720603001/Rapotin/ap32/03_sxa9pm.jpg",
    "v1720603000/Rapotin/ap32/04_hqzhfb.jpg",
    "v1720602993/Rapotin/ap32/05_e2leq2.jpg",
    "v1720602993/Rapotin/ap32/07_bxjfvn.jpg",
    "v1720602999/Rapotin/ap32/06_q3xjr0.jpg",
    "v1720602649/Rapotin/karty/32_yclevc.png",
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
      <Header email="info@mori-reality.cz" phone="+420 775 561 091" />
      <ApSectionOne data={data} />
      <ApSectionTwo data={data} />
      {/* <ApSectionThree data={data} /> */}
      <Footer email="info@mori-reality.cz" phone="+420 775 561 091" />
    </Layout>
  )
}

export default CervenyDvurDetail
