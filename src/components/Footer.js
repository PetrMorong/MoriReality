import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 474px;
  background: url("images/footerBg.png");
  background-size: cover;
  margin-top: 130px;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 1180px;
  display: flex;
  padding-top: 122px;
  justify-content: space-between;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 170px;
  height: 37px;
  margin-bottom: 40px;
`;

const LogoText = styled.p`
  font-family: Georama;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #ffffff;
`;

const GoldText = styled.span`
  font-family: Georama;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #b29a84;
  cursor: pointer;
`;

const Title = styled.p`
  font-family: Georama;
  font-size: 21px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #b29a84;
  margin-bottom: 38px;
`;

const Link = styled.p`
  font-family: Georama;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-bottom: 12px;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Col style={{ width: 250 }}>
          <Logo src="images/logo.svg" />
          <LogoText>
            S důrazem na poctivé řemeslo, kvalitu, a trvalost pro vás stavíme
            bydlení, které budete moci rádi a hrdě nazývat svým domovem.
          </LogoText>
        </Col>

        <Col>
          <Title>Společnost</Title>
          <Link>Úvod</Link>
          <Link>O společnosti</Link>
          <Link>Naše projekty</Link>
          <Link>Kontakt</Link>
        </Col>

        <Col style={{ width: 140 }}>
          <Title>Kontakt</Title>
          <Link>+420 737 211 314</Link>
          <Link>info@mori-reality.cz</Link>
        </Col>

        <Col style={{ width: 250, alignItems: "flex-end" }}>
          <Title>Mori Investing s.r.o</Title>
          <LogoText style={{ textAlign: "right" }}>
            Osvobození 354,
            <br />
            Velké Losiny, 788 15
            <br />
            <br />
            Společnost zapsáná v OR Krajského soudu v Ostravě pod značkou
            <GoldText> C85923/KSOS.</GoldText>
          </LogoText>
        </Col>
      </Wrapper>
    </Container>
  );
};

export default Footer;
