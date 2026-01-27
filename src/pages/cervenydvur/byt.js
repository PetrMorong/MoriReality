// @ts-check
import React from 'react'
import { useLocation } from '@reach/router'
import Layout from '../../components/layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ApSectionOne from '../../components/ApartmentDetail/ApSectionOne'
import ApSectionTwo from '../../components/ApartmentDetail/ApSectionTwo'
import dataProjektu from "../../utils/dataProjektuCervenyDvur"
import ApSectionFour from '../../components/ApartmentDetail/ApSectionFour'

const useApartmentFromUrl = () => {
  const location = useLocation()

  // když jsme na serveru při buildu
  if (typeof window === 'undefined' || !location) {
    return null
  }

  const pathname = location.pathname || ''
  const search = location.search || ''


  let idFromUrl = null

  // ?id=31
  if (search) {
    const params = new URLSearchParams(search)
    idFromUrl = params.get('Id')
  }

  if (!idFromUrl) return null


  // najít byt v JSONu – podle čísla
  const ap = dataProjektu.apartments.find(
    (item) => item.number === `Byt č.${idFromUrl}` || item.number === `Byt č. ${idFromUrl}`
  )

  return ap || null
}

const mapApartmentToData = (/** @type any */ apartment) => {
  // rozpad velikosti "55,63 m2" → "55,63"
  const sizeValue = apartment.size ? apartment.size.split(' ')[0] : ''
  const layoutText = apartment.layout || '' // např. "2kk"
  const dispoText = layoutText.replace('kk', '') // "2"
  const dispoGold = layoutText.includes('kk') ? 'kk' : ''

  const floorValue = apartment.floor ? apartment.floor.replace('NP', '') : ''

  return {
    sectionOneBg: apartment.sectionOneBg,
    apName: apartment.number,
    projectName: 'Resort Červený Dvůr',
    price: apartment.price, // např. "3 900 000 Kč"
    backLink: '/cervenydvur',
    apTitle: apartment.number,
    category: apartment.category || "",      
    layout: apartment.layout || "",
    standardsPdfUrl: apartment.standardy || "/download/standardy-a-vybaveni.pdf",       
    sizeValue,                            
    floorValue,                            
    apText: <></>,
    sectionOneDetails: [
      {
        text: dispoText,
        goldText: dispoGold,
        desc: 'Dispozice',
      },
      {
        text: sizeValue,
        goldText: 'm2',
        desc: 'Podlahová plocha',
      },
      {
        text: floorValue,
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
    gallery: apartment.gallery,
    moreDetails: [
      {
        text: apartment.priceVynos || '',
        goldText: '',
        desc: 'Garantovaný nájem / měsíc',
      },
      {
        text: apartment.vynos || '',
        goldText: '',
        desc: 'Roční výnos',
      },
      {
        text: apartment.parking || '',
        goldText: '',
        desc: 'Parkovací místo',
      },
      {
        text: apartment.terasa || '',
        goldText: '',
        desc: 'Terasa',
      },
    ],
  }
}

const CervenyDvurDetail = () => {
  const apartment = useApartmentFromUrl()
    
  // loading / not found řešení
  if (typeof window !== 'undefined' && !apartment) {
    return (
      <Layout>
        <Header email="info@mori-reality.cz" phone="+420 775 561 091" />
        <main className="ap-detail-not-found">
          <p>Byt nebyl nalezen. Zkontrolujte prosím URL.</p>
        </main>
        <Footer email="info@mori-reality.cz" phone="+420 775 561 091" />
      </Layout>
    )
  }

  // při buildu (SSR) – bez location ještě nic nerenderujeme
  if (!apartment) {
    return null
  }

  const data = mapApartmentToData(apartment)

  return (
    <Layout>
      <Header email="info@mori-reality.cz" phone="+420 775 561 091" />
      <ApSectionOne data={data} />
      <ApSectionTwo data={data} />
      {/* <ApSectionThree data={data} /> */}
      {/* <ApSectionFour data={data} />*/}
      <Footer email="info@mori-reality.cz" phone="+420 775 561 091" />
    </Layout>
  )
}

export default CervenyDvurDetail