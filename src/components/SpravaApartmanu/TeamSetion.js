// src/components/TeamSection.js
import * as React from "react";
import styled from "styled-components";
import Button from "../Button";

const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 80px 0 100px;

  @media (max-width: 1180px) {
    padding: 60px 25px 80px;
  }
`;

const Wrapper = styled.div`
  width: 1180px;

  @media (max-width: 1180px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-family: Georama;
  font-size: 32px;
  line-height: 40px;
  color: #000;
  margin-bottom: 10px;

  @media (max-width: 565px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const Subtitle = styled.p`
  font-family: Georama;
  font-size: 18px;
  line-height: 28px;
  color: #4d4d56;
  margin-bottom: 32px;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 1000px) {
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
  padding-bottom: 115%;
  border-radius: 18px;
  background: #e4ded5;
  background-image: ${({ photo }) => (photo ? `url(${photo})` : "none")};
  background-size: cover;
  background-position: center;
  margin-bottom: 14px;
`;

const TeamName = styled.div`
  font-family: Georama;
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #000;
`;

const TeamRole = styled.div`
  font-family: Georama;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #b29a84;
  margin-bottom: 6px;
`;

const TeamDesc = styled.p`
  font-family: Georama;
  font-size: 15px;
  line-height: 24px;
  color: #4d4d56;
  margin: 0;
`;

const Externals = styled.div`
  margin-top: 40px;
  padding: 22px 24px;
  border-radius: 18px;
  background: #faf6f1;
  font-family: Georama;
  font-size: 15px;
  line-height: 24px;
  color: #4d4d56;
`;

const Strong = styled.span`
  font-weight: 600;
  color: #b29a84;
`;

const CTABox = styled.div`
  margin-top: 40px;
  padding: 24px 26px;
  border-radius: 20px;
  background: #111218;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CTAText = styled.p`
  font-family: Georama;
  font-size: 17px;
  line-height: 26px;
  margin: 0;
`;

const TeamSection = () => {
  const team = [
    {
      name: "Petr Morong ml.",
      role: "Zakladatel & strategie / asset management",
      desc: "Stojí za vizí Mori Reality a rozvojem portfolia. Řídí investiční strategii a nastavuje koncepci správy apartmánů po ekonomické i provozní stránce.",
      photo: "", // sem můžeš doplnit URL fotky
    },
    {
      name: "Markéta Dvořáková",
      role: "Prodej & zákaznická péče",
      desc: "Zajišťuje prodej apartmánů a komunikaci s majiteli. Provází investory od výběru jednotky až po její uvedení do provozu.",
      photo: "",
    },
    {
      name: "Helena Morongová",
      role: "Provoz & správa na místě",
      desc: "Žije přímo v Jeseníkách a stará se o každodenní chod resortů – předání apartmánů, kontrolu úklidu i operativní komunikaci s hosty.",
      photo: "",
    },
    {
      name: "Andrea Kuttlerová",
      role: "Provoz, hotelové zkušenosti",
      desc: "Přináší zkušenosti z hotelu Kolštejn a provozu vlastní kavárny. Dbá na kvalitu služeb a standardy pohostinství, které stojí za dobrými recenzemi.",
      photo: "",
    },
    {
      name: "Pavel Souček",
      role: "Provoz & guest experience",
      desc: "Má zkušenosti z hotelové sítě Orea. Zaměřuje se na host experience, efektivitu úklidů a procesy ve špičkách i mimo sezónu.",
      photo: "",
    },
    {
      name: "Tomáš Křen",
      role: "Revenue management & marketing",
      desc: "Řídí cenovou strategii, dynamické nacenění a marketingové kampaně. Zajišťuje maximální výnos apartmánů s ohledem na sezónnost a poptávku.",
      photo: "",
    },
    {
      name: "Petr Morong st.",
      role: "Stavbyvedoucí & technická údržba",
      desc: "Odpovídá za technickou správu budov, rekonstrukce apartmánů a dohled nad řemeslníky. Zajišťuje dlouhodobou kvalitu a spolehlivost objektů.",
      photo: "",
    },
    {
      name: "Tým řemeslníků",
      role: "Rekonstrukce & údržba apartmánů",
      desc: "Spolupracujeme s prověřenými řemeslníky, kteří dlouhodobě zajišťují rekonstrukce interiérů, technické opravy a pravidelnou údržbu.",
      photo: "",
    },
  ];

  return (
    <SectionContainer>
      <Wrapper>
        <Title>Náš tým v Mori Reality</Title>
        <Subtitle>
          Za správou apartmánů nestojí anonymní callcentrum, ale malý
          specializovaný tým, který Jeseníky dobře zná a je na místě každý den.
          Tady jsou lidé, kteří se budou starat o váš apartmán.
        </Subtitle>

        <TeamGrid>
          {team.map((member) => (
            <TeamCard key={member.name}>
              <TeamPhoto photo={member.photo} />
              <TeamName>{member.name}</TeamName>
              <TeamRole>{member.role}</TeamRole>
              <TeamDesc>{member.desc}</TeamDesc>
            </TeamCard>
          ))}
        </TeamGrid>

        <Externals>
          <Strong>Externí specialisté:&nbsp;</Strong>
          Social Kings – marketingová agentura pro sociální sítě, obsah a
          videa. Dále spolupracujeme s architekty, projektanty, právním
          servisem a účetními, kteří zajišťují kvalitní přípravu projektů i
          hladký chod celé struktury.
        </Externals>

       
      </Wrapper>
    </SectionContainer>
  );
};

export default TeamSection;
