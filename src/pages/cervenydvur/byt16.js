import React from 'react'
import Layout from '../../components/layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ApSectionOne from '../../components/ApartmentDetail/ApSectionOne'
import ApSectionTwo from '../../components/ApartmentDetail/ApSectionTwo'
import ApSectionThree from '../../components/ApartmentDetail/ApSectionThree'

const data = {
  sectionOneBg: "v1705667282/Rapotin/apC/Screenshot_2024-01-19_at_13.25.33_gxqh5m.png",
  layoutImage: "v1705667282/Rapotin/apC/Screenshot_2024-01-19_at_13.25.33_gxqh5m.png",
  apName: 'Bytová jednotka č. 16',
  projectName: 'Rezidence Červený Dvůr',
  price: '3 490 000',
  backLink: '/cervenydvur',
  apTitle: 'Bytová jednotka č.16',
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
      text: '69 ',
      goldText: 'm2',
      desc: 'Podlahová Plocha',
    },
    {
      text: '1 ',
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
    'v1707302621/Rapotin/karty/cerveny_dvur_karta_B161NP_d12wez.jpg',
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