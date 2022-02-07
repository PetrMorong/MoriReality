import * as React from "react";
import styled from "styled-components";
import Button from "../Button";

const data = [
  // velké losiny
  {
    name: "Apartmán 354/7 - 128 m²",
    location: "Osvobození, Velké Losiny",
    price: "8 890 000 kč",
    image: "/images/vlAp7.jpg",
  },
  {
    name: "Apartmán 354/6 - 58 m²",
    location: "Osvobození, Velké Losiny",
    price: "5 990 000 kč",
    image: "/images/vlAp6.png",
  },
  {
    name: "Apartmán 354/2 - 38 m²",
    location: "Osvobození, Velké Losiny",
    price: "3 990 000 kč",
    image: "/images/vlAp2.png",
    link: "/vila-republika/ap-2",
  },
  {
    name: "Apartmán 354/5 - 42 m²",
    location: "Osvobození, Velké Losiny",
    price: "4 990 000 kč",
    image: "/images/vlAp5.png",
    link: "/vila-republika/ap-5",
  },
  {
    name: "Apartmán 354/1 -  52 m²",
    location: "Osvobození, Velké Losiny",
    price: "5 490 000 kč",
    image: "/images/velká ložnice 3.jpg",
    link: "/vila-republika/ap-1",
  },
  // Malá Morava
  {
    name: "Apartmán 39/1 - 72 m²",
    location: "Vlaské, Malá Morava",
    price: "5 790 000 kč",
    image: "/images/malaMorava/ap1/A_3-min.jpg",
    link: "/apartmany-mala-morava/ap-1",
  },
  {
    name: "Apartmán 39/2 - 61 m²",
    location: "Vlaské, Malá Morava",
    price: "5 290 000 kč",
    image: "/images/malaMorava/apDva/B_4-min.jpg",
    link: "/apartmany-mala-morava/ap-2",
  },
  {
    name: "Apartmán 39/4 - 36 m²",
    location: "Vlaské, Malá Morava",
    price: "3 990 000 kč",
    image: "/images/malaMorava/ap4/C_1-min.jpg",
    link: "/apartmany-mala-morava/ap-4",
  },
  {
    name: "Apartmán 39/5 - 50 m²",
    location: "Vlaské, Malá Morava",
    price: "4 490 000 kč",
    image: "/images/malaMorava/ap5/D_2-min.jpg",
    link: "/apartmany-mala-morava/ap-5",
  },
  {
    name: "Apartmán 39/6 - 25 m²",
    location: "Vlaské, Malá Morava",
    price: "2 990 000 kč",
    image: "/images/malaMorava/ap4/C_4-min.jpg",
    link: "/apartmany-mala-morava/ap-6",
  },
  {
    name: "Apartmán 39/7 - 49 m²",
    location: "Vlaské, Malá Morava",
    price: "4 390 000 kč",
    image: "/images/malaMorava/ap5/D_5-min.jpg",
    link: "/apartmany-mala-morava/ap-7",
  },
  // Hrabenov
  {
    name: "Byt 56 m²",
    location: "Hrabenov, Ruda Nad Moravou",
    price: "1 790 000 kč",
    image: "/images/Hrabenov3.jpeg",
  },
  {
    name: "Byt 70 m²",
    location: "Hrabenov, Ruda Nad Moravou",
    price: "1 990 000 kč",
    image: "/images/Hrabenov2.jpeg",
  },
  {
    name: "Byt 96 m²",
    location: "Hrabenov, Ruda Nad Moravou",
    price: "2 390 000 kč",
    image: "/images/Hrabenov1.png",
  },
];

const HomeSectionSix = () => {
  return (
    <Container>
      <Wrapper>
        <HeadlineRow>
          <Line></Line>
          <Headline>Nemovisti na prodej</Headline>
          <Line></Line>
        </HeadlineRow>

        <Row>
          {data.map((item) => (
            <Col href={item.link}>
              <Image src={item.image} />
              <Name>{item.name}</Name>
              <Location>{item.location}</Location>
              <Price>{item.price}</Price>
            </Col>
          ))}
        </Row>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 130px;

  @media (max-width: 1180px) {
    margin-bottom: 70px;
  }
`;

const Wrapper = styled.div`
  width: 1180px;
  background: white;
  display: flex;
  flex-direction: column;

  @media (max-width: 1180px) {
    width: 100%;
  }
`;

const HeadlineRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 130px;

  @media (max-width: 800px) {
    margin-bottom: 70px;
  }
`;

const Line = styled.div`
  flex: 1;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 1px;
`;

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
`;

const Col = styled.a`
  margin-bottom: 16px;
  cursor: pointer;
  transition: 200ms;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 1180px) {
    justify-content: center;
  }
`;

const Image = styled.img`
  width: 380px;
  height: 250px;
  object-fit: cover;

  @media (max-width: 1180px) {
    width: 340px;
    height: 220px;
  }
`;

const Name = styled.p`
  font-family: Georama;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #b29a84;
  font-weight: 600;
  margin-top: 4px;
`;

const Location = styled.p`
  font-family: Georama;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.01em;
  color: rgba(0, 0, 0, 0.6);
`;

const Price = styled.p`
  font-family: Georama;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: rgb(0, 0, 0);
`;

export default HomeSectionSix;
