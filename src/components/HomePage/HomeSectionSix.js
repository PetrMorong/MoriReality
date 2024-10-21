import * as React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import { buildImageUrl } from 'cloudinary-build-url'

const data = [
  // {
  //   name: 'Apartmán 2+kk - 34 m²',
  //   location: 'Vila Republika, Velké Losiny',
  //   price: '3 790 000 Kč',
  //   image: 'v1676730941/VlDvojka/Screenshot_2023-02-18_at_15.12.19_py1arx.png',
  //   link: '/TODO',
  // },
  // {
  //   name: 'Apartmán 1+kk - 30 m²',
  //   location: 'Vila Republika, Velké Losiny',
  //   price: '3 390 000 Kč',
  //   image: 'v1676730936/VlDvojka/Screenshot_2023-02-18_at_15.12.33_ad4t03.png',
  //   link: '/TODO',
  // },
  {
    name: 'Apartmán 245/1 - 63 m²',
    location: 'Hrabenov, Ruda Nad Moravou',
    price: '2 390 000 kč',
    image: "v1710771830/hrabenov/ap1/DSC00316-HDR_v2rmjt.jpg",
    link: '/rezidence-hrabenov/ap-1',
  },
  // {
  //   name: "Apartmán 245/2 - 53 m²",
  //   location: "Hrabenov, Ruda Nad Moravou",
  //   price: "3 400 000 kč",
  //   image: "v1645865784/hrabenov/A_2.1.1_qm3upq.jpg",
  //   link: "/rezidence-hrabenov/ap-2",
  // },
  // {
  //   name: 'Apartmán 245/3 - 96 m²',
  //   location: 'Hrabenov, Ruda Nad Moravou',
  //   price: '3 990 000 kč',
  //   image: 'v1647260371/hrabenov/AP_C/7_he8vro.jpg',
  //   link: '/rezidence-hrabenov/ap-3',
  // },

  // velké losiny

  // {
  //   name: "Apartmán 354/6 - 58 m²",
  //   location: "Osvobození, Velké Losiny",
  //   price: "5 990 000 kč",
  //   image: "/images/vlAp6.png",
  // },
  // {
  //   name: "Apartmán 354/2 - 38 m²",
  //   location: "Osvobození, Velké Losiny",
  //   price: "3 990 000 kč",
  //   image: "/images/vlAp2.png",
  //   link: "/vila-republika/ap-2",
  // },
  {
    name: "Losinský Apartmán - 42 m²",
    location: "Vila Republika, Velké Losiny",
    price: "4 690 000 kč",
    image: "v1675799782/vilaRepublikaFoto/byt5/DSC08342-HDR_eqajrc.jpg",
    link: "/vila-republika/ap-5",
  },

  {
    name: "Apartmánový domek  - 70 m²",
    location: "Vila Republika, Velké Losiny",
    price: "5 990 000 kč",
    image: "v1689504195/vilaRepublikaFoto/356584285_1096124314696983_2263942071942825600_n_xv0nkq.jpg",
  },

  // {
  //   name: "Apartmán 354/1 -  52 m²",
  //   location: "Osvobození, Velké Losiny",
  //   price: "5 490 000 kč",
  //   image: "/images/velká ložnice 3.jpg",
  //   link: "/vila-republika/ap-1",
  // },
  // Malá Morava
  // {
  //   name: "Apartmán 39/1 - 72 m²",
  //   location: "Vlaské, Malá Morava",
  //   price: "4 490 000 kč",
  //   image: "v1656865885/malaMorava/2_1_cmqbzq.jpg",
  //   link: "/apartmany-mala-morava/ap-1",
  // },
  // {
  //   name: "Apartmán 39/2 - 60 m²",
  //   location: "Vlaské, Malá Morava",
  //   price: "3 990 000 kč",

  //   image: "v1656865840/malaMorava/02_2_nlgatf.jpg",
  //   link: "/apartmany-mala-morava/ap-2",
  // },
  // {
  //   name: "Apartmán 39/4 - 36 m²",
  //   location: "Vlaské, Malá Morava",
  //   price: "3 990 000 kč",
  //   image: "v1645822952/malaMorava/ap4/C_1-min_m48ufp.jpg",
  //   link: "/apartmany-mala-morava/ap-4",
  // },
  // {
  //   name: "Apartmán 39/3 - 36 m²",
  //   location: "Vlaské, Malá Morava",
  //   price: "2 990 000 kč",

  //   image: "v1656865740/malaMorava/04_kaq17y.jpg",
  //   link: "/apartmany-mala-morava/ap-5",
  // },
  // {
  //   name: "Apartmán 39/6 - 25 m²",
  //   location: "Vlaské, Malá Morava",
  //   price: "2 990 000 kč",
  //   image: "v1645822952/malaMorava/ap4/C_4-min_kcsxn0.jpg",
  //   link: "/apartmany-mala-morava/ap-6",
  // },
  // {
  //   name: "Apartmán 39/7 - 49 m²",
  //   location: "Vlaské, Malá Morava",
  //   price: "4 390 000 kč",
  //   image: "v1645822945/malaMorava/ap5/D_5-min_tasob8.jpg",
  //   link: "/apartmany-mala-morava/ap-7",
  // },

  // Rapotín
   {
    name: "Apartmán 267/1 - 35 m²",
    location: "Červený dvůr, Rapotín",
    price: "3 490 000 kč",
    image: "v1728209916/Rapotin/ap1/DSC02526-HDR_1_-min_qlyagu.jpg",
    link: "/cervenydvur/byt28_",
  },

  {
    name: "Apartmán 267/28 - 38 m²",
    location: "Červený dvůr, Rapotín",
    price: "3 000 000 kč",
    image: "v1720602999/Rapotin/ap32/01_rgntmh.jpg",
    link: "/cervenydvur/byt28_",
  },

  {
    name: "Apartmán 267/26 - 35 m²",
    location: "Červený dvůr, Rapotín",
    price: "2 790 000 kč",
    image: "v1720440333/Rapotin/ap26/01_if3vk1.jpg",
    link: "/cervenydvur/byt26_",
  },
]

