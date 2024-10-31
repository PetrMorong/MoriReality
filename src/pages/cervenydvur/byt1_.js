import React from 'react'
import Layout from '../../components/layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ApSectionOne from '../../components/ApartmentDetail/ApSectionOne'
import ApSectionTwo from '../../components/ApartmentDetail/ApSectionTwo'
import ApSectionThree from '../../components/ApartmentDetail/ApSectionThree'

const data = {
  sectionOneBg: "v1728209915/Rapotin/ap1/DSC02532-HDR_1_-min_xvs5yj.jpg",
  // layoutImage: "v1705667282/Rapotin/apC/Screenshot_2024-01-19_at_13.25.33_gxqh5m.png",
  apName: 'Bytová jednotka č. 1',
  projectName: 'Resort Červený Dvůr',
  price: '3 290 000',
  backLink: '/cervenydvur',
  apTitle: 'Bytová jednotka č.1',
  apText: (
    <></>
  ),
  sectionOneDetails: [
    {
      text: '1+',
      goldText: 'kk',
      desc: 'Dispozice',
    },
    {
      text: '40,26',
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
    "v1728209916/Rapotin/ap1/DSC02526-HDR_1_-min_qlyagu.jpg",
    "v1728209915/Rapotin/ap1/DSC02532-HDR_1_-min_xvs5yj.jpg",
    "v1728209917/Rapotin/ap1/DSC02565-HDR_1_-min_wxsugy.jpg",
    "v1728209914/Rapotin/ap1/DSC02562-HDR_1_-min_fsrnlw.jpg",
    "v1728209917/Rapotin/ap1/DSC02546-HDR-2_1_-min_pxp4bu.jpg",
    "v1728209914/Rapotin/ap1/DSC02535-HDR_1_-min_qztjxi.jpg",
    "v1729505843/Rapotin/ap1/Screenshot_2024-10-21_at_11.56.54_dxtx3o.png",
    "v1723189892/Rapotin/karty/DSC02635_1_c1mvxg.jpg",
    "v1723189890/Rapotin/karty/DSC02684_1_b3zyup.jpg",
    "v1720684653/Rapotin/DSC08357-min_lmko87.jpg",
    "v1720684648/Rapotin/DSC08281-HDR-min_borxga.jpg",
    "v1720684646/Rapotin/DSC08260-HDR-min_vm5wno.jpg",
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
