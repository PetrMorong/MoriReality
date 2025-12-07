// src/pages/sprava-apartmanu.js
import * as React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Layout from "../components/layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamSetion from "../components/SpravaApartmanu/TeamSetion";
import SetionOne from "../components/SpravaApartmanu/SetionOne";


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 140px 0 120px;

  @media (max-width: 1180px) {
    padding: 100px 25px 80px;
  }
`;

const Wrapper = styled.div`
  width: 1180px;

  @media (max-width: 1180px) {
    width: 100%;
  }
`;

const Hero = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 60px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Col = styled.div`
  flex: 1;
`;

const H1 = styled.h1`
  font-family: Georama;
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 10px;
`;

const H1Gold = styled.span`
  color: #b29a84;
`;

const Lead = styled.p`
  font-family: Georama;
  font-size: 20px;
  line-height: 32px;
  color: #4d4d56;
`;

const Tag = styled.div`
  font-family: Georama;
  font-size: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #b29a84;
  margin-bottom: 12px;
`;

const Section = styled.section`
  margin-top: 80px;
`;

const SectionTitle = styled.h2`
  font-family: Georama;
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border-radius: 18px;
  padding: 22px 24px;
  background: #faf6f1;
`;

const CardTitle = styled.div`
  font-family: Georama;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const CardText = styled.p`
  font-family: Georama;
  font-size: 16px;
  line-height: 26px;
  color: #4d4d56;
`;

const TwoCols = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const TeamCard = styled.div`
  text-align: left;
`;

const TeamPhoto = styled.div`
  width: 100%;
  padding-bottom: 110%;
  border-radius: 18px;
  background: #ddd; /* sem pak dáš background-image */
  margin-bottom: 14px;
`;

const TeamName = styled.div`
  font-family: Georama;
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const TeamRole = styled.div`
  font-family: Georama;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #b29a84;
  margin-bottom: 6px;
`;

const TeamDesc = styled.p`
  font-family: Georama;
  font-size: 15px;
  line-height: 24px;
  color: #4d4d56;
`;

const CTABox = styled.div`
  margin-top: 60px;
  padding: 26px 28px;
  border-radius: 20px;
  background: #111218;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CTAText = styled.div`
  font-family: Georama;
  font-size: 18px;
  line-height: 28px;
`;

const SpravaApartmanuPage = () => {
  return (
    <Layout>
        <Header email="info@mori-reality.cz" phone="601 502 889" />
        <SetionOne />

    <Container>
      <Wrapper>
        <Hero>
          <Col>
           
            <Lead>
              Postaráme se o váš apartmán od prezentace a rezervací přes úklid
              až po vyúčtování. Vy řešíte jen strategii a výnos – provoz necháte
              na nás.
            </Lead>
        
          </Col>
          <Col>
            <Card>
              <CardTitle>Co od nás získáte</CardTitle>
              <CardText>
                Lokální tým přímo v Jeseníkách, profesionální marketing, dva
                modely spolupráce (garantovaný nájem vs. skutečné náklady) a
                transparentní reporting. Jsme partner, ne jen „správce klíčů“.
              </CardText>
            </Card>
          </Col>
        </Hero>

        <Section>
          <SectionTitle>Pro koho je správa vhodná</SectionTitle>
          <Grid>
            <Card>
              <CardTitle>Pasivní investor</CardTitle>
              <CardText>
                Chcete mít jistotu pravidelného výnosu a minimum starostí.
                Vhodná pro vás bude varianta garantovaného nájmu.
              </CardText>
            </Card>
            <Card>
              <CardTitle>Majitel, co chce byt i užívat</CardTitle>
              <CardText>
                Část roku chcete jezdit sami, zbytek nechat vydělávat.
                Nastavíme kombinaci vlastního užívání a krátkodobého pronájmu.
              </CardText>
            </Card>
            <Card>
              <CardTitle>Máte už apartmán jinde</CardTitle>
              <CardText>
                Pokud máte nemovitost v Jeseníkách nebo okolí, můžeme převzít i
                její správu a sjednotit vám reporting a procesy.
              </CardText>
            </Card>
          </Grid>
        </Section>

        <Section>
          <SectionTitle>Modely spolupráce</SectionTitle>
          <TwoCols>
            <Card>
              <CardTitle>Garantovaný nájem</CardTitle>
              <CardText>
                Pevně sjednaný měsíční příjem po dobu 3 let s možností
                prodloužení. My hradíme provoz a staráme se o kompletní chod
                apartmánu. Vy máte jistotu výnosu bez ohledu na obsazenost.
              </CardText>
            </Card>
            <Card>
              <CardTitle>Skutečné náklady</CardTitle>
              <CardText>
                Platíte reálné náklady na energie a správu, zbytek je váš zisk.
                Vhodné, pokud chcete byt častěji využívat sami nebo počítáte s
                vyšším výnosem podle obsazenosti.
              </CardText>
            </Card>
          </TwoCols>
        </Section>

        <TeamSetion/>

        <CTABox>
          <CTAText>
            Zajímá vás, jak by konkrétně vycházel výnos vašeho apartmánu při
            správě přes Mori Reality s.r.o.? Připravíme vám jednoduchý model na
            míru.
          </CTAText>
          <Button>Chci nezávazný výpočet</Button>
        </CTABox>
      </Wrapper>
    </Container>
          <Footer email="info@mori-reality.cz" phone="601 502 889" />

    </Layout>
    
  );
};

export default SpravaApartmanuPage;
