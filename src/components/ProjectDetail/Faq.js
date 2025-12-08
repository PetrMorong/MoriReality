// @ts-check
import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 120px;

  @media (max-width: 800px) {
    margin-top: 40px;
    margin-bottom: 80px;
    padding: 0 20px;
  }
`;

const Wrapper = styled.div`
  width: 1180px;
  background: #ffffff;

  @media (max-width: 1180px) {
    width: 100%;
  }
`;

const Headline = styled.h4`
  font-family: Georama;
  font-size: 42px;
  line-height: 51px;
  color: #000000;
  text-align: center;
  margin-bottom: 56px;

  @media (max-width: 800px) {
    font-size: 32px;
    line-height: 41px;
    margin-bottom: 32px;
  }
`;

const FAQList = styled.div`
  border-top: 1px solid #e1e1e8;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid #e1e1e8;
`;

const QuestionRow = styled.button`
  width: 100%;
  padding: 22px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 800px) {
    padding: 18px 0;
  }
`;

const QuestionText = styled.div`
  font-family: Georama;
  font-size: 19px;
  line-height: 28px;
  letter-spacing: 0.01em;
  color: #000000;
  text-align: left;

  @media (max-width: 800px) {
    font-size: 17px;
    line-height: 26px;
    padding-right: 20px;
  }
`;

const ToggleIcon = styled.div`
  font-family: Georama;
  font-size: 26px;
  line-height: 1;
  color: #b29a84;
  flex-shrink: 0;
`;

const Answer = styled.div`
  padding: 0 0 24px 0;
  max-width: 860px;
  font-family: Georama;
  font-size: 17px;
  line-height: 28px;
  letter-spacing: 0.01em;
  color: #4d4d56;

  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

