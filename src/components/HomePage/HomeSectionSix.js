import * as React from "react";
import styled from "styled-components";
import Button from "../Button";

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

const Col = styled.div`
  margin-bottom: 16px;
  cursor: pointer;
  transition: 200ms;

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

const data = [
  {
    name: "Apartmán 128 m²",
    location: "Osvobození, Velké Losiny",
    price: "8 890 000 kč",
    image: "/images/vlAp7.jpg",
  },

  {
    name: "Apartmán 58 m²",
    location: "Osvobození, Velké Losiny",
    price: "5 990 000 kč",
    image: "/images/vlAp6.png",
  },
  {
    name: "Apartmán 38 m²",
    location: "Osvobození, Velké Losiny",
    price: "3 990 000 kč",
    image: "/images/vlAp2.png",
  },
  {
    name: "Apartmán 42 m²",
    location: "Osvobození, Velké Losiny",
    price: "4 990 000 kč",
    image: "/images/vlAp5.png",
  },
  {
    name: "Apartmán 52 m²",
    location: "Osvobození, Velké Losiny",
    price: "5 490 000 kč",
    image: "/images/velká ložnice 3.jpg",
  },

  {
    name: "Apartmán 72 m²",
    location: "Vlaské, Malá Morava",
    price: "3 990 000 kč",
    image: "/images/malaMorava/ap1/A_3-min.jpg",
  },
  {
    name: "Apartmán 86 m²",
    location: "Vlaské, Malá Morava",
    price: "5 990 000 kč",
    image: "/images/malaMorava/ap5/D_2-min.jpg",
  },
  {
    name: "Apartmán 100 m²",
    location: "Vlaské, Malá Morava",
    price: "4 990 000 kč",
    image: "/images/malalMorava/apDva/B_4-min.jpg",
  },
  {
    name: "Apartmán 73 m²",
    location: "Vlaské, Malá Morava",
    price: "3 990 000 kč",
    image: "/images/malaMorava/ap4/C_1-min.jpg",
  },

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
            <Col>
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

export default HomeSectionSix;
