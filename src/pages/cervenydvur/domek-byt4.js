import React from 'react'
import Layout from '../../components/layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ApSectionOne from '../../components/ApartmentDetail/ApSectionOne'
import ApSectionTwo from '../../components/ApartmentDetail/ApSectionTwo'

const data = {
  sectionOneBg: "v1717405262/Rapotin/domecek/01_dbdztk.jpg",
  apName: 'Domek byt č.4',
  projectName: 'Resort Červený Dvůr',
  backLink: '/cervenydvur',
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
      text: '50,2 ',
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
    "v1717232444/Rapotin/domecek/Screenshot_2024-06-01_at_11.00.30_rxz1bj.png",
    "v1717232231/Rapotin/domecek/VIZ2_1_yon8dt.jpg",
    "v1717230215/Rapotin/domecek/04_puzl0f.jpg",
    "v1717230213/Rapotin/domecek/02_a3chq7.jpg",
    "v1717230211/Rapotin/domecek/03_jbc2qm.jpg",
    "v1717230207/Rapotin/domecek/01_wyfeb7.jpg",
    "v1717230108/Rapotin/domecek/07_byy4ll.jpg",
    "v1717230101/Rapotin/domecek/06_nhfruy.jpg",
    "v1717230100/Rapotin/domecek/05_luo7vx.jpg",
    "v1717232997/Rapotin/domecek/08_1_jyjyur.jpg",
    "v1717232993/Rapotin/domecek/09_1_zge1kp.jpg",
    "v1717232992/Rapotin/domecek/10_1_rpjley.jpg"
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
