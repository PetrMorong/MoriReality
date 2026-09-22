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
    question: "Jak funguje podíl z tržby?",
    answer: `
Apartmán zapojíte do provozu resortu a my ho pronajímáme hostům. Z ubytovací tržby vaší jednotky bez DPH dostáváte 45 %. Příklad: tržba 60 000 Kč → bez DPH 53 571 Kč → vám 24 107 Kč. Veškeré provozní náklady – provize portálů, úklid, prádlo, snídaně, wellness pro hosty, marketing – nese provozovatel.`
  },

  {
    category: "investice",
    question: "Kdy začnu dostávat podíl z tržby?",
    answer: `
Od prvního měsíce, kdy je apartmán zapojen do provozu. Vyúčtování s rozpisem rezervací a výplata probíhají měsíčně.`
  },

  {
    category: "investice",
    question: "Jaké náklady hradím jako vlastník?",
    answer: `
Jen náklady spojené s vlastnictvím: příspěvek do fondu oprav a správu SVJ, energie připadající na jednotku, pojištění a daň z nemovitých věcí – orientačně 2 500–4 000 Kč měsíčně podle velikosti apartmánu. Provozní náklady ubytování jdou za provozovatelem.`
  },

  {
    category: "investice",
    question: "Mohu si správu bytu řešit sám?",
    answer: `
Ano. Apartmán je váš a do provozu resortu ho zapojovat nemusíte – můžete ho pronajímat sami nebo užívat jen pro sebe. Pokud ho do provozu zapojíte, funguje model podílu z tržby: dostáváte 45 % z ubytovací tržby bez DPH a veškeré provozní náklady nese provozovatel.`
  },

  {
    category: "investice",
    question: "Mohu apartmán zároveň využívat i pronajímat?",
    answer: `
Ano. Jako majitel máte možnost využít apartmán pro vlastní pobyty.
Standardně je to 14 nocí ročně, kdy platíte jen úklid a prádlo. Zbytek roku apartmán pronajímáme hostům a vy dostáváte podíl z tržby.`
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
Apartmán zapojíte do provozu resortu na základě smlouvy o zajištění využití bytové jednotky. Mori Reality zajišťuje kompletní provoz – prodej pobytů, hosty, úklid, prádlo, snídaně i marketing – a vy dostáváte 45 % z ubytovací tržby své jednotky bez DPH, měsíčně s rozpisem rezervací.`
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
2) Podpis SoSBK složení zálohy 10%
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
