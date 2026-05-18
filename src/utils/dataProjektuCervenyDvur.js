import React from 'react'
import { buildImageUrl } from "cloudinary-build-url";

const data = {
  status: "Ve výstavbě",
  title: "Wellness Resort Červený dvůr",
  locationOne: "Výzkumníků 267",
  locationTwo: "Rapotín, okres Šumperk",
  cover: "vilaRepublikaCover",
  desc: (
    <>
      Resort Červený dvůr. Místo, kde se moderna snoubí s historií. V malebné obci Rapotín pod vrcholky Hrubého Jeseníku rekonstruujeme historickou budovu z 30. let minulého století.
      Apartmánový dům bude sloužit jako ubytování hotelového typu s kompletním servisem. Vlastní apartmán vám tak může sloužit jako rodinné rekreační zázemí. V době, kdy ho nebudete obývat sami, se pro vás stane pasivní investicí. O kompletní správu a pohodlí vašich hostů se vám rádi postaráme od A do Z. Více info o ubytování na našem webu. {" "}
      <a style={{ color: "B39A84" }} target="_blank" href="https://www.resortcervenydvur.cz">wwww.resortcervenydvur.cz</a>
    </>
  ),
  sliderImages: [

    {
      imageUrl: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
    },
    {
      imageUrl: "v1763643021/Rapotin/DSC01347-HDR-min_aev5ff.jpg",
    },
    {
      imageUrl: "v1763643018/Rapotin/DSC01338-HDR-min_ovm1qq.jpg",
    },
    {
      imageUrl: "v1763643021/Rapotin/DSC01326-HDR-min_aii9k1.jpg",
    },
    {
      imageUrl: "v1763643019/Rapotin/DSC00731-HDR-min_rhlch6.jpg",
    },
    {
      imageUrl: "v1763643022/Rapotin/DSC00866-min_vlwgs5.jpg",
    },
    {
      imageUrl: "v1763643020/Rapotin/DSC00919-min_kdr0gt.jpg",
    },
    {
      imageUrl: "v1763643007/Rapotin/DSC01118-HDR-min_ztlt5k.jpg",
    },
    {
      imageUrl: "v1763643018/Rapotin/DSC01123-HDR-min_bb20ze.jpg",
    },

    // wellness

    {
      imageUrl: "v1773849235/Rapotin/DSC07004_1_grjrxp.jpg",
    },
    {
      imageUrl: "v1773849227/Rapotin/DSC07001_1_fvvlxh.jpg",
    },
    {
      imageUrl: "v1773849227/Rapotin/DSC07009_1_n8rixd.jpg",
    },
    {
      imageUrl: "v1773849229/Rapotin/DSC06991_1_moequq.jpg",
    },
    {
      imageUrl: "v1773849236/Rapotin/DSC07020_1_xym9hm.jpg"
    },
    {
      imageUrl: "v1771946209/Rapotin/77d88bdd-d590-4a13-9a75-2082673efe88_fps82k.png"
    },

  ],
  hideArchitect: true,
  stats: [
    {
      value: "4000",
      highlighted: "m2",
      desc: "Plocha pozemku",
    },
    {
      value: "38",
      highlighted: "",
      desc: "Bytů",
    },
    {
      value: "Až",
      highlighted: "3kk",
      desc: "Dispozice Bytů",
    },
    {
      value: "leden",
      highlighted: "2027",
      desc: "Termín Dokončení",
    },
  ],
  features: [
    {
      icon: "/features/sauna.png",
      desc: "Wellness",
    },
    {
      icon: "/features/ski.png",
      desc: "Lyžárna, Kolárna",
    },
    {
      icon: "/features/table-football(1).png",
      desc: "Společenská místnost",
    },

    {
      icon: "/features/coffee-cup.png",
      desc: "Snídaně",
    },

    {
      icon: "/features/parking-area.png",
      desc: "Parkovácí místo",
    },

    {
      icon: "/features/door-lock.png",
      desc: "Self checkin",
    },

    {
      icon: "/features/treadmill.png",
      desc: "Fitness",
    },
    {
      icon: "/features/view.png",
      desc: "Klid a hory",
    },
  ],

  sectionFourOneText: {
    title: "Historie",
    titleGold: "Červého dvora",
    desc: "Červený dvůr má bohatou historii sahající až do 17. století, kdy byl součástí rozsáhlého panství rodu Žerotínů. Právě tehdy vznikl první zámeček, který sloužil jako správní a obytná budova uprostřed hospodářského dvora. V přízemí bývala kuchyně, komory a sklady, v patře několik světnic a menší kaple. V 18. a 19. století se dvůr postupně rozvíjel – zejména díky podnikatelům Wagnerovým, kteří zde provozovali bělidlo, tedy zařízení na bělení přízí a plátna. To dalo místu i jeho dnešní jméno Červený dvůr, které se už tehdy začalo používat. Později dvůr sloužil různým hospodářským účelům a stal se významnou součástí místního života. Po první světové válce zde vznikl tzv. Gabrielův dvůr, po druhé světové byl objekt přeměněn na výzkumný ústav pro chov skotu. V této době byl původní zámeček – kvůli technickému stavu – postupně odstraněn. Po roce 1945 byl celý areál znárodněn a několik desetiletí sloužil výhradně zemědělským a technickým účelům. Přesto si uchoval své jedinečné umístění v krajině i výraznou historickou stopu. Dnes prochází Červený dvůr citlivou rekonstrukcí a navazuje na svou historii novou kapitolou – přeměnou v moderní resort, který spojuje prvky původní architektury s dnešním komfortem a novým využitím. Z místa s příběhem se opět stává místo pro život, odpočinek a setkávání.",
  },

  sectionFourTwoText: {
    title: "Wellness,",
    titleGold: "zážitek a atraktivita",
    desc: `V areálu Červeného dvora klademe důraz na pohodlí, klid a kvalitní odpočinek. Proto jsme vytvořili designové wellness, které přirozeně doplňuje atmosféru celého resortu.

Wellness je nyní již otevřeno a nabízí finskou saunu s ochlazovacím bazénkem ve formátu privátního wellness. Hosté si tak mohou vychutnat maximální soukromí a nerušený relax v klidném prostředí areálu.

Wellness se tak stává přirozenou a vyhledávanou součástí pobytu v Červeném dvoře a podtrhuje celkový charakter místa zaměřeného na odpočinek a regeneraci.`
  },

  sectionImageOne: "v1705668049/Rapotin/1928_1_1_j1wzvm.jpg",
  sectionImageTwo: "v1773849229/Rapotin/DSC06991_1_moequq.jpg",

  sectionCover: "v1763643017/Rapotin/DSC00809-HDR-min_ubagg2.jpg",

  ticksSection: [
    {
      highlighted: "Postup pří koupi",
      normal: "apartmánu",
      desc: "Vyberete si apartmán podle svých představ a investičních cílů. Následně uzavřeme smlouvu o smlouvě budoucí kupní a po složení zálohy 10% do bankovní úschovy je apartmán rezervován právě pro vás. Po dokončení jednotky a podpisu kupní smlouvy se stanete jejím výhradním vlastníkem. Od tohoto okamžiku s apartmánem nakládáte plně podle svého rozhodnutí.",
    },
    {
      highlighted: "správa apartmánu",
      normal: "Kompletní ",
      desc: "Kupujete si apartmán jako investici? Nabízíme vám kompletní správu a garantovaný výnos. Apartmán můžete zároveň sami využívat až 10 dní v roce. Při podpisu kupní smlouvy uzavřeme také vzájemnou nájemní smlouvu a tím vaše starosti končí. Nájemné vám vyplácíme vždy řádně a včas. Pravidelné měsíční platby inkasujete na svůj účet bez ohledu na obsazenost apartmánu. Od smlouvy můžete kdykoliv odstoupit a to bez smluvních pokut.",
    },
    {
      highlighted: "už od listopadu",
      normal: "Lyžování naplno ",
      desc: "Hrubý Jeseník má skvělé sněhového podmínky. V dosahu budete mít hned několik ski-areálů. Necelých 10 kilometrů je vzdálen ski-areál Kouty a Přemyslov. Zhruba za 20 minut dorazíte na Praděd nebo Červenohorské sedlo. A mnoho dalších menších středisek objevíte v blízkém okolí. Pro běžkaře je nejatraktivnější oblastí Jesenická magistrála. Přejezd Jesenického hřebene na lyžích je jedním z nejkrásnějších horských výletů, které u nás můžete podniknout.",
    }
  ],

  resortInfo: {
  features: [
    { icon: "/images/features/sauna.png", text: "Wellness — finská sauna s ochlazovacím bazénkem, privátní provoz" },
    { icon: "/images/features/coffee-cup.png", text: "Snídaně přímo v areálu" },
    { icon: "/images/features/ski.png", text: "Lyžárna a kolárna" },
    { icon: "/images/features/treadmill.png", text: "Fitness" },
    { icon: "/images/features/table-football(1).png", text: "Společenská místnost" },
    { icon: "/images/features/parking-area.png", text: "Parkovací místo" },
    { icon: "/images/features/door-lock.png", text: "Self check-in" },
    { icon: "/images/features/view.png", text: "Klid a hory — ski areál Kouty 10 km, Praděd 20 min" },
  ],
  buyProcess: [
    {
      step: "1",
      title: "Rezervace",
      text: "Vyberete apartmán a podepíšete smlouvu o smlouvě budoucí kupní. Záloha 10 % jde na projektový účet Raiffeisenbank do bankovní úschovy — apartmán je od té chvíle rezervován pro vás.",
    },
    {
      step: "2",
      title: "Dokončení a předání",
      text: "Po dokončení jednotky podepíšeme kupní smlouvu. Stanete se výhradním vlastníkem a s apartmánem nakládáte podle svého rozhodnutí.",
    },
    {
      step: "3",
      title: "Správa a výnos",
      text: "Při podpisu kupní smlouvy uzavřeme nájemní smlouvu. Nájemné vyplácíme každý měsíc bez ohledu na obsazenost. Apartmán můžete využívat až 10 dní v roce. Od smlouvy lze kdykoliv odstoupit bez smluvních pokut.",
    },
  ],
},

  apartments: [
      {
      price: "4 000 000 Kč",
      number: "Byt č.1",
      floor: "1NP A",
      layout: "1kk",
      size: "40,26 m2",
      terasa: "",
      parking: "",
      priceVynos: "13 000 Kč",
      vynos: "168 000 Kč",
      link: "/cervenydvur/byt/?Id=1",
      reserved: true, // Jirgl
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      category: "Komfort",
      categoryDescription:
        "Rohový byt 1kk s klidným výhledem do zahrady a na vodní náhon. Ideální kombinace soukromí, světla a příjemné atmosféry.",
      apText:
        <>
          Byt je <b>dokončený</b> a připravený k užívání. Aktuálně je <b>zažádáno o kolaudaci</b>. <b>Zápis jednotky do katastru (KN): 05/2026</b>. <br /><br /><b>Výjimečný benefit této jednotky:</b> rohové umístění budovy s <b>výhledem do zahrady a na vodní náhon</b>. <br /><b>Součástí ceny je kuchyňská linka</b> (ostatní byty se standardně prodávají bez kuchyně).
        </>,
      colOneTitle: "Hlavní benefity bytu",
      colOneText: (
        <>
          <li><b>Rohový byt</b> – více soukromí a lepší světelné podmínky.</li>
          <li><b>Výhled do zahrady a na vodní náhon</b> – klidné a přírodní prostředí.</li>
          <li>Dispozice <b>1kk</b> – ideální pro jednotlivce, pár nebo investici.</li>
          <li><b>Kuchyňská linka v ceně</b> (výhoda oproti ostatním jednotkám).</li>
        </>
      ),
      colTwoTitle: "Standard a vybavení",
      colTwoDescription:
        "Standard Komfort je navržen s důrazem na praktičnost a dlouhodobou udržitelnost. Byt působí vzdušně a klidně, díky rohovému umístění a výhledu do zeleně nabízí nadstandardní atmosféru i při kompaktní dispozici 1kk.",
      colTwoClaim:
        "Tato jednotka má kuchyň v ceně. U ostatních bytů kuchyňská linka standardně není součástí ceny.",
      colTwoDownloadDesc:
        "V PDF najdete detailní popis standardů a orientační seznam vybavení.",
      colThreeTitle: "Stav a harmonogram",
      colThreeDesc: (
        <>
          <li><b>Byt dokončen</b></li>
          <li><b>Zažádáno o kolaudaci</b></li>
          <li><b>Zápis do katastru nemovitostí: 05/2026</b></li>
          <li>Po zápisu do KN je možný plynulý převod jednotky na kupujícího.</li>
        </>
      ),
      colThreeNote:
        "Byt je vhodný jak pro vlastní rekreaci, tak jako stabilní investice k pronájmu díky dispozici 1kk a klidné orientaci.",
      gallery: [
        "v1769180592/Rapotin/DSC02526-HDR_1_-min_yoj7ld.jpg",
        "v1773389508/Rapotin/A_B1_zyjbwz.png",
        "v1765969810/Rapotin/A1Pudorys_lx0mj1.png",
        "v1765969811/Rapotin/A1exterier_hq8jfu.png",
        "v1769180589/Rapotin/DSC02565-HDR_1_-min_mnuwxp.jpg",
        "v1769180589/Rapotin/DSC02562-HDR_1_-min_anfzzt.jpg",
        "v1769180586/Rapotin/DSC02532-HDR_1_-min_ucxuqw.jpg",
        "v1769180587/Rapotin/DSC02535-HDR_1_-min_ocr3xn.jpg",
        "v1769180588/Rapotin/DSC02546-HDR-2_1_-min_yg0iwq.jpg"
      ],
    },
    {
      price: "",
      number: "Byt č.2",
      floor: "1NP A",
      layout: "1kk",
      size: "27,50 m2",
      terasa: "",
      parking: "",
      priceVynos: "",
      vynos: "",
      link: "/cervenydvur/byt/?Id=2",
      category: "Komfort",
      reserved: true,
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: ["v1763461562/Rapotin/Text_odstavce_ofjnms.jpg"]
    },
    {
      price: "",
      number: "Byt č.3",
      floor: "1NP A",
      layout: "1kk",
      size: "24,48 m2",
      terasa: "",
      parking: "",
      priceVynos: "",
      vynos: "",
      link: "/cervenydvur/byt/?Id=3",
      category: "Komfort",

      reserved: true,
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: ["v1763461562/Rapotin/Text_odstavce_ofjnms.jpg"]
    },
    {
      price: "4 490 000 Kč",
      number: "Byt č.4",
      floor: "1NP A",
      layout: "1kk",
      size: "54,25 m2",
      terasa: "",
      parking: "",
      priceVynos: "15 000 Kč",
      vynos: "180 000 Kč",
      link: "/cervenydvur/byt/?Id=4",
      category: "Komfort",
      categoryDescription:
        "Prostorný byt 1kk s možností výrazného upgradu na vyšší standard i vyšší výnos z pronájmu.",
      apText:
        <>
          Byt je <b>zažádán ke kolaudaci</b> a připraven k převodu. <b>Zápis jednotky do katastru: 05/2026</b>. <br /><br /><b>Kuchyňská linka je součástí ceny.</b> <br /><br />Kupující má možnost byt po koupi <b>dále rozšířit a posunout do vyšší kategorie</b> – technicky i dispozičně.
        </>,
      colOneTitle: "Aktuální stav bytu",
      colOneText: (
        <>
          <li>Dispozice <b>1kk</b> – funkční a prostorné řešení.</li>
          <li><b>Kuchyňská linka v ceně</b>.</li>
          <li>Byt připravený k užívání nebo dalším úpravám.</li>
          <li><b>Zažádáno o kolaudaci</b>, převod po zápisu do KN.</li>
        </>
      ),

      colTwoTitle: "Možnosti rozšíření a vylepšení",
      colTwoDescription:
        "Byt nabízí zajímavý potenciál pro individuální úpravy nebo investiční zhodnocení. Po koupi je možné realizovat stavební i dispoziční změny, které byt posunou do vyšší kategorie a zvýší jeho atraktivitu na trhu.",
      colTwoClaim:
        <>
          <b>Možné úpravy:</b> nová koupelna, privátní sauna, vířivka nebo úprava dispozice na <b>2kk</b>.
        </>,
      colTwoDownloadDesc:
        "Práce, koordinaci řemesel i technický dohled jsme schopni kompletně zajistit. Rádi připravíme orientační rozpočet a návrh řešení.",

      colThreeTitle: "Investiční potenciál",
      colThreeDesc: (
        <>
          <li>Možnost <b>posunu bytu do vyšší kategorie</b>.</li>
          <li>Vyšší atraktivita pro krátkodobý i střednědobý pronájem.</li>
          <li><b>Možnost nabídnout vyšší garantovaný nájem</b> po realizaci úprav.</li>
          <li>Vhodné pro investory hledající přidanou hodnotu.</li>
        </>
      ),
      colThreeNote:
        "Byt je ideální volbou pro kupující, kteří chtějí kombinovat okamžité užívání s budoucím zhodnocením nemovitosti.",

      reserved: false,
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: [
        "v1769181009/Rapotin/LL401874-HDR-min_scd0ze.jpg",
        "v1773389507/Rapotin/A_B4_ztcrbc.png",
        "v1765972701/Rapotin/A4Pudorys_dql2on.png",
        "v1765972703/Rapotin/A4Exterier_snawj5.png",
        "v1769181011/Rapotin/LL401865-HDR-min_yqr64i.jpg",
        "v1769181011/Rapotin/LL401877-HDR-min_e4p2ju.jpg",
        "v1769181011/Rapotin/LL401901-HDR-min_vdyi04.jpg",
        "v1769181777/Rapotin/ChatGPT_Image_Jan_23_2026_04_22_24_PM_eq3xro.png"

      ]
    },
    {
      price: "4 790 000 Kč",
      number: "Byt č.5",
      floor: "2NP A",
      layout: "2kk",
      size: "39,86 m2",
      terasa: "",
      parking: "",
      priceVynos: "15 000 Kč",
      vynos: "180 000 Kč",
      link: "/cervenydvur/byt/?Id=5",
      reserved: false,
      category: "Wellness Suite",
      categoryDescription:
        "Wellness suite s privátní saunou a vířivou vanou – určená pro náročné hosty i prémiový pronájem.",
      apText:
        <>
          Byt je navržen jako <b>wellness suite</b> s důrazem na relax a zážitek. Součástí je <b>privátní sauna, vířivá vana a nová koupelna</b>. <br /><br />Aktuálně probíhá administrativní proces změny stavby před dokončením a rozdělení původní větší jednotky. <b>Zápis jednotky do katastru: 11/2026</b>.
        </>,
      colOneTitle: "Hlavní benefity bytu",
      colOneText: (
        <>
          <li><b>Privátní sauna přímo v bytě</b>.</li>
          <li><b>Vířivá vana</b> – výrazný nadstandard.</li>
          <li><b>Nová koupelna</b> v rámci rekonstrukce.</li>
          <li>Dispozice <b>2kk</b> – vhodná i pro vícedenní pobyty.</li>
        </>
      ),

      colTwoTitle: "Rekonstrukce a standard",
      colTwoDescription:
        <>
          Konkrétní část bytu projde rekonstrukcí – realizována bude <b>nová podlaha</b> a kompletní úpravy koupelny a wellness části. Standard je navržen s cílem posunout jednotku do prémiové kategorie vhodné pro vyšší cenovou hladinu pronájmu.
        </>,
      colTwoClaim:
        <>
          <b>Kuchyňská linka není součástí ceny.</b> Kupující má možnost zvolit vlastní řešení dle preferovaného standardu nebo investiční strategie.
        </>,
      colTwoDownloadDesc:
        "Na vyžádání připravíme návrh řešení, technický popis a doporučení vhodné skladby vybavení pro maximální výnos.",

      colThreeTitle: "Právní stav a investiční potenciál",
      colThreeDesc: (
        <>
          <li><b>Zápis do katastru nemovitostí: 11/2026</b>.</li>
          <li>Jednotka vzniká rozdělením původního většího bytu.</li>
          <li>Wellness vybavení umožňuje <b>vyšší nájemné</b> než standardní jednotky.</li>
          <li>Vhodné pro krátkodobý i prémiový rekreační pronájem.</li>
        </>
      ),
      colThreeNote:
        "Suite se saunou patří dlouhodobě mezi nejžádanější typy jednotek v horských a rekreačních lokalitách.",


      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: [
        "v1769182359/Rapotin/ChatGPT_Image_Jan_4_2026_05_33_36_PM_1_pkvgoj.png",
        "v1773389510/Rapotin/A_B5_gv6xe6.png",
        "v1773847282/Rapotin/Exterier_03_26/A5Pudorys_xyw9ln.png",
        "v1773847282/Rapotin/Exterier_03_26/A5Pudorys_xyw9ln.png",
      ]
    },
    {
      price: "",
      number: "Byt č.6",
      floor: "2NP A",
      layout: "1kk",
      size: "25,88 m2",
      terasa: "",
      parking: "",
      priceVynos: "",
      vynos: "",
      link: "/cervenydvur/byt/?Id=6",
      reserved: true,
      category: "Komfort",
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: ["v1763461562/Rapotin/Text_odstavce_ofjnms.jpg"]
    },
    {
      price: "",
      number: "Byt č.7",
      floor: "2NP A",
      layout: "1kk",
      size: "24,57 m2",
      terasa: "",
      parking: "",
      priceVynos: "",
      vynos: "",
      link: "/cervenydvur/byt/?Id=7",
      reserved: true,
      category: "Suite",
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: ["v1763461562/Rapotin/Text_odstavce_ofjnms.jpg"]
    },
    {
      price: "",
      number: "Byt č.8",
      floor: "2NP A",
      layout: "4kk",
      size: "100m2",
      terasa: "",
      parking: "",
      priceVynos: "",
      vynos: "",
      link: "/cervenydvur/byt/?Id=8",
      reserved: true,
      category: "Rodinný Superior",
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: ["v1763461562/Rapotin/Text_odstavce_ofjnms.jpg"]
    },
    {
      price: "2 900 000 Kč",
      number: "Byt č.9",
      floor: "3NP A",
      layout: "1kk",
      size: "30,11 m2",
      terasa: "",
      parking: "",
      priceVynos: "13 000 Kč",
      vynos: "168 000 Kč",
      link: "/cervenydvur/byt/?Id=9",
      reserved: true, // Andrassi
      category: "Komfort",
      categoryDescription:
        "Podkrovní byt v nejvyšším patře domu s výhledem do zahrady – výjimečná poloha, světlo a soukromí.",
      apText:
        <>
          Byt se nachází v <b>podkroví – nejvyšším patře domu</b>, díky čemuž nabízí <b>nejlepší výhled v celém objektu</b> a maximální soukromí. <br /><br />Jednotka je ve stavu <b>rozestavěno</b> – převod plánován <b>03–04/2026</b>. Standardní dokončení je plánováno na <b>10/2026</b>, Dokončení jednotky zajišťuje investor prostřednictvím svých realizačních týmů. Pokud je hlavní realizační parta kapacitně vytížená, lze jednotku dokončit dříve pomocí paralelního realizačního týmu, vždy pod řízením investora a v jednotném standardu. <br /><br /><b>Zvýhodněná cena platí do konce března.</b>
        </>,
      colOneTitle: "Hlavní benefity bytu",
      colOneText: (
        <>
          <li><b>Podkrovní byt</b> v nejvyšším patře domu.</li>
          <li><b>Výhled do zahrady</b> a klidného areálu.</li>
          <li>Nejvíce světla a <b>nejvyšší míra soukromí</b>.</li>
          <li><b>Top jednotka v domě</b> z pohledu polohy.</li>
        </>
      ),

      colTwoTitle: "Stav, dokončení a vybavení",
      colTwoDescription:
        "Byt se převádí ve stavu rozestavěno. Kupující má možnost zvolit standardní postup dokončení, nebo využít externí realizační firmu a dokončit byt v kratším termínu dle vlastních preferencí.",
      colTwoClaim:
        <>

          <b>Klimatizace</b> je u této jednotky plánována jako součást vybavení v ceně.
        </>,
      colTwoDownloadDesc:
        "V PDF najdete standardní rozsah dokončení. Rádi upřesníme harmonogram, možnosti zrychlení i orientační rozpočet.",

      colThreeTitle: "Harmonogram a obchodní podmínky",
      colThreeDesc: (
        <>
          <li><b>Převod rozestavěné jednotky: 03–04/2026</b>.</li>
          <li><b>Standardní dokončení: 10/2026</b>.</li>
          <li>V případě zájmu <b> je možné zajistit prioritní dokončení jednotky </b> při zachování stejného standardu a technického dozoru investora.</li>
          <li><b>Zvýhodněná cena platná do konce března</b>.</li>
        </>
      ),
      colThreeNote:
        "Byt je ideální pro kupující, kteří hledají nejlepší jednotku v domě a chtějí spojit výhodnou cenu s potenciálem rychlého dokončení.",

      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: [
        "v1773389507/Rapotin/A_B9_u0gxab.png",
       "v1773847282/Rapotin/Exterier_03_26/A9Pudorys_fapix6.png",
        "v1773847294/Rapotin/Exterier_03_26/A9Exterier_klonug.png",
      ]
    },
    {
      price: "3 390 000 Kč",
      number: "Byt č.10",
      floor: "3NP A",
      layout: "2kk",
      size: "40,18 m2",
      terasa: "",
      parking: "",
      priceVynos: "15 500 Kč",
      vynos: "186 000 Kč",
      link: "/cervenydvur/byt/?Id=10",
      reserved: true, // novotný
      category: "Suite",
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: ["v1764237724/Rapotin/karty/A_B10_ilqvu3.png"]
    },
    {
      price: "3 490 000 Kč",
      number: "Byt č.11",
      floor: "3NP A",
      layout: "2kk",
      size: "48,81 m2",
      terasa: "",
      parking: "",
      priceVynos: "15 500 Kč",
      vynos: "186 000 Kč",
      link: "/cervenydvur/byt/?Id=11",
      category: "Suite",
      reserved: true, //prudkovi
      category: "Suite",
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: [
        "v1773389508/Rapotin/A_B11_iohpzn.png",
        "v1773847284/Rapotin/Exterier_03_26/A11Pudorys_ce15wf.png",
        "v1773847295/Rapotin/Exterier_03_26/A11Exterier_uq8yv3.png",
      ]
    },
       {
      price: "2 990 000 Kč",
      number: "Byt č.12",
      floor: "3NP A",
      layout: "1kk",
      size: "24,19 m2",
      terasa: "",
      parking: "",
      priceVynos: "11 000 Kč",
      category: "Komfort",
      categoryDescription:
        "Prémiová jednotka s důrazem na komfort, design a nadstandardní vybavení – ideální pro vlastní bydlení i prémiový pronájem.",
      apText:
        <>
          Jednotka se převádí ve stavu <b>rozestavěno</b>. <b>Převod je plánován na 03–04/2026</b>. <br /><br />Standardní dokončení je plánováno na <b>10/2026</b>. V případě zájmu je možné zajistit <b>prioritní dokončení jednotky</b> v kratším termínu, vždy při zachování stejného standardu a technického dohledu investora.
        </>,
      colOneTitle: "Prémiové vybavení",
      colOneText: (
        <>
          <li><b>Elektrický krb</b> – atmosféra a komfort po celý rok.</li>
          <li><b>Klimatizace</b> pro maximální pohodlí.</li>
          <li><b>Dvě koupelny</b> – výrazný nadstandard.</li>
          <li>Promyšlené řešení vhodné i pro vícelůžkové nebo rodinné využití.</li>
        </>
      ),
      colTwoTitle: "Design a standard",
      colTwoDescription:
        <>
          Jednotka je navržena v <b>prémiovém designu</b> s důrazem na detail, kvalitu materiálů a dlouhodobou nadčasovost. Vybavení odpovídá vyšší kategorii a je cílené na náročnější klientelu.
        </>,
      colTwoClaim:
        <>
          <b>Dokončení probíhá vždy pod řízením investora</b>. Případné zrychlení termínu znamená posílení realizační kapacity, nikoliv změnu kvality nebo standardu.
        </>,
      colTwoDownloadDesc:
        "Detailní rozsah standardu, vybavení a harmonogram dokončení rádi poskytneme na vyžádání.",

      colThreeTitle: "Harmonogram a jistoty",
      colThreeDesc: (
        <>
          <li><b>Převod rozestavěné jednotky: 03–04/2026</b>.</li>
          <li><b>Standardní dokončení: 10/2026</b>.</li>
          <li>Možnost <b>prioritního dokončení</b> v kratším termínu.</li>
          <li> Po kolaudaci nabízí byt č. 12 možnost budoucího rozdělení na dvě jednotky</li>
        </>
      ),
      colThreeNote:
        "Prémiová dispozice a vybavení umožňují nastavení vyššího nájemného i silnější pozici při dalším prodeji.",
      vynos: "132 000 Kč",
      link: "/cervenydvur/byt/?Id=12",
      reserved: true, // unicredit hypo
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: [
        "v1773406649/Rapotin/A_B12_tx6wyy.png",
        "v1773847283/Rapotin/Exterier_03_26/A12Pudorys_dv8zo2.png",
        "v1773847300/Rapotin/Exterier_03_26/A12Exterier_pdnogl.png"
      ]
    },
    {
      price: "4 690 000 Kč",
      number: "Byt č.13",
      floor: "3NP A",
      layout: "2kk",
      size: "51,72 m2",
      terasa: "",
      parking: "",
      priceVynos: "15 000 Kč",
      category: "Suite",
      categoryDescription:
        "Prémiová jednotka s důrazem na komfort, design a nadstandardní vybavení – ideální pro vlastní bydlení i prémiový pronájem.",
      apText:
        <>
          Jednotka se převádí ve stavu <b>rozestavěno</b>. <b>Převod je plánován na 03–04/2026</b>. <br /><br />Standardní dokončení je plánováno na <b>10/2026</b>. V případě zájmu je možné zajistit <b>prioritní dokončení jednotky</b> v kratším termínu, vždy při zachování stejného standardu a technického dohledu investora.
        </>,
      colOneTitle: "Prémiové vybavení",
      colOneText: (
        <>
          <li><b>Elektrický krb</b> – atmosféra a komfort po celý rok.</li>
          <li><b>Klimatizace</b> pro maximální pohodlí.</li>
          <li><b>Dvě koupelny</b> – výrazný nadstandard.</li>
          <li>Promyšlené řešení vhodné i pro vícelůžkové nebo rodinné využití.</li>
        </>
      ),
      colTwoTitle: "Design a standard",
      colTwoDescription:
        <>
          Jednotka je navržena v <b>prémiovém designu</b> s důrazem na detail, kvalitu materiálů a dlouhodobou nadčasovost. Vybavení odpovídá vyšší kategorii a je cílené na náročnější klientelu.
        </>,
      colTwoClaim:
        <>
          <b>Dokončení probíhá vždy pod řízením investora</b>. Případné zrychlení termínu znamená posílení realizační kapacity, nikoliv změnu kvality nebo standardu.
        </>,
      colTwoDownloadDesc:
        "Detailní rozsah standardu, vybavení a harmonogram dokončení rádi poskytneme na vyžádání.",

      colThreeTitle: "Harmonogram a jistoty",
      colThreeDesc: (
        <>
          <li><b>Převod rozestavěné jednotky: 03–04/2026</b>.</li>
          <li><b>Standardní dokončení: 10/2026</b>.</li>
          <li>Možnost <b>prioritního dokončení</b> v kratším termínu.</li>
          <li> Po kolaudaci nabízí byt č. 12 možnost budoucího rozdělení na dvě jednotky</li>
        </>
      ),
      colThreeNote:
        "Prémiová dispozice a vybavení umožňují nastavení vyššího nájemného i silnější pozici při dalším prodeji.",
      vynos: "180 000 Kč",
      link: "/cervenydvur/byt/?Id=13",
      reserved: true, // unicredit hypo
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: [
        "v1773406689/Rapotin/A_B13_wqrazt.png",
        "v1773847283/Rapotin/Exterier_03_26/A13Pudorys_e9ocru.png",
        "v1773847303/Rapotin/Exterier_03_26/A13Exterier_xsobr5.png",
      ]
    },
    {
      price: "2 970 000 Kč",
      number: "Byt č.14",
      floor: "3NP B",
      layout: "1kk",
      size: "32,71 m2",
      terasa: "",
      parking: "",
      priceVynos: "13 000 Kč",
      vynos: "168 000 Kč",
      category: "Komfort",
      link: "/cervenydvur/byt/?Id=14",
      reserved: true, // Kocian
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: ["v1764237724/Rapotin/karty/A_B13_vc3y6b.png"]
    },
     // 15 wellness
    {
      price: "",
      number: "Byt č.16",
      floor: "1NP B",
      layout: "3kk",
      size: "82,20 m2",
      terasa: "",
      parking: "",
      priceVynos: "",
      vynos: "",
      link: "/cervenydvur/byt/?Id=16",
      category: "Rodinný superior",
      reserved: true, // držení na FO
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: ["v1763461562/Rapotin/Text_odstavce_ofjnms.jpg"]
    },
   
    {
      price: "3 390 000 Kč",
      number: "Byt č.17",
      floor: "2NP B",
      layout: "2kk",
      size: "35,58 m2",
      terasa: "",
      parking: "",
      priceVynos: "15 000 Kč",
      vynos: "180 000 Kč",
      link: "/cervenydvur/byt/?Id=17",
      category: "Suite",
      reserved: true, // Tom - Novotný
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: ["v1769163530/Rapotin/B_B16_luyd29.png",
        "v1765973185/Rapotin/B16Pudorys_buxjta.png",
        "v1765973186/Rapotin/B16Pudorys_2_cabvsg.png",
      ]
    },
    {
      price: "",
      number: "Byt č.18",
      floor: "2NP B",
      layout: "1kk",
      size: "24,95 m2",
      terasa: "",
      parking: "",
      priceVynos: "",
      vynos: "",
      link: "/cervenydvur/byt/?Id=18",
      category: "Komfort",
      reserved: true, // Tom - Livanský
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: ["v1763461562/Rapotin/Text_odstavce_ofjnms.jpg"]
    },
    {
      price: "",
      number: "Byt č.19",
      floor: "2NP B",
      layout: "1kk",
      size: "34,87 m2",
      terasa: "",
      parking: "",
      priceVynos: "",
      vynos: "",
      link: "/cervenydvur/byt/?Id=19",
      category: "Komfort",
      reserved: true, // čimera
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: ["v1763461562/Rapotin/Text_odstavce_ofjnms.jpg"]
    },
    {
      price: "",
      number: "Byt č.20",
      floor: "2NP B",
      layout: "1kk",
      size: "25,02 m2",
      terasa: "",
      parking: "",
      priceVynos: "",
      vynos: "",
      link: "/cervenydvur/byt/?Id=20",
      category: "Komfort",

      reserved: true, // čimera
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: ["v1763461562/Rapotin/Text_odstavce_ofjnms.jpg"]
    },

    {
      price: "4 900 000 Kč",
      number: "Byt č.21",
      floor: "3NP B",
      layout: "3kk",
      size: "65,14 m2",
      terasa: "",
      parking: "",
      priceVynos: "18 400 Kč",
      vynos: "220 800 Kč",
      link: "/cervenydvur/byt/?Id=21",
      category: "👑 Premium Suite",
      categoryDescription:
        "Prémiová jednotka s důrazem na komfort, design a nadstandardní vybavení – ideální pro vlastní bydlení i prémiový pronájem.",
      apText:
        <>
          Jednotka se převádí ve stavu <b>rozestavěno</b>. <b>Převod je plánován na 03–04/2026</b>. <br /><br />Standardní dokončení je plánováno na <b>10/2026</b>. V případě zájmu je možné zajistit <b>prioritní dokončení jednotky</b> v kratším termínu, vždy při zachování stejného standardu a technického dohledu investora.
        </>,
      colOneTitle: "Prémiové vybavení",
      colOneText: (
        <>
          <li><b>Elektrický krb</b> – atmosféra a komfort po celý rok.</li>
          <li><b>Klimatizace</b> pro maximální pohodlí.</li>
          <li><b>Dvě koupelny</b> – výrazný nadstandard.</li>
          <li>Promyšlené řešení vhodné i pro vícelůžkové nebo rodinné využití.</li>
        </>
      ),

      colTwoTitle: "Design a standard",
      colTwoDescription:
        <>
          Jednotka je navržena v <b>prémiovém designu</b> s důrazem na detail, kvalitu materiálů a dlouhodobou nadčasovost. Vybavení odpovídá vyšší kategorii a je cílené na náročnější klientelu.
        </>,
      colTwoClaim:
        <>
          <b>Dokončení probíhá vždy pod řízením investora</b>. Případné zrychlení termínu znamená posílení realizační kapacity, nikoliv změnu kvality nebo standardu.
        </>,
      colTwoDownloadDesc:
        "Detailní rozsah standardu, vybavení a harmonogram dokončení rádi poskytneme na vyžádání.",

      colThreeTitle: "Harmonogram a jistoty",
      colThreeDesc: (
        <>
          <li><b>Převod rozestavěné jednotky: 03–04/2026</b>.</li>
          <li><b>Standardní dokončení: 10/2026</b>.</li>
          <li>Možnost <b>prioritního dokončení</b> v kratším termínu.</li>

        </>
      ),
      colThreeNote:
        "Prémiová dispozice a vybavení umožňují nastavení vyššího nájemného i silnější pozici při dalším prodeji.",
      reserved: true, // Markéta dar, držíme dlouhodobě  
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: [
        "v1769431024/Rapotin/ChatGPT_Image_Jan_26_2026_01_36_16_PM_plnveh.png",
        "v1769431024/Rapotin/ChatGPT_Image_Jan_26_2026_01_34_32_PM_fzproo.png",
        "v1773389508/Rapotin/B_B21_kqh50f.png",
        "v1773847282/Rapotin/Exterier_03_26/B21Pudorys_w7qigo.png",
        "v1773847310/Rapotin/Exterier_03_26/B21Exterier_2_hsmdc7.png",
        "v1773847309/Rapotin/Exterier_03_26/B21Exterier_1_smrscp.png",
      ]
    },

    {
      price: "",
      number: "Byt č.22",
      floor: "3NP B",
      layout: "2kk",
      size: "81,38 m2",
      terasa: "",
      parking: "",
      priceVynos: "",
      vynos: "",
      link: "/cervenydvur/byt/?Id=21",
      category: "Suite",
      reserved: true, // čimera
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: ["v1763461562/Rapotin/Text_odstavce_ofjnms.jpg"]
    },

    {
      price: "",
      number: "Byt č.23",
      floor: "3NP B",
      layout: "2kk",
      size: "52,56 m2",
      terasa: "",
      parking: "",
      priceVynos: "",
      vynos: "",
      link: "/cervenydvur/byt/?Id=22",
      category: "Suite",
      reserved: true, // čimera
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: ["v1763461562/Rapotin/Text_odstavce_ofjnms.jpg"]
    },

    {
      price: "2 710 000 Kč",
      number: "Byt č.24",
      floor: "2NP B",
      layout: "2kk",
      size: "39,58 m2",
      terasa: "",
      parking: "",
      priceVynos: "14 000 Kč",
      vynos: "149 050 Kč",
      link: "/cervenydvur/byt/?Id=25",
      category: "Suite",
      reserved: true, // čimera
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: ["v1763461562/Rapotin/Text_odstavce_ofjnms.jpg"]
    },

    {
  price: "3 590 000 Kč",
  number: "Byt č.26",
  floor: "2NP C",
  layout: "1kk",
  size: "28,04 m2",
  terasa: "",
  parking: "",
  priceVynos: "13 000 Kč",
  vynos: "168 000 Kč",
  link: "/cervenydvur/byt/?Id=26",
  category: "Modern Studio",
  categoryDescription:
    "Moderní byty v části C s přímým vnitřním propojením na kavárnu, hernu a dětský koutek.",
  apText:
    <>
      Byty v části C představují <b>moderní část projektu</b> s odlišným architektonickým a interiérovým pojetím. Design je čistý, současný a navržený s důrazem na funkčnost, světlo a dlouhodobou nadčasovost. <br /><br /><b>Hlavní výhodou části C je přímé vnitřní propojení</b> s kavárnou, hernou a dětským koutkem v 1. NP části C – <b>bez nutnosti chodit venkovními prostory</b>, což je rozdíl oproti částem A a B. <br /><br />Jednotky se převádějí ve stavu <b>rozestavěno</b>. <b>Převod je plánován na 03–04/2026</b>, standardní dokončení pak na <b>10/2026</b>.
    </>,
  colOneTitle: "Výhody části C",
  colOneText: (
    <>
      <li><b>Přímé vnitřní propojení</b> na kavárnu, hernu a dětský koutek.</li>
      <li>Komfortní pohyb v rámci objektu <b>bez nutnosti vycházet ven</b>.</li>
      <li>Ideální řešení pro jednotlivce, páry i krátkodobé pobyty.</li>
      <li>Výrazná konkurenční výhoda oproti částem A a B.</li>
    </>
  ),
  colTwoTitle: "Stav a dokončení",
  colTwoDescription:
    "Jednotka se převádí ve stavu rozestavěno. Kupující může využít standardní harmonogram dokončení, nebo zvolit variantu prioritního dokončení v kratším termínu.",
  colTwoClaim:
    <>
      <b>Prioritní dokončení</b> znamená posílení realizační kapacity při zachování stejného standardu, kvality provedení a technického dohledu investora.
    </>,
  colTwoDownloadDesc:
    "Detailní rozsah standardu, vybavení a harmonogram dokončení rádi upřesníme individuálně.",
  colThreeTitle: "Harmonogram a jistoty",
  colThreeDesc: (
    <>
      <li><b>Převod rozestavěné jednotky: 03–04/2026</b>.</li>
      <li><b>Standardní dokončení: 10/2026</b>.</li>
      <li>Možnost <b>prioritního dokončení v kratším termínu</b>.</li>
      <li>Jednotný standard a odpovědnost investora.</li>
    </>
  ),
  colThreeNote:
    "Část C nabízí nejvyšší uživatelský komfort díky vnitřnímu propojení služeb a modernímu pojetí bydlení.",
  reserved: false,
  sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
  gallery: [
    "v1765973507/Rapotin/C_B26_iemomn.png",
    "v1773847283/Rapotin/Exterier_03_26/C26Pudorys_a5lsfv.png",
    "v1773847310/Rapotin/Exterier_03_26/C26Exterier_bprecz.png",
  ]
},
   {
  price: "3 890 000 Kč",
  number: "Byt č.27",
  floor: "2NP C",
  layout: "1kk",
  size: "35,41 m2",
  terasa: "",
  parking: "",
  priceVynos: "15 500 Kč",
  vynos: "186 000 Kč",
  link: "/cervenydvur/byt/?Id=27",
  category: "Modern Studio",
  categoryDescription:
    "Moderní byty v části C s přímým vnitřním propojením na kavárnu, hernu a dětský koutek.",

  tagline: "Prostorné studio se třemi okny a výjimečným množstvím světla",

  akceBanner: "Akce: zvýšení garantovaného výnosu na 15 500 Kč do 30. 6. 2026 a kuchyň zdarma",

  apText: (
    <>
      Byt č.27 je jedním z nejsvětlejších apartmánů v části C –{" "}
      <b>tři okna</b> zajišťují výjimečné denní světlo po celý den.
      Dispozice 1kk je navržena s důrazem na funkčnost a nadčasový design.
      <br /><br />
      <b>Hlavní výhodou části C je přímé vnitřní propojení</b> s kavárnou,
      hernou a dětským koutkem –{" "}
      <b>bez nutnosti vycházet ven</b>, což je rozdíl oproti částem A a B.
      <br /><br />
      Předání plánujeme na <b>leden 2027</b>.
    </>
  ),

  colOneTitle: "Výhody bytu č.27",
  colOneText: (
    <>
      <li><b>Tři okna</b> – nejvíce světla ze všech studií v části C</li>
      <li>Přímé vnitřní propojení na kavárnu, hernu a dětský koutek</li>
      <li>Komfortní pohyb v rámci objektu bez nutnosti vycházet ven</li>
      <li>Konkurenční výhoda oproti částem A a B</li>
      <li>Předání leden 2027 jako bytová jednotka</li>
    </>
  ),

  colTwoTitle: "Stav a dokončení",
  colTwoDescription: "",
  colTwoClaim: (
    <>
      <b>Nábytek není součástí kupní ceny.</b> Investor si ho zajišťuje
      samostatně po předání jednotky. Orientační náklad na kompletní
      vybavení nábytkem je <b>cca 150 000 Kč</b>.
    </>
  ),
  colTwoDownloadDesc:
    "Detailní rozsah standardu, vybavení a harmonogram dokončení rádi upřesníme individuálně.",

  colThreeTitle: "Harmonogram a jistoty",
  colThreeDesc: (
    <>
      <li>Záloha <b>10 % při podpisu smlouvy</b> na projektový účet RB — bankovní úschova</li>
      <li><b>Dokončení jako bytová jednotka: leden 2027</b></li>
      <li>Odpovědnost a dohled investora po celou dobu výstavby</li>
    </>
  ),
  colThreeNote: "",

  proKoho: [
    {
      icon: "💼",
      title: "Pasivní investor",
      text: "Menší jednotka, která vydělává bez vaší účasti. Kompletní správu, fakturaci i obsazenost řeší resort za vás.",
    },
    {
      icon: "🏔️",
      title: "Investor + rekreace",
      text: "Kombinujte investici s vlastním využitím. Apartmán si rezervujete pro sebe, zbytek roku generuje výnos.",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Rodiny s dětmi",
      text: "Přímé propojení s hernou a dětským koutkem v 1. NP – bez nutnosti vycházet z části C.",
    },
    {
      icon: "📊",
      title: "Diverzifikace portfolia",
      text: "Nižší vstupní cena oproti větším jednotkám. Konkrétní investiční parametry, snadnější likvidita.",
    },
  ],

  vynosInfo: {
    headline: "15 500 Kč za měsíc",
    description:
      "Výnos je garantován developerem. Resort zajišťuje kompletní provoz, obsazenost a fakturaci – majitel neprovozuje nic sám.",
    items: [
      "Platí od prvního dne po předání – bez čekání na obsazenost",
      "Zahrnuje správu, údržbu i rezervační systém",
      "Možnost vlastního využití 10 dní v roce",
    ],
  },

  galleryLabels: [
    "Ložnice",
    "Obývací pokoj",
    "Kuchyňský kout",
    "Koupelna",
    "Chodba část C",
    "Půdorys – Byt č.27",
    "Umístění v domě",
    "Umístění v domě z venku",
    "Wellness",
    "Wellness",
    "Wellness",
    "Wellness",
    "Wellness",
    "Dětský koutek v části C",
    "Snídaně v kavárně v části C",
    "Snídaně v kavárně v části C"
  ],

  reserved: false,
  sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
  gallery: [
    "v1778264303/Rapotin/ChatGPT_Image_May_8_2026_08_16_03_PM_w6pciv.png",
    "v1778264304/Rapotin/ChatGPT_Image_May_8_2026_08_14_36_PM_ztvwn2.png",
    "v1778264302/Rapotin/ChatGPT_Image_May_8_2026_08_13_30_PM_ckctlc.png",
    "v1778264302/Rapotin/ChatGPT_Image_May_8_2026_08_17_57_PM_fvatm1.png",
    "v1778263804/Rapotin/ChatGPT_Image_May_8_2026_08_09_37_PM_azfm6o.png",
    "v1773389509/Rapotin/C_B27_nwjhzw.png",
    "v1773847285/Rapotin/Exterier_03_26/C27Pudorys_dzqdyd.png",
    "v1773847307/Rapotin/Exterier_03_26/C27Exterier_hj3tpx.png",

    // wellness
    "v1773849235/Rapotin/DSC07004_1_grjrxp.jpg",
    "v1773849227/Rapotin/DSC07001_1_fvvlxh.jpg",
    "v1773849227/Rapotin/DSC07009_1_n8rixd.jpg",
    "v1773849229/Rapotin/DSC06991_1_moequq.jpg",
    "v1773849236/Rapotin/DSC07020_1_xym9hm.jpg",

    //detsky koutek 
    "v1778316892/Rapotin/DSC01271_wjctji.jpg",

    // Snídaně
    "v1778316898/Rapotin/snidane_gezxcj.png",
    "v1778316895/Rapotin/snidane_2_czfu9h.png"
  ],
},
    {
      price: "3 790 000 Kč",
      number: "Byt č.28",
      floor: "2NP C",
      layout: "1kk",
      size: "31,03 m2",
      terasa: "",
      parking: "",
      priceVynos: "15 500 Kč",
      vynos: "186 000 Kč",
      link: "/cervenydvur/byt/?Id=28",
      category: "Modern Studio",
      categoryDescription:
        "Moderní byty v části C s přímým vnitřním propojením na kavárnu, hernu a dětský koutek.",
     apText: (
        <>
          Byty v části C představují moderní část projektu s odlišným
          architektonickým a interiérovým pojetím. Design je čistý, současný
          a navržený s důrazem na funkčnost a nadčasovost.
          <br /><br />
          Hlavní výhodou části C je <b>přímé vnitřní propojení</b> s kavárnou,
          hernou a dětským koutkem – bez nutnosti vycházet ven, což je
          rozdíl oproti částem A a B.
          <br /><br />
          Předání plánujeme na <b>leden 2027</b>.
        </>
      ),
      colOneTitle: "Výhody části C",
      colOneText: (
        <>
          <li>Přímé vnitřní propojení na kavárnu, hernu a dětský koutek</li>
          <li>Komfortní pohyb v rámci objektu bez nutnosti vycházet ven</li>
          <li>Ideální pro rodiny s dětmi i krátkodobé pobyty</li>
          <li>Konkurenční výhoda oproti částem A a B</li>
          <li>Předání leden 2027 jako bytová jednotka</li>
        </>
      ),

      colTwoTitle: "Stav a dokončení",
      colTwoDescription:
        "",
      colTwoClaim:
        <>
          <b>Nábytek není součástí kupní ceny.</b> Investor si ho hradí samostatně po předání jednotky. Orientační náklad na kompletní vybavení nábytkem je <b>150 000 Kč</b> včetně montáže z naší strany
        </>,
      colTwoDownloadDesc:
        "Detailní rozsah standardu, vybavení a harmonogram dokončení rádi upřesníme individuálně podle konkrétní jednotky.",

      colThreeTitle: "Harmonogram a jistoty",
      colThreeDesc: (
        <>
              <li>Záloha <b>10 % při podpisu smlouvy</b> na projektový účet RB — bankovní úschova</li>
              <li><b>Dokončení jako bytová jednotka: leden 2027</b></li>
              <li>Odpovědnost a dohled investora po celou dobu výstavby</li>        </>
      ),
      colThreeNote:
        "Část C nabízí nejvyšší uživatelský komfort díky vnitřnímu propojení služeb a modernímu pojetí bydlení.",
      reserved: false,
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: [
        "v1778263365/Rapotin/ChatGPT_Image_May_8_2026_07_45_38_PM_s5fx9t.png",
        "v1778263365/Rapotin/ChatGPT_Image_May_8_2026_07_44_22_PM_nqrdyt.png",
        "v1778263365/Rapotin/ChatGPT_Image_May_8_2026_07_48_52_PM_gztdfu.png",
        "v1778263365/Rapotin/ChatGPT_Image_May_8_2026_07_57_55_PM_vuuvue.png",
        "v1778263365/Rapotin/ChatGPT_Image_May_8_2026_07_59_21_PM_x3sc61.png",
        "v1778263804/Rapotin/ChatGPT_Image_May_8_2026_08_09_37_PM_azfm6o.png",
        "v1773389509/Rapotin/C_B28_ted0or.png",
        "v1773847283/Rapotin/Exterier_03_26/C28Pudorys_p7iupy.png",
        "v1773847313/Rapotin/Exterier_03_26/C28Exterier_nk5ckt.png"
      ],
       // --- NOVÁ POLE ---

  // Krátký podnadpis pod název bytu v hero sekci (ApSectionOne)
  tagline: "Apartmán s garantovaným výnosem a výhledem na řeku",

  // Akce – zobrazí se jako zlatý banner pod hero stripem
  akceBanner: "Akce: zvýšení garantovaný výnos na 15 500 Kč do 30. 6. 2026 a kuchyň zdarma",

  // Blok „Pro koho je apartmán vhodný" (ApSectionFour)
  proKoho: [
    {
      icon: "💼",
      title: "Pasivní investor",
      text: "Menší jednotka, která vydělává bez vaší účasti. Kompletní správu, fakturaci i obsazenost řeší resort za vás.",
    },
    {
      icon: "🏔️",
      title: "Investor + rekreace",
      text: "Kombinujte investici s vlastním využitím. Apartmán si rezervujete pro sebe, zbytek roku generuje výnos.",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Rodiny s dětmi",
      text: "Přímé propojení s hernou a dětským koutkem v 1. NP – bez nutnosti vycházet z části C.",
    },
    {
      icon: "📊",
      title: "Diverzifikace portfolia",
      text: "Nižší vstupní cena oproti větším jednotkám. Konkrétní investiční parametry, snadnější likvidita.",
    },
  ],

  // Vysvětlení garantovaného výnosu
  vynosInfo: {
    headline: "15 500 kč za měsíc",
    description:
      "Výnos je garantován developerem. Resort zajišťuje kompletní provoz, obsazenost a fakturaci – majitel neprovozuje nic sám.",
    items: [
      "Platí od prvního dne po předání – bez čekání na obsazenost",
      "Zahrnuje správu, údržbu i rezervační systém",
      "Možnost vlastního využití 10 dní v roce",
    ],
  },

  // Kontaktní osoba
  contactPerson: {
    name: "Bc. Markéta Dvořáková, MBA",
    role: "Obchodní manažerka projektu",
    phone: "+420 775 561 091",
    email: "info@mori-reality.cz",
    quote: "Ráda vám k bytu č. 28 pošlu podklady, zodpovím dotazy a domluvím prohlídku přímo v resortu.",
    initials: "MD",
    photo: buildImageUrl("v1765194799/T036FSHAT7U-U07EHM8TZEX-69f34a4227c2-512_t7kqrr.jpg",{})
  },

  // Popisky k fotkám v galerii (index odpovídá pořadí v gallery[])
  galleryLabels: [
    "Obývací pokoj",
    "Kuchyňský kout",
    "Ložnice ",
    "Koupelna",
    "Koupelna",
    "Chodba část C",
    "Půdorys – Byt č.28",
    "Umístění v domě",
    "Umístění v domě z venku",
  ],

    },

    {
      price: "2 990 000 Kč",
      number: "Byt č.29",
      floor: "2NP C",
      layout: "1kk",
      size: "22,01 m2",
      terasa: "",
      parking: "",
      priceVynos: "13 000 Kč",
      vynos: "156 000 Kč",
      link: "/cervenydvur/byt/?Id=29",
      category: "Modern Studio",
      categoryDescription:
        "Moderní byty v části C s přímým vnitřním propojením na kavárnu, hernu a dětský koutek.",
      apText:
        <>
          Byty v části C představují <b>moderní část projektu</b> s odlišným architektonickým a interiérovým pojetím. Design je čistý, současný a navržený s důrazem na funkčnost, světlo a dlouhodobou nadčasovost. <br /><br /><b>Hlavní výhodou části C je přímé vnitřní propojení</b> s kavárnou, hernou a dětským koutkem v 1. NP části C – <b>bez nutnosti chodit venkovními prostory</b>, což je rozdíl oproti částem A a B. <br /><br />Jednotky se převádějí ve stavu <b>rozestavěno</b>. <b>Převod je plánován na 03–04/2026</b>, standardní dokončení pak na <b>10/2026</b>.
        </>,
      colOneTitle: "Výhody části C",
      colOneText: (
        <>
          <li><b>Přímé vnitřní propojení</b> na kavárnu, hernu a dětský koutek.</li>
          <li>Komfortní pohyb v rámci objektu <b>bez nutnosti vycházet ven</b>.</li>
          <li>Ideální řešení pro rodiny s dětmi i krátkodobé pobyty.</li>
          <li>Výrazná konkurenční výhoda oproti částem A a B.</li>
        </>
        
      ),

      colTwoTitle: "Stav a dokončení",
      colTwoDescription:
        "Jednotky se převádějí ve stavu rozestavěno. Kupující může využít standardní harmonogram dokončení, nebo zvolit variantu prioritního dokončení jednotky v kratším termínu.",
      colTwoClaim:
        <>
          <b>Prioritní dokončení</b> znamená posílení realizační kapacity při zachování stejného standardu, kvality provedení a technického dohledu investora.
        </>,
      colTwoDownloadDesc:
        "Detailní rozsah standardu, vybavení a harmonogram dokončení rádi upřesníme individuálně podle konkrétní jednotky.",

      colThreeTitle: "Harmonogram a jistoty",
      colThreeDesc: (
        <>
          <li><b>Převod rozestavěné jednotky: 03–04/2026</b>.</li>
          <li><b>Standardní dokončení: 10/2026</b>.</li>
          <li>Možnost <b>prioritního dokončení v kratším termínu</b>.</li>
          <li>Jednotný standard a odpovědnost investora.</li>
        </>
      ),
      colThreeNote:
        "Část C nabízí nejvyšší uživatelský komfort díky vnitřnímu propojení služeb a modernímu pojetí bydlení.",
      reserved: true, // dočasně schované
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: [
        "v1773389509/Rapotin/C_B29_wjj5eq.png",
        "v1773847284/Rapotin/Exterier_03_26/C29Pudorys_al8oh4.png",
        "v1773847324/Rapotin/Exterier_03_26/C29Exterier_2_lkaacn.png"
      ]
    },

    {
      price: "4 490 000 Kč",
      number: "Byt č.30",
      floor: "2NP C",
      layout: "2kk",
      size: "57,10 m2",
      terasa: "",
      parking: "",
      priceVynos: "15 000 Kč",
      vynos: "180 000 Kč",
      link: "/cervenydvur/byt/?Id=30",
      category: "Modern Suite",
      categoryDescription:
        "Moderní byty v části C s přímým vnitřním propojením na kavárnu, hernu a dětský koutek.",
      apText:
        <>
          Byty v části C představují <b>moderní část projektu</b> s odlišným architektonickým a interiérovým pojetím. Design je čistý, současný a navržený s důrazem na funkčnost, světlo a dlouhodobou nadčasovost. <br /><br /><b>Hlavní výhodou části C je přímé vnitřní propojení</b> s kavárnou, hernou a dětským koutkem v 1. NP části C – <b>bez nutnosti chodit venkovními prostory</b>, což je rozdíl oproti částem A a B. <br /><br />Jednotky se převádějí ve stavu <b>rozestavěno</b>. <b>Převod je plánován na 03–04/2026</b>, standardní dokončení pak na <b>10/2026</b>.
        </>,
      colOneTitle: "Výhody části C",
      colOneText: (
        <>
          <li><b>Přímé vnitřní propojení</b> na kavárnu, hernu a dětský koutek.</li>
          <li>Komfortní pohyb v rámci objektu <b>bez nutnosti vycházet ven</b>.</li>
          <li>Ideální řešení pro rodiny s dětmi i krátkodobé pobyty.</li>
          <li>Výrazná konkurenční výhoda oproti částem A a B.</li>
        </>
      ),

      colTwoTitle: "Stav a dokončení",
      colTwoDescription:
        "Jednotky se převádějí ve stavu rozestavěno. Kupující může využít standardní harmonogram dokončení, nebo zvolit variantu prioritního dokončení jednotky v kratším termínu.",
      colTwoClaim:
        <>
          <b>Prioritní dokončení</b> znamená posílení realizační kapacity při zachování stejného standardu, kvality provedení a technického dohledu investora.
        </>,
      colTwoDownloadDesc:
        "Detailní rozsah standardu, vybavení a harmonogram dokončení rádi upřesníme individuálně podle konkrétní jednotky.",

      colThreeTitle: "Harmonogram a jistoty",
      colThreeDesc: (
        <>
          <li><b>Převod rozestavěné jednotky: 03–04/2026</b>.</li>
          <li><b>Standardní dokončení: 10/2026</b>.</li>
          <li>Možnost <b>prioritního dokončení v kratším termínu</b>.</li>
          <li>Jednotný standard a odpovědnost investora.</li>
        </>
      ),
      colThreeNote:
        "Část C nabízí nejvyšší uživatelský komfort díky vnitřnímu propojení služeb a modernímu pojetí bydlení.",
      reserved: false,
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: [
        "v1773389510/Rapotin/C_B30_qfzexp.png",
        "v1773847284/Rapotin/Exterier_03_26/C30Pudorys_fhqalk.png",
        "v1773847328/Rapotin/Exterier_03_26/C30Exterier_2_tk0x0w.png"
      ]
    },

    {
      price: "4 290 000 Kč",
      number: "Byt č.31",
      floor: "2NP C",
      layout: "2kk",
      size: "42,49 m2",
      terasa: "",
      parking: "",
      priceVynos: "15 000 Kč",
      vynos: "180 000 Kč",
      category: "Modern Suite",
      categoryDescription:
        "Moderní byty v části C s přímým vnitřním propojením na kavárnu, hernu a dětský koutek.",
      apText:
        <>
          Byty v části C představují <b>moderní část projektu</b> s odlišným architektonickým a interiérovým pojetím. Design je čistý, současný a navržený s důrazem na funkčnost, světlo a dlouhodobou nadčasovost. <br /><br /><b>Hlavní výhodou části C je přímé vnitřní propojení</b> s kavárnou, hernou a dětským koutkem v 1. NP části C – <b>bez nutnosti chodit venkovními prostory</b>, což je rozdíl oproti částem A a B. <br /><br />Jednotky se převádějí ve stavu <b>rozestavěno</b>. <b>Převod je plánován na 03–04/2026</b>, standardní dokončení pak na <b>10/2026</b>.
        </>,
      colOneTitle: "Výhody části C",
      colOneText: (
        <>
          <li><b>Přímé vnitřní propojení</b> na kavárnu, hernu a dětský koutek.</li>
          <li>Komfortní pohyb v rámci objektu <b>bez nutnosti vycházet ven</b>.</li>
          <li>Ideální řešení pro rodiny s dětmi i krátkodobé pobyty.</li>
          <li>Výrazná konkurenční výhoda oproti částem A a B.</li>
        </>
      ),

      colTwoTitle: "Stav a dokončení",
      colTwoDescription:
        "Jednotky se převádějí ve stavu rozestavěno. Kupující může využít standardní harmonogram dokončení, nebo zvolit variantu prioritního dokončení jednotky v kratším termínu.",
      colTwoClaim:
        <>
          <b>Prioritní dokončení</b> znamená posílení realizační kapacity při zachování stejného standardu, kvality provedení a technického dohledu investora.
        </>,
      colTwoDownloadDesc:
        "Detailní rozsah standardu, vybavení a harmonogram dokončení rádi upřesníme individuálně podle konkrétní jednotky.",

      colThreeTitle: "Harmonogram a jistoty",
      colThreeDesc: (
        <>
          <li><b>Převod rozestavěné jednotky: 03–04/2026</b>.</li>
          <li><b>Standardní dokončení: 10/2026</b>.</li>
          <li>Možnost <b>prioritního dokončení v kratším termínu</b>.</li>
          <li>Jednotný standard a odpovědnost investora.</li>
        </>
      ),
      colThreeNote:
        "Část C nabízí nejvyšší uživatelský komfort díky vnitřnímu propojení služeb a modernímu pojetí bydlení.",
      link: "/cervenydvur/byt/?Id=31",
      reserved: false,
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: [
        "v1773406525/Rapotin/C_B31_v8jeka.png",
        "v1773847285/Rapotin/Exterier_03_26/C31Pudorys_lzsxkd.png",
        "v1773847314/Rapotin/Exterier_03_26/C31Exterier_nvlqut.png"
      ]
    },

    {
      price: "3 290 000 Kč",
      number: "Byt č.32",
      floor: "2NP C",
      layout: "2kk",
      size: "41,15 m2",
      terasa: "",
      parking: "",
      priceVynos: "15 000 Kč",
      category: "Modern Suite",
      categoryDescription:
        "Moderní byty v části C s přímým vnitřním propojením na kavárnu, hernu a dětský koutek.",
      apText:
        <>
          Byty v části C představují <b>moderní část projektu</b> s odlišným architektonickým a interiérovým pojetím. Design je čistý, současný a navržený s důrazem na funkčnost, světlo a dlouhodobou nadčasovost. <br /><br /><b>Hlavní výhodou části C je přímé vnitřní propojení</b> s kavárnou, hernou a dětským koutkem v 1. NP části C – <b>bez nutnosti chodit venkovními prostory</b>, což je rozdíl oproti částem A a B. <br /><br />Jednotky se převádějí ve stavu <b>rozestavěno</b>. <b>Převod je plánován na 03–04/2026</b>, standardní dokončení pak na <b>10/2026</b>.
        </>,
      colOneTitle: "Výhody části C",
      colOneText: (
        <>
          <li><b>Přímé vnitřní propojení</b> na kavárnu, hernu a dětský koutek.</li>
          <li>Komfortní pohyb v rámci objektu <b>bez nutnosti vycházet ven</b>.</li>
          <li>Ideální řešení pro rodiny s dětmi i krátkodobé pobyty.</li>
          <li>Výrazná konkurenční výhoda oproti částem A a B.</li>
        </>
      ),

      colTwoTitle: "Stav a dokončení",
      colTwoDescription:
        "Jednotky se převádějí ve stavu rozestavěno. Kupující může využít standardní harmonogram dokončení, nebo zvolit variantu prioritního dokončení jednotky v kratším termínu.",
      colTwoClaim:
        <>
          <b>Prioritní dokončení</b> znamená posílení realizační kapacity při zachování stejného standardu, kvality provedení a technického dohledu investora.
        </>,
      colTwoDownloadDesc:
        "Detailní rozsah standardu, vybavení a harmonogram dokončení rádi upřesníme individuálně podle konkrétní jednotky.",

      colThreeTitle: "Harmonogram a jistoty",
      colThreeDesc: (
        <>
          <li><b>Převod rozestavěné jednotky: 03–04/2026</b>.</li>
          <li><b>Standardní dokončení: 10/2026</b>.</li>
          <li>Možnost <b>prioritního dokončení v kratším termínu</b>.</li>
          <li>Jednotný standard a odpovědnost investora.</li>
        </>
      ),
      colThreeNote:
        "Část C nabízí nejvyšší uživatelský komfort díky vnitřnímu propojení služeb a modernímu pojetí bydlení.",
      vynos: "180 000 Kč",
      link: "/cervenydvur/byt/?Id=32",
      reserved: true, // Ivan Badík
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: [
        "v1773406489/Rapotin/C_B32_l1am4r.png",
        "v1773847285/Rapotin/Exterier_03_26/C32Pudorys_xbjmfv.png",
        "v1773847318/Rapotin/Exterier_03_26/C32Exterier_drigs7.png"
      ]
    },

    {
      price: "4 090 000 Kč",
      number: "Ubytovací j. č.33",
      floor: "2NP C",
      layout: "2kk",
      size: "37,93 m2",
      category: "Modern Suite",
      categoryDescription:
        "Moderní byty v části C s přímým vnitřním propojením na kavárnu, hernu a dětský koutek.",
      apText:
        <>
          Byty v části C představují <b>moderní část projektu</b> s odlišným architektonickým a interiérovým pojetím. Design je čistý, současný a navržený s důrazem na funkčnost, světlo a dlouhodobou nadčasovost. <br /><br /><b>Hlavní výhodou části C je přímé vnitřní propojení</b> s kavárnou, hernou a dětským koutkem v 1. NP části C – <b>bez nutnosti chodit venkovními prostory</b>, což je rozdíl oproti částem A a B. <br /><br />Jednotky se převádějí ve stavu <b>rozestavěno</b>. <b>Převod je plánován na 03–04/2026</b>, standardní dokončení pak na <b>10/2026</b>.
        </>,
      colOneTitle: "Výhody části C",
      colOneText: (
        <>
          <li><b>Přímé vnitřní propojení</b> na kavárnu, hernu a dětský koutek.</li>
          <li>Komfortní pohyb v rámci objektu <b>bez nutnosti vycházet ven</b>.</li>
          <li>Ideální řešení pro rodiny s dětmi i krátkodobé pobyty.</li>
          <li>Výrazná konkurenční výhoda oproti částem A a B.</li>
        </>
      ),

      colTwoTitle: "Stav a dokončení",
      colTwoDescription:
        "Jednotky se převádějí ve stavu rozestavěno. Kupující může využít standardní harmonogram dokončení, nebo zvolit variantu prioritního dokončení jednotky v kratším termínu.",
      colTwoClaim:
        <>
          <b>Prioritní dokončení</b> znamená posílení realizační kapacity při zachování stejného standardu, kvality provedení a technického dohledu investora.
        </>,
      colTwoDownloadDesc:
        "Detailní rozsah standardu, vybavení a harmonogram dokončení rádi upřesníme individuálně podle konkrétní jednotky.",

      colThreeTitle: "Harmonogram a jistoty",
      colThreeDesc: (
        <>
          <li><b>Převod rozestavěné jednotky: 03–04/2026</b>.</li>
          <li><b>Standardní dokončení: 10/2026</b>.</li>
          <li>Možnost <b>prioritního dokončení v kratším termínu</b>.</li>
          <li>Jednotný standard a odpovědnost investora.</li>
        </>
      ),
      colThreeNote:
        "Část C nabízí nejvyšší uživatelský komfort díky vnitřnímu propojení služeb a modernímu pojetí bydlení.",
      terasa: "",
      parking: "",
      priceVynos: "15 000 Kč",
      vynos: "180 000 Kč",
      link: "/cervenydvur/byt/?Id=33",
      reserved: false,
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: [
        "v1773406461/Rapotin/C_B33_ha8eyz.png",
        "v1773847285/Rapotin/Exterier_03_26/C33Pudorys_bdzulj.png",
        "v1773847318/Rapotin/Exterier_03_26/C34Exterier_bkpiop.png"
      ]
    },
    {
      price: "3 290 000 Kč",
      number: "Byt č.34",
      floor: "2NP C",
      layout: "2kk",
      category: "Modern Residence",
      categoryDescription:
        "Moderní byty v části C s přímým vnitřním propojením na kavárnu, hernu a dětský koutek.",
      apText:
        <>
          Byty v části C představují <b>moderní část projektu</b> s odlišným architektonickým a interiérovým pojetím. Design je čistý, současný a navržený s důrazem na funkčnost, světlo a dlouhodobou nadčasovost. <br /><br /><b>Hlavní výhodou části C je přímé vnitřní propojení</b> s kavárnou, hernou a dětským koutkem v 1. NP části C – <b>bez nutnosti chodit venkovními prostory</b>, což je rozdíl oproti částem A a B. <br /><br />Jednotky se převádějí ve stavu <b>rozestavěno</b>. <b>Převod je plánován na 03–04/2026</b>, standardní dokončení pak na <b>10/2026</b>.
        </>,
      colOneTitle: "Výhody části C",
      colOneText: (
        <>
          <li><b>Přímé vnitřní propojení</b> na kavárnu, hernu a dětský koutek.</li>
          <li>Komfortní pohyb v rámci objektu <b>bez nutnosti vycházet ven</b>.</li>
          <li>Ideální řešení pro rodiny s dětmi i krátkodobé pobyty.</li>
          <li>Výrazná konkurenční výhoda oproti částem A a B.</li>
        </>
      ),

      colTwoTitle: "Stav a dokončení",
      colTwoDescription:
        "Jednotky se převádějí ve stavu rozestavěno. Kupující může využít standardní harmonogram dokončení, nebo zvolit variantu prioritního dokončení jednotky v kratším termínu.",
      colTwoClaim:
        <>
          <b>Prioritní dokončení</b> znamená posílení realizační kapacity při zachování stejného standardu, kvality provedení a technického dohledu investora.
        </>,
      colTwoDownloadDesc:
        "Detailní rozsah standardu, vybavení a harmonogram dokončení rádi upřesníme individuálně podle konkrétní jednotky.",

      colThreeTitle: "Harmonogram a jistoty",
      colThreeDesc: (
        <>
          <li><b>Převod rozestavěné jednotky: 03–04/2026</b>.</li>
          <li><b>Standardní dokončení: 10/2026</b>.</li>
          <li>Možnost <b>prioritního dokončení v kratším termínu</b>.</li>
          <li>Jednotný standard a odpovědnost investora.</li>
        </>
      ),
      colThreeNote:
        "Část C nabízí nejvyšší uživatelský komfort díky vnitřnímu propojení služeb a modernímu pojetí bydlení.",
      size: "42,94 m2",
      terasa: "",
      parking: "",
      priceVynos: "15 000 Kč",
      vynos: "180 000 Kč",
      link: "/cervenydvur/byt/?Id=34",
      reserved: true,
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: [
        "v1773406431/Rapotin/C_B34_xrnqbu.png",
        "v1773847286/Rapotin/Exterier_03_26/C34Pudorys_mgmgnp.png",
        "v1773847318/Rapotin/Exterier_03_26/C34Exterier_bkpiop.png"
      ]
    },
 {
  price: "4 790 000 Kč",
  number: "Byt č.35",
  floor: "2NP C",
  layout: "3kk",
  size: "53,63 m2",
  terasa: "",
  parking: "",
  priceVynos: "18 500 Kč",
  vynos: "222 000 Kč",
  link: "/cervenydvur/byt/?Id=35",
  category: "Suite",
  categoryDescription:
    "Prostorná suite v moderní části C s přímým vnitřním propojením na kavárnu, hernu a dětský koutek – ideální pro rodiny i prémiový pronájem.",
  apText:
    <>
      Byt č.35 je <b>největší jednotka v části C</b> s dispozicí 3kk a plochou 53,63 m². Moderní architektonické pojetí části C klade důraz na funkčnost, světlo a nadčasový design. <br /><br /><b>Klíčovou výhodou je přímé vnitřní propojení</b> s kavárnou, hernou a dětským koutkem v 1. NP – <b>bez nutnosti vycházet ven</b>. <br /><br />Jednotka se převádí ve stavu <b>rozestavěno</b>. <b>Převod je plánován na 03–04/2026</b>, standardní dokončení pak na <b>10/2026</b>.
    </>,
  colOneTitle: "Hlavní benefity bytu",
  colOneText: (
    <>
      <li>Dispozice <b>3kk</b> – největší jednotka v části C.</li>
      <li><b>Přímé vnitřní propojení</b> na kavárnu, hernu a dětský koutek.</li>
      <li>Ideální pro <b>rodiny nebo skupinové pobyty</b>.</li>
      <li>Výrazná konkurenční výhoda oproti částem A a B.</li>
    </>
  ),
  colTwoTitle: "Stav a dokončení",
  colTwoDescription:
    "Jednotka se převádí ve stavu rozestavěno. Kupující může využít standardní harmonogram dokončení, nebo zvolit variantu prioritního dokončení v kratším termínu.",
  colTwoClaim:
    <>
      <b>Prioritní dokončení</b> znamená posílení realizační kapacity při zachování stejného standardu, kvality provedení a technického dohledu investora.
    </>,
  colTwoDownloadDesc:
    "Detailní rozsah standardu, vybavení a harmonogram dokončení rádi upřesníme individuálně podle konkrétní jednotky.",
  colThreeTitle: "Harmonogram a jistoty",
  colThreeDesc: (
    <>
      <li><b>Převod rozestavěné jednotky: 03–04/2026</b>.</li>
      <li><b>Standardní dokončení: 10/2026</b>.</li>
      <li>Možnost <b>prioritního dokončení v kratším termínu</b>.</li>
      <li>Jednotný standard a odpovědnost investora.</li>
    </>
  ),
  colThreeNote:
    "Největší jednotka v části C s dispozicí 3kk nabízí silnou pozici pro prémiový pronájem i vlastní rodinnou rekreaci.",
  reserved: false,
  sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
  gallery: [
    "v1773406398/Rapotin/C_B35_jza2xa.png",
    "v1773847286/Rapotin/Exterier_03_26/C35Pudorys_w7jbrg.png",
    "v1773847320/Rapotin/Exterier_03_26/C35Exterier_depp3h.png"
  ]
},
        {
      price: "3 690 000 Kč",
      number: "Byt č.36",
      floor: "2NP C",
      layout: "2kk",
      size: "57,45 m2",
      terasa: "",
      parking: "",
      priceVynos: "15 000 Kč",
      vynos: "180 000 Kč",
      link: "/cervenydvur/byt/?Id=36",
      category: "Suite",
      reserved: true, // Badik
      sectionOneBg: "v1763643022/Rapotin/DSC01361-HDR-min_muyeuj.jpg",
      gallery: [
        "v1773407616/Rapotin/C_B36_s1qq4w.png",
        "v1773847286/Rapotin/Exterier_03_26/C36Pudorys_ppowjs.png",
        "v1773847322/Rapotin/Exterier_03_26/C36Exterier_svueun.png"
      ]
    },
  ],
  otherProjects: [
    {
      image: "v1724488767/hrabenov/DSC03066-HDR-min_ekphad.jpg",
      name: "Rezidence Hrabenov",
      location: "Hrabenov, Ruda Nad Moravou",
      link: "/rezidence-hrabenov",
    },
    {
      image: "v1689504195/vilaRepublikaFoto/356584285_1096124314696983_2263942071942825600_n_xv0nkq.jpg",
      name: 'Vila republika',
      location: 'Velké Losiny',
      link: '/vila-republika',
    },
    {
      image:
        "v1763645408/Kouty/01-min_uxjr1h.jpg",
      name: "Wellness hotel Soutok",
      location: "Kouty nad Desnou",
      link: "/aparthotel-kouty",
    },

  ],
  timelineFill: "85%",
  timeline: [
    {
      title: "Projektová dokumentace",
      date: "Srpen 2023",
    },
    {
      title: "Zahájení zateplení fasády",
      date: "Říjen 2023",
    },
    {
      title: "Zisk stavebního povolení",
      date: "listopad 2025",
    },
    {
      title: "Předání bytu",
      date: "Říjen 2026",
    },
  ],
  architectName: "",
  architectWord:
    "",
};

export default data

