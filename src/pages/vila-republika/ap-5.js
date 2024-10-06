import React from "react";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ApSectionOne from "../../components/ApartmentDetail/ApSectionOne";
import ApSectionTwo from "../../components/ApartmentDetail/ApSectionTwo";
import ApSectionThree from "../../components/ApartmentDetail/ApSectionThree";

const data = {
  sectionOneBg: "v1728205639/vilaRepublikaFoto/byt5/DSC00418-HDR-min_zaeazn.jpg",
  layoutImage: "v1645822937/vilaRepublika/ap5/layout4_ae2qhy.png",
  apName: "Losinský Apartmán",
  projectName: "Vila Republika",
  price: "4 490 000",
  backLink: "/vila-republika",
  sectionOneDetails: [
    {
      text: "2+",
      goldText: "kk",
      desc: "Dispozice",
    },
    {
      text: "42.4 ",
      goldText: "m2",
      desc: "Podlahová Plocha",
    },
    {
      text: "2 ",
      goldText: "NP",
      desc: "Umístění",
    },
    {
      text: "Východ",
      goldText: "",
      desc: "Orientace",
    },

    {
      text: "Velké ",
      goldText: "Losiny",
      desc: "Lokatita",
    },
  ],
  gallery: [

    'v1675799782/vilaRepublikaFoto/byt5/DSC08342-HDR_eqajrc.jpg',

    'v1675799774/vilaRepublikaFoto/byt5/DSC08390-HDR_fkz4zz.jpg',

    'v1675799779/vilaRepublikaFoto/byt5/DSC08405-HDR_xba91c.jpg',

    "v1728205639/vilaRepublikaFoto/byt5/DSC00418-HDR-min_zaeazn.jpg",

    "v1728205639/vilaRepublikaFoto/byt5/DSC00424-HDR-min_mkkwo3.jpg",

    "v1728205639/vilaRepublikaFoto/byt5/DSC00421-HDR-min_hisqo1.jpg",

    "v1675799776/vilaRepublikaFoto/byt5/DSC08354-HDR_liikg7.jpg",

    "v1675799777/vilaRepublikaFoto/byt5/DSC08351-HDR_dtdl2r.jpg",
    
    'v1689504133/vilaRepublikaFoto/IMG_1319-HDR-min_esxlxf.jpg',
    
    
      'v1689504129/vilaRepublikaFoto/IMG_1338-HDR-min_i68xc6.jpg',
    

  

    

 
      'v1689504130/vilaRepublikaFoto/IMG_1287-HDR-min_fjfc2b.jpg',
    

   
      'v1689504125/vilaRepublikaFoto/IMG_1280-HDR-min_zdbls5.jpg',
    

           'v1689504131/vilaRepublikaFoto/IMG_1349-HDR-min_d00shg.jpg',

    
       'v1689504131/vilaRepublikaFoto/IMG_1389-HDR-min_iycbno.jpg',

    

   'v1675799329/vilaRepublikaFoto/DSC08530-HDR_bw0gqc.jpg',
    

    'v1675799326/vilaRepublikaFoto/DSC08524-HDR_rx1gft.jpg',
    

    'v1680942535/vilaRepublikaFoto/SpolecenskaMistnost/DSC01924-HDR_zldqdu.jpg',
    

    'v1680942700/vilaRepublikaFoto/SpolecenskaMistnost/DSC01975-min_p2jh6q.jpg',
    

     'v1680942534/vilaRepublikaFoto/SpolecenskaMistnost/DSC01918-HDR_ltphob.jpg',
    

      'v1680942527/vilaRepublikaFoto/SpolecenskaMistnost/DSC01951-HDR_r9c6ro.jpg',
    

     'v1680942701/vilaRepublikaFoto/SpolecenskaMistnost/DSC01974-min_gpkq1v.jpg',
    

     'v1680942699/vilaRepublikaFoto/SpolecenskaMistnost/DSC01987-min_ljoda4.jpg',
    

  ],
  moreDetails: [
    {
      text: "07/2022",
      goldText: "",
      desc: "Datum Kolaudace",
    },
    {
      text: "",
      goldText: "7 ",
      desc: "apartmánů v domě",
    },
    {
      text: "Cihlová",
      goldText: "",
      desc: "Stavba",
    },
    {
      text: "",
      goldText: "Parkovací",
      desc: "místo v ceně",
    },
  ],
  table: [
    { label: "Stav", value: "Dostupný k rezervaci" },
    { label: "Číslo bytu", value: "354/5 " },
    { label: "Dispozice", value: "2+kk" },
    { label: "Podlaží", value: "1" },
    { label: "Podlahová plocha", value: "42.4 m2" },
    { label: "Orientace", value: "Východ" },
    { label: "Terasa", value: "-" },
    { label: "Dokončení", value: "07/2022" },
  ],
};

const MalaMoravaAp1Page = () => {
  return (
    <Layout>
      <Header />
      <ApSectionOne data={data} />
      <ApSectionTwo data={data} />
      <ApSectionThree data={data} />
      <Footer />
    </Layout>
  );
};

export default MalaMoravaAp1Page;
