import * as React from "react";
import styled from "styled-components";
import { buildImageUrl } from "cloudinary-build-url";

const Container = styled.div`
  width: 100%;
  height: 474px;
  background: ${`url(${buildImageUrl("v1645822938/footerBg_kh5r7e.png", {})})`};
  background-size: cover;
  margin-top: 130px;
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    margin-top: 0px;
    height: auto;
    padding-top: 70px;
    padding-bottom: 30px;
  }
`;

const Wrapper = styled.div`
  width: 1180px;
  display: flex;
  padding-top: 122px;
  justify-content: space-between;

  @media (max-width: 1180px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
    padding: 0 40px;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    align-items: flex-start !important;
  }
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

  @media (max-width: 800px) {
    text-align: left !important;
  }
`;

const GoldText = styled.a`
  font-family: Georama;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #b29a84;
  cursor: pointer;
  text-decoration: none;
`;

const Title = styled.p`
  font-family: Georama;
  font-size: 21px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #b29a84;
  margin-bottom: 38px;

  @media (max-width: 800px) {
    margin-bottom: 20px;
  }
`;

const Link = styled.a`
  font-family: Georama;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-bottom: 12px;
  text-decoration: none;
  cursor: pointer;
  transformation: 200ms;

  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Col style={{ width: 250 }}>
          <Logo src="/images/logo.svg" />
          <LogoText>
            S důrazem na poctivé řemeslo, kvalitu a trvalé hodnoty stavíme
            bydlení, které budete rádi a s hrdostí nazývat domovem.
          </LogoText>
        </Col>

        <Col>
          <Title>Společnost</Title>
          <Link href="/#o-nas">O společnosti</Link>
          <Link href="/#projekty">Naše projekty</Link>
          <Link href="mailto:info@mori-reality.cz">Kontakt</Link>
        </Col>

        <Col style={{ width: 140 }}>
          <Title>Kontakt</Title>
          <Link href="tel:+420 737 211 314">+420 737 211 314</Link>
          <Link href="mailto:info@mori-reality.cz">info@mori-reality.cz</Link>
          <Link href="https://www.facebook.com/morireality" target="_blank">
            <img
              src="/images/facebook.png"
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
            Facebook
          </Link>
          <Link href="https://www.instagram.com/morireality/" target="_blank">
            <img
              src="/images/instagram.png"
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
            Instagram
          </Link>
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
            <GoldText href="https://or.justice.cz/ias/ui/rejstrik-firma.vysledky?subjektId=1092365">
              {" "}
              C85923/KSOS.
            </GoldText>
          </LogoText>
        </Col>
      </Wrapper>
    </Container>
  );
};

export default Footer;