const HomeSectionSix = () => {
  return (
    <Container>
      <Wrapper>
        <HeadlineRow>
          <Line></Line>
          <Headline>Nemovitosti na prodej</Headline>
          <Line></Line>
        </HeadlineRow>

        <Row>
          {data.map((item) => (
            <Col href={item.link}>
              <Image src={buildImageUrl(item.image, {})} />
              <Name>{item.name}</Name>
              <Location>{item.location}</Location>
              <Price>{item.price}</Price>
            </Col>
          ))}
        </Row>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 130px;

  @media (max-width: 1180px) {
    margin-bottom: 70px;
  }
`

const Wrapper = styled.div`
  width: 1180px;
  background: white;
  display: flex;
  flex-direction: column;

  @media (max-width: 1180px) {
    width: 100%;
  }
`

const HeadlineRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 130px;

  @media (max-width: 800px) {
    margin-bottom: 70px;
  }
`

const Line = styled.div`
  flex: 1;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 1px;
`

const Headline = styled.h4`
  font-family: Georama;
  font-size: 42px;
  line-height: 51px;
  color: #000000;
  margin: 0 56px;

  @media (max-width: 800px) {
    font-size: 30px;
    line-height: 41px;
    margin: 0 30px;
  }
`

const Col = styled.a`
  margin-bottom: 16px;
  cursor: pointer;
  transition: 200ms;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 1180px) {
    justify-content: center;
  }
`

const Image = styled.img`
  width: 380px;
  height: 250px;
  object-fit: cover;

  @media (max-width: 1180px) {
    width: 340px;
    height: 220px;
  }
`

const Name = styled.p`
  font-family: Georama;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #b29a84;
  font-weight: 600;
  margin-top: 4px;
`

const Location = styled.p`
  font-family: Georama;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.01em;
  color: rgba(0, 0, 0, 0.6);
`

const Price = styled.p`
  font-family: Georama;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: rgb(0, 0, 0);
`

export default HomeSectionSix
