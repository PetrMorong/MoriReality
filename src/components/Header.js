import * as React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const Wrapper = styled.div`
  width: 1180px;
  height: 90px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);

  @media (max-width: 1180px) {
    width: 100%;
    padding: 0 20px;
    height: 80px;
    border-bottom: none;
  }
`;

const Logo = styled.img`
  width: 170px;
  height: 37px;
  margin-right: 42px;
  cursor: pointer;

  @media (max-width: 800px) {
    width: 145px;
    height: 32px;
  }
`;

const Desktop = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 800px) {
    display: none;
  }
`;

const Link = styled.a`
  font-family: Georama;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.03em;
  color: #ffffff;
  margin-right: 42px;
  cursor: pointer;
  transition: 200ms;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

const Header = () => {
  const renderLinks = () => {
    return (
      <>
        <Link href="/#o-nas">O nás</Link>

        <Link href="/#projekty">Projekty</Link>

        <Link href="mailto:info@mori-reality.cz">Kontakt</Link>

        <div style={{ flex: 1 }} />
        <Link href="tel:+420 737 211 314">+420 737 211 314</Link>
        <a
          href="mailto:info@mori-reality.cz"
          style={{ textDecoration: "none" }}
        >
          <Button>Kontaktovat</Button>
        </a>
      </>
    );
  };
  return (
    <Container>
      <Wrapper>
        <a href="/">
          <Logo src="/images/logo.svg" />
        </a>
        <Desktop>{renderLinks()}</Desktop>
      </Wrapper>
    </Container>
  );
};

export default Header;
