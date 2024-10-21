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
  apName: 'Bytová jednotka č. 23',
  projectName: 'Resort Červený Dvůr',
  price: '3 590 000',
  backLink: '/cervenydvur',
  apTitle: 'Bytová jednotka č.23',
  apText: (
    <></>
  ),
  sectionOneDetails: [
    {
      text: '2+',
      goldText: 'kk',
      desc: 'Dispozice',
    },
    {
      text: '43 ',
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
    "v1716899890/Rapotin/karty/nove/cerveny_dvur_karta_B18_1_qo040y.png",
    "v1724661328/Rapotin/karty/CD_NP2_B23_pqjpnp.png"
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
