// src/components/ApartmentDetail/ApSectionFour.js
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { buildImageUrl } from "cloudinary-build-url";

const CONTACT_PERSON = {
  name: "Bc. Markéta Dvořáková, MBA",
  role: "Obchodní manažerka projektu",
  phone: "+420 601 502 889",
  email: "info@mori-reality.cz",
  quote: "Ráda vám pošlu podklady, zodpovím dotazy a domluvím prohlídku přímo v resortu.",
  initials: "MD",
  photo: buildImageUrl("v1765194799/T036FSHAT7U-U07EHM8TZEX-69f34a4227c2-512_t7kqrr.jpg", {}),
};

const ApSectionFour = ({ data }) => {
  const categoryRaw = data?.category || "";
  const category = categoryRaw.toLowerCase();
  const standardsUrl = data?.standardsPdfUrl || "/Standardy-CD.pdf";
  const contactEmail = CONTACT_PERSON.email;
  const contactPhone = CONTACT_PERSON.phone;

  const [formName, setFormName] = React.useState("");
  const [formPhone, setFormPhone] = React.useState("");
  const [formMsg, setFormMsg] = React.useState("");
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const encode = (formData) =>
    Object.keys(formData)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(formData[key]))
      .join("&");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "byt-inquiry",
        apartman: data?.apName || "",
        kategorie: data?.category || "",
        jmeno: formName,
        telefon: formPhone,
        zprava: formMsg,
      }),
    })
      .then(() => {
        setSent(true);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  return (
    <Container>
      <Wrapper>
        {/* ─── NADPIS ─── */}
        <HeadlineRow>
          <Line />
          <Headline>Kategorie {category}</Headline>
          <Line />
        </HeadlineRow>

        {/* ─── BADGE + KEY FACTS ─── */}
        <TopRow>
          <Badge>
            <div>
              <BadgeTitle>{data?.category || "Premium Suite"}</BadgeTitle>
              <BadgeSub>{data.categoryDescription}</BadgeSub>
              <BadgeNote>{data.apText}</BadgeNote>
            </div>
          </Badge>

          <KeyFacts>
            <Fact>
              <FactValue>{data?.apName}</FactValue>
              <FactLabel>Označení bytu</FactLabel>
            </Fact>
            <Fact>
              <FactValue>{data?.layout}</FactValue>
              <FactLabel>Dispozice</FactLabel>
            </Fact>
            <Fact>
              <FactValue>{data?.sizeValue} m²</FactValue>
              <FactLabel>Podlahová plocha</FactLabel>
            </Fact>
            <Fact>
              <FactValue>{data?.floorValue}</FactValue>
              <FactLabel>Umístění</FactLabel>
            </Fact>
          </KeyFacts>
        </TopRow>

          <ScrollCtaWrap>
          <a href="#byt-form"
            style={{ textDecoration: "none" }} 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("byt-form").scrollIntoView({ behavior: "smooth" });
            }}>
            <Button leftBorder={true}>Mám zájem o {data?.apName} →</Button>
          </a>
        </ScrollCtaWrap>

        {/* ─── PRO KOHO ─── */}
        {data.proKoho && data.proKoho.length > 0 && (
          <ProKohoSection>
            <SectionLabel>Pro koho je apartmán vhodný</SectionLabel>
            <ProKohoGrid>
              {data.proKoho.map((item, i) => (
                <ProKohoCard key={i}>
                  <ProKohoIcon>{item.icon}</ProKohoIcon>
                  <ProKohoTitle>{item.title}</ProKohoTitle>
                  <ProKohoText>{item.text}</ProKohoText>
                </ProKohoCard>
              ))}
            </ProKohoGrid>
          </ProKohoSection>
        )}

      

        {/* ─── TŘÍSLOUPKOVÝ GRID ─── */}
        <Grid>
          <Card>
            <CardTitle>{data.colOneTitle}</CardTitle>
            <List>{data.colOneText}</List>
          </Card>

          <Card>
            <CardTitle>{data.colTwoTitle}</CardTitle>
            <Body>{data.colTwoDescription}</Body>
            <Warn>{data.colTwoClaim}</Warn>
            <DownloadRow>
              <a
                href={standardsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button leftBorder={true}>
                  📄 Stáhnout standardy a vybavení (PDF)
                </Button>
              </a>
              <DownloadNote>{data.colTwoDownloadDesc}</DownloadNote>
            </DownloadRow>
          </Card>

          <Card>
            <CardTitle>{data.colThreeTitle}</CardTitle>
            <List>{data.colThreeDesc}</List>
            <SmallNote>{data.colThreeNote}</SmallNote>
          </Card>
        </Grid>

        {/* ─── GARANTOVANÝ VÝNOS ─── */}
        {data.vynosInfo && (
          <VynosSection>
            <SectionLabel>Garantovaný výnos – jak to funguje</SectionLabel>
            <VynosBox>
              <VynosLeft>
                <VynosHeadline>{data.vynosInfo.headline}</VynosHeadline>
                <VynosDesc>{data.vynosInfo.description}</VynosDesc>
              </VynosLeft>
              <VynosList>
                {data.vynosInfo.items.map((item, i) => (
                  <VynosItem key={i}>
                    <VynosCheck>✓</VynosCheck>
                    <span>{item}</span>
                  </VynosItem>
                ))}
              </VynosList>
            </VynosBox>
          </VynosSection>
        )}

        {/* ─── ZÁZEMÍ RESORTU ─── */}
        {data.resortInfo && (
          <ResortSection>
            <SectionLabel>Zázemí resortu</SectionLabel>
            <ResortGrid>
              {data.resortInfo.features.map((item, i) => (
                <ResortItem key={i}>
                  <ResortIcon>
                    <img src={item.icon} alt="" />
                  </ResortIcon>
                  <ResortText>{item.text}</ResortText>
                </ResortItem>
              ))}
            </ResortGrid>
          </ResortSection>
        )}

        {/* ─── POSTUP KOUPĚ ─── */}
        {data.resortInfo?.buyProcess && (
          <BuySection>
            <SectionLabel>Postup při koupi</SectionLabel>
            <BuyGrid>
              {data.resortInfo.buyProcess.map((item, i) => (
                <BuyCard key={i}>
                  <BuyStep>{item.step}</BuyStep>
                  <BuyTitle>{item.title}</BuyTitle>
                  <BuyText>{item.text}</BuyText>
                </BuyCard>
              ))}
            </BuyGrid>
          </BuySection>
        )}

        {/* ─── CTA + KONTAKT + FORMULÁŘ ─── */}
        <CtaSection>
          <CtaLeft>
            <PriceLabel>Cena</PriceLabel>
            <PriceValue>{data?.price}</PriceValue>
            <Mini>
              Chcete prohlídku nebo detailní informace? Rádi zašleme podklady a
              domluvíme termín.
            </Mini>

            {/* Kontaktní osoba */}
            <ContactPersonWrap>
              <ContactAvatar>
                {CONTACT_PERSON.photo ? (
                  <img
                    src={CONTACT_PERSON.photo}
                    alt={CONTACT_PERSON.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                  />
                ) : (
                  <AvatarInitials>{CONTACT_PERSON.initials}</AvatarInitials>
                )}
              </ContactAvatar>
              <ContactInfo>
                <ContactName>{CONTACT_PERSON.name}</ContactName>
                <ContactRole>{CONTACT_PERSON.role}</ContactRole>
                <ContactQuote>„{CONTACT_PERSON.quote}"</ContactQuote>
                <ContactPhone href={`tel:${CONTACT_PERSON.phone}`}>
                  {CONTACT_PERSON.phone}
                </ContactPhone>
              </ContactInfo>
            </ContactPersonWrap>
          </CtaLeft>

          {/* Formulář */}
          <FormWrap
            name="byt-inquiry"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            id="byt-form"
          >
            {/* Netlify required hidden fields */}
            <input type="hidden" name="form-name" value="byt-inquiry" />
            <input type="hidden" name="apartman" value={data?.apName || ""} />
            <input type="hidden" name="kategorie" value={data?.category || ""} />
            <input type="hidden" name="bot-field" style={{ display: "none" }} />

            <FormTitle>
              Mám zájem o {data?.apName || "byt"}
            </FormTitle>
            <FormSub>
              Pošleme vám kompletní podklady – harmonogram, standardy vybavení
              a investiční parametry.
            </FormSub>

            {sent ? (
              <SentMsg>
                ✓ Děkujeme! Ozveme se vám co nejdříve.
              </SentMsg>
            ) : (
              <>
                <FormRow>
                  <FormField>
                    <FormLabel>Jméno a příjmení</FormLabel>
                    <FormInput
                      type="text"
                      name="jmeno"
                      placeholder="Jan Novák"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      required
                    />
                  </FormField>
                  <FormField>
                    <FormLabel>Telefon</FormLabel>
                    <FormInput
                      type="tel"
                      name="telefon"
                      placeholder="+420 000 000 000"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      required
                    />
                  </FormField>
                </FormRow>
                <FormField style={{ marginBottom: 0 }}>
                  <FormLabel>Zpráva (nepovinné)</FormLabel>
                  <FormTextarea
                    name="zprava"
                    placeholder={`Mám zájem o prohlídku ${data?.apName || "bytu"}...`}
                    value={formMsg}
                    onChange={(e) => setFormMsg(e.target.value)}
                    rows={3}
                  />
                </FormField>
                {error && (
                  <ErrorMsg>
                    Něco se pokazilo. Zkuste to prosím znovu nebo nás kontaktujte telefonicky.
                  </ErrorMsg>
                )}
                <SubmitBtn type="submit" disabled={loading}>
                  {loading ? "Odesílám..." : `Ověřit dostupnost ${data?.apName || "bytu"} →`}
                </SubmitBtn>
                <a
                  href={standardsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <SecondaryBtn type="button">Stáhnout podklady PDF</SecondaryBtn>
                </a>
              </>
            )}
          </FormWrap>
        </CtaSection>
      </Wrapper>
    </Container>
  );
};

/* ─── STYLED COMPONENTS ─── */

const ScrollCtaWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 120px;
  margin-bottom: 120px;

  @media (max-width: 800px) {
    margin-top: 70px;
    margin-bottom: 70px;
  }
`;

const Wrapper = styled.div`
  width: 1180px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1180px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const HeadlineRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 60px;
`;

const Line = styled.div`
  flex: 1;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 1px;
`;

const Headline = styled.div`
  font-family: Georama;
  font-size: 42px;
  line-height: 51px;
  color: #000000;
  margin: 0 56px;

  @media (max-width: 800px) {
    font-size: 32px;
    line-height: 41px;
    margin: 0 20px;
    text-align: center;
  }
`;

const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 30px;
  margin-bottom: 30px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Badge = styled.div`
  border: 1px solid rgba(178, 154, 132, 0.35);
  background: rgba(178, 154, 132, 0.06);
  padding: 22px;
  display: flex;
  gap: 14px;
`;

const BadgeTitle = styled.div`
  font-family: Georama;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #b29a84;
  margin-bottom: 6px;
`;

const BadgeSub = styled.div`
  font-family: Georama;
  font-size: 17px;
  line-height: 28px;
  color: #4d4d56;
`;

const BadgeNote = styled.div`
  font-family: Georama;
  font-size: 15px;
  line-height: 24px;
  color: #4d4d56;
  margin-top: 10px;

  b {
    color: #000000;
  }
`;

const KeyFacts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const Fact = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.06);
  padding: 16px;
`;

const FactValue = styled.div`
  font-family: Georama;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: #000000;
`;

const FactLabel = styled.div`
  font-family: Georama;
  font-size: 14px;
  line-height: 22px;
  color: #7b7b86;
  margin-top: 4px;
`;

/* ─── PRO KOHO ─── */

const SectionLabel = styled.div`
  font-family: Georama;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #7b7b86;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const ProKohoSection = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const ProKohoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ProKohoCard = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.06);
  padding: 18px;
`;

const ProKohoIcon = styled.div`
  font-size: 22px;
  margin-bottom: 10px;
`;

const ProKohoTitle = styled.div`
  font-family: Georama;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: #000000;
  margin-bottom: 6px;
`;

const ProKohoText = styled.div`
  font-family: Georama;
  font-size: 14px;
  line-height: 22px;
  color: #4d4d56;
`;

/* ─── GRID ─── */

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 22px;
  margin-top: 10px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.06);
  padding: 22px;
`;

const CardTitle = styled.div`
  font-family: Georama;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 12px;
`;

const Body = styled.div`
  font-family: Georama;
  font-size: 16px;
  line-height: 26px;
  color: #4d4d56;

  b {
    color: #000000;
  }
`;

const Warn = styled.div`
  margin-top: 14px;
  padding: 12px 14px;
  border: 1px solid rgba(178, 154, 132, 0.35);
  background: rgba(178, 154, 132, 0.06);
  font-family: Georama;
  font-size: 15px;
  line-height: 24px;
  color: #4d4d56;

  b {
    color: #000000;
  }
`;

const DownloadRow = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DownloadNote = styled.div`
  font-family: Georama;
  font-size: 14px;
  line-height: 22px;
  color: #7b7b86;
`;

const List = styled.ul`
  margin: 0;
  padding-left: 18px;

  li {
    font-family: Georama;
    font-size: 16px;
    line-height: 26px;
    color: #4d4d56;
    margin-bottom: 10px;
  }

  b {
    color: #000000;
  }
`;

const SmallNote = styled.div`
  font-family: Georama;
  font-size: 15px;
  line-height: 24px;
  color: #7b7b86;
  margin-top: 14px;
`;

/* ─── VÝNOS ─── */

const VynosSection = styled.div`
  margin-top: 50px;
  margin-bottom: 10px;
`;

const VynosBox = styled.div`
  border: 1px solid rgba(178, 154, 132, 0.35);
  background: rgba(178, 154, 132, 0.04);
  border-left: 3px solid #b29a84;
  padding: 26px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const VynosLeft = styled.div``;

const VynosHeadline = styled.div`
  font-family: Georama;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  color: #b29a84;
  margin-bottom: 10px;
`;

const VynosDesc = styled.div`
  font-family: Georama;
  font-size: 15px;
  line-height: 24px;
  color: #4d4d56;
`;

const VynosList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

const VynosItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-family: Georama;
  font-size: 14px;
  line-height: 22px;
  color: #4d4d56;
`;

const VynosCheck = styled.span`
  color: #b29a84;
  font-size: 15px;
  flex-shrink: 0;
  margin-top: 1px;
`;

/* ─── CTA SEKCE ─── */

const CtaSection = styled.div`
  margin-top: 50px;
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const CtaLeft = styled.div``;

const PriceLabel = styled.div`
  font-family: Georama;
  font-size: 14px;
  line-height: 22px;
  color: #7b7b86;
`;

const PriceValue = styled.div`
  font-family: Georama;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  color: #b29a84;
  margin-top: 6px;
  margin-bottom: 10px;
`;

const Mini = styled.div`
  font-family: Georama;
  font-size: 15px;
  line-height: 24px;
  color: #4d4d56;
  max-width: 480px;
  margin-bottom: 24px;
`;

/* Kontaktní osoba */

const ContactPersonWrap = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  border: 1px solid rgba(0, 0, 0, 0.06);
  padding: 18px;
`;

const ContactAvatar = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;

const AvatarInitials = styled.div`
  width: 100%;
  height: 100%;
  background: #b29a84;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Georama;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const ContactName = styled.div`
  font-family: Georama;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
`;

const ContactRole = styled.div`
  font-family: Georama;
  font-size: 13px;
  line-height: 20px;
  color: #7b7b86;
  margin-bottom: 6px;
`;

const ContactQuote = styled.div`
  font-family: Georama;
  font-size: 13px;
  line-height: 20px;
  color: #4d4d56;
  font-style: italic;
  margin-bottom: 8px;
`;

const ContactPhone = styled.a`
  font-family: Georama;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
  text-decoration: none;

  &:hover {
    color: #b29a84;
  }
`;

/* Formulář */

const FormWrap = styled.form`
  border: 1px solid rgba(178, 154, 132, 0.35);
  background: rgba(178, 154, 132, 0.04);
  padding: 26px;
`;

const FormTitle = styled.div`
  font-family: Georama;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 6px;
`;

const FormSub = styled.div`
  font-family: Georama;
  font-size: 14px;
  line-height: 22px;
  color: #7b7b86;
  margin-bottom: 20px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 14px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 14px;
`;

const FormLabel = styled.label`
  font-family: Georama;
  font-size: 12px;
  line-height: 18px;
  color: #7b7b86;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const FormInput = styled.input`
  font-family: Georama;
  font-size: 15px;
  line-height: 24px;
  color: #000000;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #ffffff;
  padding: 10px 14px;
  outline: none;
  width: 100%;

  &:focus {
    border-color: #b29a84;
  }
`;

const FormTextarea = styled.textarea`
  font-family: Georama;
  font-size: 15px;
  line-height: 24px;
  color: #000000;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #ffffff;
  padding: 10px 14px;
  outline: none;
  resize: none;
  width: 100%;

  &:focus {
    border-color: #b29a84;
  }
`;

const SubmitBtn = styled.button`
  font-family: Georama;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  color: #ffffff;
  background: #1a1a1a;
  border: none;
  padding: 14px 22px;
  width: 100%;
  cursor: pointer;
  margin-top: 16px;
  transition: background 0.15s ease;

  &:hover {
    background: #b29a84;
  }
`;

const SecondaryBtn = styled.button`
  font-family: Georama;
  font-size: 15px;
  line-height: 24px;
  color: #4d4d56;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 12px 22px;
  width: 100%;
  cursor: pointer;
  margin-top: 10px;
  transition: border-color 0.15s ease;

  &:hover {
    border-color: #b29a84;
    color: #b29a84;
  }
`;

const SentMsg = styled.div`
  font-family: Georama;
  font-size: 15px;
  line-height: 24px;
  color: #4d4d56;
  padding: 16px;
  border: 1px solid rgba(178, 154, 132, 0.5);
  background: rgba(178, 154, 132, 0.06);
  margin-top: 16px;
`;

const ErrorMsg = styled.div`
  font-family: Georama;
  font-size: 14px;
  line-height: 22px;
  color: #c0392b;
  padding: 12px 14px;
  border: 1px solid rgba(192, 57, 43, 0.25);
  background: rgba(192, 57, 43, 0.04);
  margin-top: 12px;
`;

/* ─── ZÁZEMÍ RESORTU ─── */

const ResortSection = styled.div`
  margin-top: 50px;
  margin-bottom: 10px;
`;

const ResortGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ResortItem = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.06);
  padding: 14px 16px;
  display: flex;
  gap: 10px;
  align-items: flex-start;
`;

const ResortIcon = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-top: 1px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ResortText = styled.div`
  font-family: Georama;
  font-size: 13px;
  line-height: 20px;
  color: #4d4d56;
`;

/* ─── POSTUP KOUPĚ ─── */

const BuySection = styled.div`
  margin-top: 50px;
  margin-bottom: 10px;
`;

const BuyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const BuyCard = styled.div`
  border: 1px solid rgba(178, 154, 132, 0.25);
  background: rgba(178, 154, 132, 0.03);
  padding: 20px;
`;

const BuyStep = styled.div`
  font-family: Georama;
  font-weight: 600;
  font-size: 32px;
  line-height: 1;
  color: rgba(178, 154, 132, 0.3);
  margin-bottom: 10px;
`;

const BuyTitle = styled.div`
  font-family: Georama;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  margin-bottom: 8px;
`;

const BuyText = styled.div`
  font-family: Georama;
  font-size: 14px;
  line-height: 22px;
  color: #4d4d56;
`;

export default ApSectionFour;