const FAQSection = () => {
  
const faqs = [
  {
    category: "investice",
    question: "Co je to garantovaný nájem?",
    answer: `
Garantovaný nájem je model, kdy od nás pobíráte fixní měsíční příjem po dobu 3 let s možností prodloužení. 
O veškerý provoz, hosty, úklid, údržbu a marketing se stará naše správcovská společnost. 
Vy jen dostáváte garantovaný příjem bez ohledu na obsazenost.`
  },

  {
    category: "investice",
    question: "Jaké náklady budu hradit při garantovaném nájmu?",
    answer: `
Z výnosu se odečítá pouze příspěvek do SVJ.  
Veškeré ostatní provozní náklady — energie, údržba, správa, hosté — hradíme my.`
  },

  {
    category: "investice",
    question: "Mohu si správu bytu řešit sám?",
    answer: `
Ano. Jednotku můžete provozovat zcela samostatně.  
Nabízíme ale také variantu správy se skutečnými náklady, kdy odečítáme jen reálné výdaje a zbytek je váš čistý příjem.`
  },

  {
    category: "investice",
    question: "Mohu apartmán zároveň využívat i pronajímat?",
    answer: `
Ano. Jako majitel máte možnost využít apartmán pro vlastní pobyty.
Model vlastního užívání přizpůsobíme vašim preferencím — například 10 nocí ročně zdarma v případě garantovaného nájmu.`
  },

  {
    category: "investice",
    question: "Je apartmán vhodný jako investice?",
    answer: `
Ano. Jeseníky patří mezi nejrychleji rostoucí turistické destinace v ČR.  
Díky profesionální správě dosahují apartmány vysoké obsazenosti a stabilního ročního výnosu. 
Investice je plně pasivní a predikovatelná.`
  },

  {
    category: "investice",
    question: "Pomáháte s financováním a hypotékou?",
    answer: `
Ano, protože kupujete bytovou jednotku v rámci SVJ, banky poskytují standardní hypotéky. 
Máme ověřené hypotéční specialisty, kteří vám pomohou zdarma s celým procesem.`
  },

  {
    category: "investice",
    question: "Co je zahrnuto v kupní ceně bytu?",
    answer: `
Kompletní dokončení standardu: hotové podlahy, dveře, omítky, designové prvky, osvětlení, elektroinstalace a připravené sítě.  
V ceně je také parkovací místo.  
Není zahrnuta kuchyň a nábytek — lze objednat dle našeho vybavovacího balíčku.`
  },

  // ---------------------------
  //   SVJ & PROVOZ – ZJEDNODUŠENÉ
  // ---------------------------

  {
    category: "svj",
    question: "Budu členem SVJ?",
    answer: `
Ano. Kupujete bytovou jednotku v bytovém domě, takže se automaticky stáváte členem SVJ stejně jako v běžné bytové výstavbě.`
  },

  {
    category: "svj",
    question: "Jaké budou orientační měsíční náklady?",
    answer: `
Náklady se budou pohybovat přibližně:
• 1kk: 2 800–3 300 Kč  
• 2kk: 3 500–4 000 Kč  
• velká jednotka: 6 000–6 700 Kč  

Po kolaudaci se vše upraví podle skutečných měřidel a podílů.`
  },

  {
    category: "svj",
    question: "Jak se rozúčtovává elektřina, teplo a voda?",
    answer: `
Každá jednotka má vlastní podružný elektroměr a vodoměr.  
Teplo je rozúčtováno podle bytových jednotek a podílů.  
Platíte tedy to, co reálně spotřebujete — férové a transparentní.`
  },

  {
    category: "svj",
    question: "Jak je řešeno vytápění a co když dodavatel tepla skončí?",
    answer: `
Dům je napojen na VÚCHS.  
Pokud by někdy ukončili dodávky tepla, SVJ má připravenou možnost instalovat vlastní kondenzační kotel — během cca 14 dní. 
Tím je zajištěna energetická nezávislost.`
  },

  {
    category: "svj",
    question: "Jaké společné prostory kupuji?",
    answer: `
Podíl na společných částech budovy: chodby, schodiště, technické místnosti a parkoviště.  
Zahrada pro svatby není součástí vlastnictví — bude oddělena.`
  },

  {
    category: "svj",
    question: "Budou se v areálu konat svatby a akce?",
    answer: `
Ano, resort počítá s konáním svateb a oslav. 
Majitelé jsou o tom informováni a je to zapracováno do smluvní dokumentace.`
  },

  {
    category: "svj",
    question: "Má SVJ úvěr a jak ovlivní moje náklady?",
    answer: `
Úvěr do 6 mil. Kč byl schválen na investice do parkování, revitalizace a energetických opatření.  
Splátka cca 30 300 Kč měsíčně je již zahrnutá v orientačním fondu oprav.`
  },

  {
    category: "svj",
    question: "Jak bude fungovat správa domu a účetnictví?",
    answer: `
SVJ bude mít profesionální externí správu, online přístup k dokumentům, vyúčtování energií a průběžné reporty. 
Cílem je maximální transparentnost a minimální starosti vlastníků.`
  },

  {
    category: "svj",
    question: "Jak funguje pronájem bytu přes Mori Reality?",
    answer: `
Nabízíme dvě možnosti:
• Garantovaný nájem – fixní příjem, bez starostí.  
• Skutečné náklady – platíte reálnou spotřebu, zbytek je váš zisk.  
Model vybereme podle toho, jak často chcete byt sami využívat.`
  },

  // ---------------------------
  //   DOPORUČENÉ DODATEČNÉ FAQ
  // ---------------------------

  {
    category: "doporučené",
    question: "Jak probíhá předání bytu?",
    answer: `
Předání probíhá osobně nebo přes videoinspekci.  
Součástí je předávací protokol, fotodokumentace, měřidla a přístupové údaje.`
  },

  {
    category: "doporučené",
    question: "Jaký je proces koupě krok po kroku?",
    answer: `
1) Rezervace jednotky  
2) Podpis SoSBK  
3) Financování (hotově / hypotéka)  
4) Podpis kupní smlouvy  
5) Vklad na katastr  
6) Předání jednotky a možnost pronájmu`
  },

  {
    category: "doporučené",
    question: "Mohu apartmán později prodat?",
    answer: `
Ano, jednotku lze kdykoli převést na jiného majitele. 
Vzhledem k vysoké poptávce je likvidita těchto jednotek nadprůměrná.`
  },

  {
    category: "doporučené",
    question: "Je možné byt dlouhodobě pronajmout?",
    answer: `
Ano, je to váš byt. Pokud preferujete dlouhodobého nájemníka, můžete jej pronajímat sami nebo to za vás zajistíme.`
  }
];

  const [openIndex, setOpenIndex] = React.useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Container>
      <Wrapper>
        <Headline>Nejčastější dotazy</Headline>
        <FAQList>
          {faqs.map((item, index) => (
            <FAQItem key={index}>
            
              <QuestionRow onClick={() => handleToggle(index)}>
                <QuestionText>{item.question}</QuestionText>
                <ToggleIcon>{openIndex === index ? "−" : "+"}</ToggleIcon>
              </QuestionRow>
              {openIndex === index && <Answer>{item.answer}</Answer>}
            </FAQItem>
          ))}
        </FAQList>
      </Wrapper>
    </Container>
  );
};

export default FAQSection;
