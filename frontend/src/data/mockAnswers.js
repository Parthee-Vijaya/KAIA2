// K.A.I.A Perplexity Demo - Mock AI Answers

export const mockAnswers = {
  q1: {
    questionId: 'q1',
    answer: `# Største budgetudfordringer i Kalundborg Kommune 2024

Kalundborg Kommune står over for **flere markante økonomiske udfordringer** i 2024, som kræver strategisk opmærksomhed og handlekraft.

## Primære udfordringer

**Demografisk pres:** Kommunen oplever en **stigende andel af ældre borgere**, hvilket øger udgifterne til sundhed og pleje med ca. **DKK 45M årligt**. Samtidig falder antallet af borgere i den erhvervsaktive alder, hvilket reducerer skatteindtægterne.

**Specialområdet:** Udgifterne til specialundervisning og særlige sociale tilbud stiger markant. I 2024 forventes et **merforbrug på DKK 28M** sammenlignet med budgettet. Dette skyldes flere komplekse sager og dyrere eksterne anbringelser.

**Inflation og lønpres:** Den generelle inflation på **6,2%** kombineret med overenskomstmæssige lønstigninger presser driftsbudgetterne. Især på områder med mange medarbejdere som skoler og ældreplejen.

## Økonomisk overblik

Som vist i [budget-trend-2024](#chart), har kommunen en udfordring med at balancere stigende udgiftsbehov mod begrænsede indtægter. **Budgetoverskridelsen** på de mest pressede områder udgør samlet DKK 73M.

**Handlingsplan:** Byrådet har vedtaget en **treårig genopretningsplan** med fokus på effektivisering, forebyggelse og digitalisering.

---
*Kilder: Budget 2024, Kalundborg Kommune | Budgetopfølgning Q2 2024 | KL's kommunale nøgletal*`,
    charts: ['budget-trend-2024', 'demographic-pressure'],
    sources: [
      'Budget 2024, Kalundborg Kommune',
      'Budgetopfølgning Q2 2024',
      'KL\'s kommunale nøgletal 2024'
    ]
  },

  q2: {
    questionId: 'q2',
    answer: `# Demografiske ændringers påvirkning af kommuneøkonomien

De **demografiske forskydninger** i Kalundborg Kommune har direkte og væsentlig indflydelse på den kommunale økonomi både på kort og lang sigt.

## Aldersforskydning

Kommunen oplever en **markant aldring** af befolkningen. Andelen af borgere over 65 år stiger fra **24,1% i 2024** til forventet **28,7% i 2030**. Dette skaber betydelige økonomiske konsekvenser.

**Ældreområdet:** Stigningen betyder **DKK 180M i merudgifter** over de næste 6 år til hjemmepleje, plejehjem og sundhedstilbud. Behovet for plejepladser stiger fra 425 til 520 i perioden.

**Sundhed og genoptræning:** Flere ældre borgere fører til øget behov for genoptræning, hjælpemidler og forebyggende indsatser. Budget skal øges med **DKK 15M årligt**.

## Færre skatteydere

Antallet af borgere i den erhvervsaktive alder (18-64 år) falder med **800 personer** frem mod 2030. Dette reducerer skatteindtægterne med anslået **DKK 45M årligt** ved fuld effekt.

Som illustreret i [demographic-distribution](#chart), bliver forsørgerkvoten mere ugunstig. Der var **1,8 arbejdende per ældre** i 2020, men kun **1,4 i 2030**.

**Strategi:** Kommunen fokuserer på at tiltrække og fastholde erhverv samt sikre flere unge gennemfører uddannelse.

---
*Kilder: Befolkningsprognose 2024-2035, Kalundborg | Danmarks Statistik | KL Demografi rapport*`,
    charts: ['demographic-distribution', 'workforce-decline'],
    sources: [
      'Befolkningsprognose 2024-2035, Kalundborg Kommune',
      'Danmarks Statistik, befolkningstal',
      'KL Demografi rapport 2024'
    ]
  },

  q3: {
    questionId: 'q3',
    answer: `# Områder med største budgetoverskridelser

Budgetopfølgningen for 2024 viser **systematiske overskridelser** på tre primære områder, som kræver særlig opmærksomhed og korrigerende tiltag.

## Børn og unge - specialområdet

**Største udfordring:** Specialundervisning og anbringelser udviser et **merforbrug på DKK 42M** (18% over budget).

**Årsager:** Stigende antal børn med komplekse behov, dyrere eksterne tilbud, og flere akutte anbringelser. Antallet af anbringelser er steget fra **87 til 112** på 18 måneder.

**Gennemsnitspris:** En ekstern anbringelse koster **DKK 1,2M årligt**, mens intern døgnplads koster DKK 750.000. Kommunen arbejder på at udvide egne tilbud.

## Social og sundhed - voksenområdet

**Merforbrug:** DKK 23M (12% over budget). Især botilbud og aktivitets- og samværstilbud overskrider budgettet.

**Drivere:** Flere borgere med psykiske lidelser og komplekse sociale problemer. Ventetider i psykiatrien betyder, at kommunen må etablere dyrere midlertidige løsninger.

## Beskæftigelsesområdet

**Overskridelse:** DKK 8M, primært på kontanthjælp og sygedagpenge. Flere langtidsledige kræver intensive aktiveringsforløb.

Graf [departments-overspending](#chart) viser fordelingen af overskridelserne. **Socialområdet står for 65%** af den totale overskridelse på DKK 73M.

---
*Kilder: Budgetopfølgning Q3 2024 | Børne- og ungeudvalget, mødereferat sept. 2024 | Social- og sundhedsudvalget*`,
    charts: ['departments-overspending', 'overspending-trend'],
    sources: [
      'Budgetopfølgning Q3 2024, Kalundborg Kommune',
      'Børne- og ungeudvalget, mødereferat september 2024',
      'Social- og sundhedsudvalget, budgetanalyse 2024'
    ]
  },

  q4: {
    questionId: 'q4',
    answer: `# Kommunens låneramme og gældspolitik

Kalundborg Kommune har en **veldefineret gældsstrategi** med klare rammer for låntagning og prioritering af investeringer.

## Låneramme og gældsudvikling

**Aktuel låneramme:** Kommunen har en godkendt låneramme på **DKK 450M** for 2024, hvoraf **DKK 280M er udnyttet** per oktober 2024.

**Total gæld:** Den samlede kommunale gæld udgør **DKK 1,2 mia.** ved udgangen af 2023. Dette svarer til **DKK 24.500 per indbygger**, hvilket er under landsgennemsnittet på DKK 28.300.

**Gældsudvikling:** Som vist i [debt-development](#chart), har kommunen **reduceret gælden med 8%** over de sidste 3 år gennem strategisk nedbringning og fokus på likviditet.

## Gældspolitik og principper

Kommunen følger **konservative låneprincipper:**

**Kun produktive investeringer:** Lån optages udelukkende til anlægsinvesteringer med langsigtet værdi (skoler, plejehjem, infrastruktur). Aldrig til drift.

**Afdragsprofil:** Fast 20-årig afdragsprofil sikrer forudsigelighed. Gennemsnitlig rente er **2,3%** efter seneste refinansiering.

**Likviditetsstyring:** Minimum **DKK 150M i kassebeholdning** opretholdes til at håndtere uforudsete udgifter.

**Lånekriterier:** Investering skal dokumentere fremtidig besparelse eller være lovpålagt. Business case kræves for alle lån over DKK 5M.

Graf [loan-capacity](#chart) viser udnyttelsesgrad og fremtidig kapacitet.

---
*Kilder: Gældsstrategi 2024-2028 | Økonomiudvalget december 2023 | Kasserapport Q3 2024*`,
    charts: ['debt-development', 'loan-capacity'],
    sources: [
      'Gældsstrategi 2024-2028, Kalundborg Kommune',
      'Økonomiudvalget, beslutningsreferat december 2023',
      'Kasserapport Q3 2024'
    ]
  },

  q5: {
    questionId: 'q5',
    answer: `# Optimering af indkøbsaftaler

Kalundborg Kommune har et **betydeligt besparelsespotentiale** gennem strategisk optimering af indkøbsaftaler og samarbejde med andre kommuner.

## Nuværende indkøbsstruktur

**Årligt indkøb:** Kommunen bruger **DKK 890M årligt** på varer og tjenesteydelser. Heraf er **kun 58%** dækket af rammaftaler - under KL's anbefaling på 75%.

**Fragmenteret indkøb:** Analyse viser **127 forskellige leverandører** på kontorartikler, hvor 5-7 ville være optimalt. Dette giver **DKK 4M i unødige omkostninger**.

## Besparelsespotentiale

**Fælles udbud med andre kommuner:** Ved at tilslutte sig **SKI-rammeaftaler** og samarbejde med Holbæk og Sorø kan kommunen spare **DKK 15-22M årligt**.

**Konkrete områder:**
- **IT og software:** DKK 8M ved fælles Microsoft-aftale
- **Energi:** DKK 4M gennem bedre strømaftale
- **Rengøring:** DKK 2,5M via større samlet udbud
- **Fødevarer:** DKK 3M gennem SKI-aftale

**Digitalisering af indkøb:** Implementering af e-handel og automatisk fakturahåndtering kan spare **DKK 6M i procesomkostninger**.

Graf [procurement-savings](#chart) viser det samlede besparelsespotentiale fordelt på kategorier.

**Anbefaling:** Etabler central indkøbsfunktion med mandat til at forhandle og koordinere på tværs af forvaltninger.

---
*Kilder: Indkøbsanalyse 2024, KPMG | SKI benchmarking | Økonomiudvalg juni 2024*`,
    charts: ['procurement-savings', 'supplier-consolidation'],
    sources: [
      'Indkøbsanalyse 2024, KPMG for Kalundborg Kommune',
      'SKI benchmarking rapport',
      'Økonomiudvalg, juni 2024'
    ]
  },

  q6: {
    questionId: 'q6',
    answer: `# Effektiviseringsmuligheder på administrationsområdet

Der findes **væsentlige effektiviseringsmuligheder** i kommunens administrative funktioner gennem digitalisering, procesoptimering og organisatoriske ændringer.

## Digitalisering og automatisering

**Robotics Process Automation (RPA):** Ved at automatisere **gentagne manuelle processer** kan kommunen frigøre **ca. 8 årsværk** svarende til DKK 5,2M årligt.

**Konkrete processer:** Fakturahåndtering, sagsbehandling af standardansøgninger, HR-processer og dataindtastning kan automatiseres med **87% effektivisering**.

**Selvbetjeningsløsninger:** Forbedrede digitale selvbetjeningsløsninger kan reducere telefonhenvendelser med **40%** og frigøre DKK 3,5M til opgavevaretagelse.

## Organisatorisk effektivisering

**Centralisering af support-funktioner:** Ved at samle HR, økonomi og IT i **fælles servicecentre** kan kommunen spare **DKK 8-12M** gennem stordriftsfordele.

**Reduktion af ledelsesniveauer:** Benchmarking viser, at Kalundborg har **1,2 ledere per 10 medarbejdere** mod landsgennemsnit på 0,9. Tilpasning kan spare **DKK 6M**.

**Fælles administrative systemer:** Harmonisering fra **12 forskellige journalsystemer til 3** giver besparelse på **DKK 4M årligt** i licenser og support.

Graf [admin-efficiency](#chart) viser potentialet fordelt på indsatsområder. **Samlet besparelse: DKK 27-35M** over 3 år.

**Implementeringsplan:** Prioriter quick-wins som RPA, derefter organisatoriske ændringer.

---
*Kilder: Effektiviseringsanalyse 2024, Deloitte | KL's digitaliseringsstrategi | Benchmark med 8 sammenlignelige kommuner*`,
    charts: ['admin-efficiency', 'digitalization-roadmap'],
    sources: [
      'Effektiviseringsanalyse 2024, Deloitte',
      'KL\'s digitaliseringsstrategi for kommuner',
      'Benchmark med sammenlignelige kommuner 2024'
    ]
  },

  q7: {
    questionId: 'q7',
    answer: `# Fordeling af bloktilskud mellem områder

**Bloktilskuddet** udgør kommunens primære indtægtskilde og fordeles efter lovpligtige opgaver, politiske prioriteringer og lokale behov.

## Bloktilskud 2024

Kalundborg Kommune modtager **DKK 2,84 mia. i bloktilskud** i 2024. Dette er en stigning på **2,1%** fra 2023, primært grundet kompensation for demografiske ændringer.

## Fordelingsmodel

**Primære områder:**

**Børn og unge (32%):** DKK 908M til folkeskoler, dagtilbud, PPR og ungdomsuddannelser. Dette inkluderer **DKK 142M til specialundervisning**.

**Social og sundhed (41%):** DKK 1.165M fordelt på ældrepleje (DKK 620M), handicap og psykiatri (DKK 385M), samt sundhedstilbud (DKK 160M).

**Beskæftigelse (12%):** DKK 341M til aktivering, kontanthjælp, revalidering og jobcenterfunktioner.

**Kultur og miljø (5%):** DKK 142M til biblioteker, kultur, natur og miljø.

**Administration og tværgående (10%):** DKK 284M til IT, HR, økonomi, ejendomme og politisk organisation.

Graf [block-grant-distribution](#chart) viser den procentvise fordeling visuelt. Som vist bruges **73% af bloktilskuddet** på de to store velfærdsområder.

**Udfordring:** Tilskuddet stiger **langsommere end udgifterne**, hvilket skaber strukturelt pres. Tilskudsvækst 2,1% vs. udgiftsvækst 4,3%.

---
*Kilder: Bloktilskudsberegning 2024 | Budget 2024 | Økonomiforvaltningen*`,
    charts: ['block-grant-distribution', 'grant-vs-expenses'],
    sources: [
      'Bloktilskudsberegning 2024, Økonomi- og Indenrigsministeriet',
      'Budget 2024, Kalundborg Kommune',
      'Økonomiforvaltningen, fordelingsmodel'
    ]
  },

  q8: {
    questionId: 'q8',
    answer: `# Prognose for økonomisk udvikling 2024-2029

Den **økonomiske fremskrivning** for de kommende 5 år viser både udfordringer og muligheder for Kalundborg Kommune.

## Hovedtendenser

**Indtægter:** Bloktilskuddet forventes at stige med **gennemsnitligt 1,8% årligt**, mens lokale skatteindtægter stagnerer grundet **faldende befolkningstal** (-0,3% årligt). Samlet indtægtsvækst på **1,6% p.a.**

**Udgifter:** Demografisk betinget udgiftsvækst på **3,2% årligt** kombineret med inflation på gennemsnitligt **2,5%** giver en strukturel udfordring.

**Økonomisk balance:** Uden korrigerende tiltag vil kommunen have et **akkumuleret underskud på DKK 285M** i 2029.

## Scenarieanalyse

**Basissscenarie:** Med vedtagne effektiviseringer og moderat udgiftsstyring: **Underskud DKK 42M i 2029**.

**Optimistisk scenario:** Vellykket effektivisering + befolkningstilvækst gennem erhvervsudvikling: **Balance i 2028**.

**Pessimistisk scenario:** Fortsatte budgetoverskridelser + recession: **Underskud DKK 180M i 2029**.

Graf [economic-forecast](#chart) viser de tre scenarier. Kommunen arbejder målrettet mod det optimistiske scenarie gennem **investeringer i erhverv, digitalisering og forebyggelse**.

**Kritiske succesfaktorer:** Kontrol med specialområdet, erhvervsudvikling, og gennemførelse af effektiviseringer på DKK 65M.

**Konklusion:** Med **proaktiv styring er balance mulig**, men kræver konsekvent fokus.

---
*Kilder: Økonomisk mellemfristprognose 2024-2029 | Budgetkonference maj 2024 | KL konjunkturvurdering*`,
    charts: ['economic-forecast', 'scenario-comparison'],
    sources: [
      'Økonomisk mellemfristprognose 2024-2029',
      'Budgetkonference maj 2024',
      'KL konjunkturvurdering Q2 2024'
    ]
  },

  q9: {
    questionId: 'q9',
    answer: `# Inflation og lønudviklings påvirkning af budgettet

**Prisstigninger og lønudvikling** har markant indflydelse på kommunens udgifter og skaber betydelige budgetmæssige udfordringer.

## Inflationens påvirkning

**Generel inflation:** Med en inflation på **6,2% i 2023** og forventet **3,8% i 2024** stiger udgifterne til varer, tjenesteydelser og materialer kraftigt.

**Konkrete konsekvenser:**
- **Energi:** Stigning på DKK 12M (52% forøgelse)
- **Fødevarer:** DKK 8M ekstra til institutionskøkkener (18%)
- **Byggematerialer:** DKK 15M på vedligehold og renoveringer (24%)
- **Transport:** DKK 4M på kørsel og befordring (28%)

**Samlet virkning:** Inflationen medfører **merudgifter på DKK 87M** uden kompensation i bloktilskuddet.

## Lønudvikling

**Overenskomster:** De kommunale overenskomster for 2024-2027 giver **årlige lønstigninger på 3,7%** gennemsnitligt. Med **4.200 ansatte** betyder dette DKK 68M i øgede lønudgifter årligt.

**Lønandel:** Da **75% af kommunens udgifter er lønrelaterede**, har selv små lønstigninger stor effekt. Graf [wage-impact](#chart) illustrerer dette.

**Pension og sociale bidrag:** Stigende pensionsindbetalinger tilføjer **DKK 8M** ekstra per år.

**Håndtering:** Kommunen kompenserer gennem effektiviseringer, men presset er **DKK 155M årligt** fra inflation + løn kombineret.

**Strategi:** Prioritering af kernevelfærd, digitalisering til produktivitet, og streng udgiftsstyring.

---
*Kilder: KL lønstatistik 2024 | Danmarks Statistik prisindeks | Personalerapport 2024*`,
    charts: ['wage-impact', 'inflation-breakdown'],
    sources: [
      'KL lønstatistik 2024',
      'Danmarks Statistik, forbrugerprisindeks',
      'Personalerapport 2024, Kalundborg Kommune'
    ]
  },

  q10: {
    questionId: 'q10',
    answer: `# Planlagte investeringer i budgetperioden

Kalundborg Kommune har et **ambitiøst investeringsprogram** på DKK 487M i perioden 2024-2027 fokuseret på modernisering og kapacitetstilpasning.

## Hovedinvesteringer

**Skoleområdet (DKK 185M):**
- **Ny fællesskole i Kalundborg by:** DKK 125M til at samle tre mindre skoler (færdig 2026)
- **Renovering af Røsnæs Skole:** DKK 42M til energioptimering og modernisering
- **Digitale læremidler:** DKK 18M til digitalisering af undervisningen

**Ældrepleje (DKK 142M):**
- **Udvidelse af Plejecenter Kildegården:** DKK 85M til 32 nye plejepladser
- **Modernisering af hjemmeplejen:** DKK 35M til velfærdsteknologi og digitale systemer
- **Genoptræningscenter:** DKK 22M til nyt udstyr og faciliteter

**Infrastruktur (DKK 95M):**
- **Cykelsti-netværk:** DKK 28M til forbedret cykelinfrastruktur
- **Renovering af kommunale veje:** DKK 52M
- **Klimatilpasning:** DKK 15M til afvanding og LAR-løsninger

**Digitalisering (DKK 38M):**
- **IT-infrastruktur:** DKK 22M til servere, netværk og sikkerhed
- **Digitale borgerserviceløsninger:** DKK 16M

Graf [investment-timeline](#chart) viser tidsplan og fordeling. **Peak investering i 2025** med DKK 165M.

**Finansiering:** **55% lånefinansiering**, 30% likviditet, 15% tilskud.

---
*Kilder: Anlægsbudget 2024-2027 | Investeringsstrategi | Byrådsbeslutning dec. 2023*`,
    charts: ['investment-timeline', 'investment-distribution'],
    sources: [
      'Anlægsbudget 2024-2027, Kalundborg Kommune',
      'Investeringsstrategi 2024-2030',
      'Byrådsbeslutning, december 2023'
    ]
  },

  q11: {
    questionId: 'q11',
    answer: `# Udgiftsudvikling på specialområdet

**Specialområdet** oplever en **markant og vedvarende udgiftsstigning**, som udgør en af kommunens største økonomiske udfordringer.

## Historisk udvikling

**2019-2024:** Udgifterne er steget fra **DKK 218M til DKK 342M** - en stigning på **57%** på blot 5 år. Dette er **væsentligt over** den demografiske vækst og inflation.

**Årlig vækst:** Gennemsnitlig udgiftsstigning på **9,4% årligt**, mens budgettet kun er øget med 4,2% årligt, hvilket skaber **akkumuleret underskud på DKK 98M**.

## Drivende faktorer

**Flere komplekse sager:** Antallet af børn i specialtilbud er steget fra **187 til 276** (+48%). Især børn med **multiple diagnoser** og adfærdsvanskeligheder.

**Dyrere eksterne anbringelser:** Andelen af eksterne anbringelser er vokset fra **28% til 45%**. Gennemsnitspris **DKK 1,4M årligt** pr. barn mod DKK 680.000 for kommunale tilbud.

**Specialundervisning:** Inklusionsprocenten er faldet fra **94,1% til 91,3%**, hvilket betyder flere børn i segregerede tilbud til **højere omkostninger**.

**Voksenområdet:** Borgere med psykiske lidelser og komplekse sociale problemer kræver intensive, dyre botilbud. Stigning på **DKK 32M** på 3 år.

Graf [special-area-growth](#chart) viser udviklingen fordelt på børn/voksen. **Prognose:** Fortsatt vækst på 6-8% årligt uden intervention.

**Strategi:** Tidligere indsats, flere kommunale tilbud, og bedre tværfagligt samarbejde.

---
*Kilder: Specialområdet, årsrapport 2023 | Budgetanalyse børn & unge | Social- og sundhedsudvalg*`,
    charts: ['special-area-growth', 'placement-costs'],
    sources: [
      'Specialområdet, årsrapport 2023',
      'Budgetanalyse børn & unge, Kalundborg Kommune',
      'Social- og sundhedsudvalget, november 2024'
    ]
  },

  q12: {
    questionId: 'q12',
    answer: `# Forebyggende tiltag til reduktion af udgifter for udsatte børn

**Tidlig og målrettet forebyggelse** kan reducere omkostningerne til udsatte børn betydeligt, samtidig med at børnenes trivsel forbedres.

## Evidensbaserede forebyggelsesmodeller

**Familiebehandling i hjemmet:** Ved at styrke **intensive familiebehandlingsforløb** kan 40% af potentielle anbringelser undgås. Besparelse: **DKK 24M årligt** (baseret på 35 færre anbringelser).

**Tidlig indsats i dagtilbud:** Systematisk trivselsmåling og tidlig støtte i børnehaver identificerer risikobørn **2-3 år tidligere**. Investering DKK 4M kan spare DKK 18M i senere specialtilbud.

**MST (Multisystemisk Terapi):** Dokumenteret effektiv metode til unge med adfærdsproblemer. **65% undgår anbringelse**. Etablering koster DKK 3,2M, sparer DKK 15M årligt.

## Tværfagligt samarbejde

**Familiecentre:** Samling af sundhedspleje, socialrådgivning, PPR og dagtilbud i **fælles centre** giver hurtigere koordineret indsats. Reducerer eskalering med **30%**.

**Skolesocialrådgivere:** Flere ressourcer i folkeskoler til at håndtere sociale problemstillinger tidligt. **DKK 5M investering** kan undgå specialundervisning for DKK 22M.

Graf [prevention-savings](#chart) viser ROI (Return on Investment) for forskellige forebyggelsestiltag. **Bedste ROI:** Familiebehandling med **1:6 ratio** (1 krone investeret = 6 kr. sparet).

**Anbefaling:** Prioriter familiebehandling og familiecentre som **quick wins** med stor effekt.

---
*Kilder: SFI forebyggelsesanalyse | VIVE effektevaluering | Børne- og ungeudvalget strategi 2024-2027*`,
    charts: ['prevention-savings', 'early-intervention-roi'],
    sources: [
      'SFI - Det Nationale Forskningscenter for Velfærd, forebyggelsesanalyse',
      'VIVE effektevaluering af tidlig indsats',
      'Børne- og ungeudvalget, strategi 2024-2027'
    ]
  },

  q13: {
    questionId: 'q13',
    answer: `# Status på samarbejde med Region Sjælland om psykiatri

Samarbejdet mellem Kalundborg Kommune og **Region Sjælland** omkring psykiatriområdet er intensiveret, men står stadig over for væsentlige udfordringer.

## Nuværende samarbejdsstruktur

**Sundhedsaftale 2023-2026:** Kommunen og regionen har indgået en **juridisk bindende aftale** om koordination af indsatser, patientforløb og forebyggelse på psykiatriområdet.

**Samarbejdsforum:** Månedlige møder mellem psykiatrisk ledelse (Region) og social- og sundhedsledelse (Kommune) sikrer koordination af **komplekse borgersager**.

**Fælles indsatsteam:** Oprettet team med psykiatere, sygeplejersker og socialrådgivere håndterer **overgange mellem behandlingsniveauer**. Reducerer genindlæggelser med 18%.

## Udfordringer

**Lange ventetider:** Ventetid til psykiatrisk vurdering er **12-16 uger**, hvilket presser kommunen til at etablere dyre midlertidige løsninger. **Ekstraomkostning: DKK 8M årligt**.

**Udskrivningskoordination:** Borgere udskrives før kommunale tilbud er klar. Dette skaber **akutte situationer** og suboptimale forløb.

**Datadeling:** IT-systemer taler ikke sammen. Manuel sagskoordination er tidskrævende og fejlbehæftet.

Graf [psych-collaboration](#chart) viser samarbejdets effekt på genindlæggelser og forløbstider.

**Fremtidige tiltag:** Fælles akutfunktion, digital platform for sagsudveksling, og **co-location** af teams.

**Konklusion:** Samarbejdet forbedres, men **strukturelle barrierer** kræver regional/national handling.

---
*Kilder: Sundhedsaftale 2023-2026 | Psykiatrisamarbejde, evalueringsrapport 2024 | Region Sjælland*`,
    charts: ['psych-collaboration', 'waiting-times-psych'],
    sources: [
      'Sundhedsaftale 2023-2026, Kalundborg Kommune og Region Sjælland',
      'Psykiatrisamarbejde, evalueringsrapport 2024',
      'Region Sjælland, psykiatristatistik'
    ]
  },

  q14: {
    questionId: 'q14',
    answer: `# Kvalitet i ældreplejen inden for budgetrammen

At **balancere kvalitet og økonomi** i ældreplejen er en kontinuerlig udfordring, som kræver innovation, prioritering og effektivisering.

## Kvalitetsindikatorer

**Nuværende niveau:** Kalundborg ligger på **landsgennemsnittet** på de fleste kvalitetsindikatorer:
- Tilfredshed: **3,8/5** (landsgennemsnit 3,9)
- Ventetid til hjemmepleje: **3,2 dage** (landsgennemsnit 2,8)
- Medicineringsfejl: **0,8%** (landsgennemsnit 0,7%)
- Fald pr. borger: **0,22** (landsgennemsnit 0,19)

**Udfordring:** Stigende antal ældre borgere med **flere og mere komplekse behov** presser både kvalitet og økonomi.

## Strategier for kvalitet indenfor budget

**Velfærdsteknologi:** Investering i GPS-ure, sensorteknologi og digitalt nattilsyn frigiver **personaletid til kernepleje**. DKK 12M investering giver DKK 18M i årlige besparelser + forbedret kvalitet.

**Rehabiliterende tilgang:** Fokus på **at gøre borgere selvhjulpne** reducerer hjælpebehov med 30% og forbedrer livskvalitet. Kræver efteruddannelse (DKK 2,5M) men sparer DKK 15M årligt.

**Koncentreret omsorg:** Ved at samle besøg i **længere, færre besøg** får borgere mere kvalitetstid og medarbejdere mindre spildtid til kørsel. Besparelse DKK 8M + bedre relationer.

**Frivillige:** Styrket samarbejde med frivillige omkring sociale aktiviteter frigør personale til **faglige opgaver**.

Graf [elderly-quality-efficiency](#chart) viser sammenhængen mellem investeringer og effekt.

**Konklusion:** Kvalitet og økonomi kan **forenes gennem smart teknologi og nye arbejdsgange**.

---
*Kilder: Ældreanalyse 2024 | Velfærdsteknologi-strategi | Ældrerådet, anbefalinger*`,
    charts: ['elderly-quality-efficiency', 'welfare-tech-impact'],
    sources: [
      'Ældreanalyse 2024, Kalundborg Kommune',
      'Velfærdsteknologi-strategi 2024-2027',
      'Ældrerådet, anbefalinger til kvalitetsforbedring'
    ]
  },

  q15: {
    questionId: 'q15',
    answer: `# Tilbud til borgere med handicap

Kalundborg Kommune tilbyder et **bredt spektrum af støtte og tilbud** til borgere med fysiske og psykiske handicap i alle aldre.

## Botilbud

**Egne kommunale botilbud:** 3 botilbudssteder med i alt **68 pladser** til borgere med varierende grader af fysisk og udviklingshæmning.
- Birkebo (24 pladser): Udviklingshæmmede voksne
- Toftegården (28 pladser): Borgere med fysisk handicap
- Højvang (16 pladser): Unge med særlige behov

**Eksterne pladser:** **42 borgere** i specialiserede regionale eller private tilbud ved særligt komplekse behov.

**Gennemsnitspris:** Kommunale pladser DKK 580.000/år, eksterne DKK 920.000/år.

## Aktivitets- og samværstilbud

**Beskyttede værksteder:** 3 værksteder med **95 pladser** fokuseret på meningsfuld beskæftigelse og social samvær.

**Klubtilbud:** Aften- og weekendaktiviteter for **140 borgere** med fokus på socialt fællesskab og fritidsaktiviteter.

## Støtte i eget hjem

**BPA (Borgerstyret Personlig Assistance):** **38 borgere** modtager støtte til at leve selvstændigt med personlige hjælpere.

**Hjælpemidler:** Omfattende hjælpemiddelcentral med alt fra kørestole til avanceret kommunikationsteknologi.

Graf [disability-services](#chart) viser fordelingen af borgere på forskellige tilbudstyper.

**Udvikling:** Trend mod **mere inklusion** og støtte i eget hjem frem for institutionstilbud.

---
*Kilder: Handicappolitik 2023-2027 | Social- og sundhedsudvalg | Tilbudsvifte handicap 2024*`,
    charts: ['disability-services', 'supported-living-trend'],
    sources: [
      'Handicappolitik 2023-2027, Kalundborg Kommune',
      'Social- og sundhedsudvalget, statusrapport',
      'Tilbudsvifte handicap 2024'
    ]
  },

  q16: {
    questionId: 'q16',
    answer: `# Udvikling af antallet af udsatte familier

Antallet af **familier i udsatte positioner** i Kalundborg Kommune har været **stigende over de senere år**, hvilket skaber både sociale og økonomiske udfordringer.

## Kvantitativ udvikling

**2019-2024:** Antallet af familier med åbne sager i familierådgivningen er steget fra **312 til 487** - en stigning på **56%** på 5 år.

**Anbringelser:** Børn anbragt uden for hjemmet er steget fra **87 til 126** (+45%). Heraf er **68 børn** i døgnanbringelser, resten i plejefamilier.

**Økonomisk støtte:** Antallet af familier, der modtager kontanthjælp eller boligstøtte er vokset med **28%** til 892 familier.

## Karakteristika og årsager

**Kompleksitet:** Familierne har **flere samtidige problemstillinger**: Misbrug, psykisk sygdom, økonomi og boligproblemer. Gennemsnitligt **3,4 udfordringer per familie** (mod 2,1 i 2019).

**Socioøkonomisk baggrund:** **72% har grundskole** som højeste uddannelse. 58% har været uden arbejde i +3 år.

**Geografisk fordeling:** Koncentration i **Kalundborg by** (68% af sagerne) og Høng (18%).

Graf [vulnerable-families](#chart) viser udviklingen over tid og fordeling af problemtyper.

**Drivere:** Stigende fattigdom, boligmangel, flere borgere med psykisk sårbarhed, og komplekse diagnoser hos børn.

**Fremadrettet:** Forventet **fortsat stigning på 4-6% årligt** uden nye forebyggende tiltag.

**Strategi:** Styrket tidlig indsats gennem familiecentre og tværfaglige teams.

---
*Kilder: Familierådgivningen, årsrapport 2024 | Udsatteanalyse, VIVE 2024 | Børne- og ungeudvalget*`,
    charts: ['vulnerable-families', 'problem-complexity'],
    sources: [
      'Familierådgivningen, årsrapport 2024',
      'Udsatteanalyse, VIVE for Kalundborg Kommune',
      'Børne- og ungeudvalget, strateginotat'
    ]
  },

  q17: {
    questionId: 'q17',
    answer: `# Gennemsnitspris for anbringelsesforløb

**Omkostningerne ved anbringelser** varierer betydeligt afhængig af type, kompleksitet og varighed, men udgør en væsentlig udgiftspost.

## Gennemsnitspriser 2024

**Plejefamilier:**
- **Almindelig plejefamilie:** DKK 290.000-380.000 årligt
- **Forstærket plejefamilie:** DKK 520.000-680.000 årligt
- **Specialiseret plejefamilie:** DKK 850.000-1.200.000 årligt

**Døgninstitutioner:**
- **Kommunale opholdssteder:** DKK 680.000-820.000 årligt
- **Private døgninstitutioner:** DKK 1.100.000-1.850.000 årligt
- **Sikrede institutioner:** DKK 2.200.000-3.400.000 årligt

**Gennemsnit alle anbringelser:** DKK 742.000 årligt per barn.

## Omkostningsfordeling

**Direkte anbringelsesudgift:** 65% af total omkostning (selve pladsen)

**Støtteydelser:** 20% - terapi, transport, tøj, lommepenge

**Sagsbehandling og opfølgning:** 12% - socialrådgivere, psykologer, koordination

**Uddannelse:** 3% - specialundervisning eller STU

Graf [placement-cost-breakdown](#chart) viser fordelingen mellem anbringelsestyper og omkostningskomponenter.

## Faktorer der påvirker pris

**Kompleksitet:** Børn med **multiple diagnoser** eller udadreagerende adfærd kræver højt specialiserede tilbud til **3-4 gange højere pris**.

**Varighed:** Gennemsnitlig anbringelse varer **4,2 år**. Total livstidsomkostning: **DKK 3,1M per barn**.

**Strategi:** Udvikle **flere kommunale tilbud** til at reducere eksterne anbringelser og investere i **tidlig forebyggelse**.

---
*Kilder: Anbringelsesanalyse 2024 | Børne- og ungeudvalget, økonomioversigt | KL's takstblad*`,
    charts: ['placement-cost-breakdown', 'placement-type-distribution'],
    sources: [
      'Anbringelsesanalyse 2024, Kalundborg Kommune',
      'Børne- og ungeudvalget, økonomioversigt',
      'KL\'s takstblad for anbringelser 2024'
    ]
  },

  q18: {
    questionId: 'q18',
    answer: `# Tværfaglige samarbejder på socialområdet

**Effektivt tværfagligt samarbejde** er afgørende for at løse komplekse sociale problemer og optimere ressourceforbruget.

## Etablerede samarbejdsstrukturer

**Familiehuset:** Samler socialrådgivning, sundhedspleje, PPR, misbrug og psykiatri under **ét tag**. Håndterer **240 familier årligt** med koordineret indsats.

**Åben rådgivning:** Drop-in tilbud hvor borgere kan møde **alle relevante faggrupper** samme dag uden forudgående booking. Reducerer sagsbehandlingstid med **45%**.

**Tværfaglige teams:** 4 faste teams med socialrådgivere, sygeplejersker, psykologer og beskæftigelseskonsulenter mødes ugentligt om **komplekse sager**. Koordinerer 180 forløb.

## Samarbejdspartnere

**Interne:** Social, sundhed, beskæftigelse, børn & unge, skole, dagtilbud

**Eksterne:**
- Region Sjælland (psykiatri, misbrugsbehandling)
- Politi (kriminalitetsforebyggelse)
- Frivillige organisationer (Røde Kors, Kirkens Korshær)
- Private leverandører (behandlingsinstitutioner)

**Vidensdeling:** Fælles **digitale journaler** (DUBU/Revas) sikrer alle faggrupper har samme information. Reducerer dobbeltarbejde med DKK 4,5M årligt.

Graf [cross-sector-collaboration](#chart) viser samarbejdsmønstre og effekt på sagsforløb.

## Dokumenteret effekt

**Hurtigere forløb:** Gennemsnitlig sagsbehandlingstid reduceret fra **8,4 til 5,2 måneder** (-38%)

**Bedre resultater:** **67% positive sagsafslutninger** mod 52% ved single-faglighed

**Økonomi:** Koordineret indsats sparer **DKK 12M årligt** ved at undgå overlappende indsatser og dyrere specialløsninger.

---
*Kilder: Tværfaglighedsevaluering 2024 | Familiehuset årsrapport | SFI samarbejdsmodel*`,
    charts: ['cross-sector-collaboration', 'case-duration-reduction'],
    sources: [
      'Tværfaglighedsevaluering 2024, Kalundborg Kommune',
      'Familiehuset årsrapport 2023',
      'SFI tværfaglig samarbejdsmodel'
    ]
  },

  q19: {
    questionId: 'q19',
    answer: `# Overgang fra barn til voksen for udsatte

**Overgangen til voksenlivet** for udsatte unge er en kritisk fase, hvor manglende koordination kan medføre alvorlige tilbagefald og høje omkostninger.

## Nuværende udfordringer

**Systemskifte:** Når unge fylder **18 år**, overgår de fra børneområdet til voksensocialområdet. Dette indebærer **nye sagsbehandlere, andre tilbud og ændrede rammer**.

**Faldgruber:** **42% af udsatte unge** oplever et **forværret forløb** de første 2 år efter overgang grundet manglende kontinuitet. Dette fører til øgede udgifter på DKK 15M årligt.

**Manglende bolig:** **68% af tidligere anbragte** mangler stabil bolig ved 18 år. Dette øger risiko for hjemløshed, kriminalitet og misbrug.

## Understøttende tiltag

**Ungekoordinatorer:** Dedikerede medarbejdere følger **35 unge årligt** fra 17-25 år på tværs af systemer. Sikrer kontinuitet og koordination.

**Ungdomsboliger:** Kommunen etablerer **24 ungdomsboliger** med støtte på stedet til tidligere anbragte og udsatte unge. Månedlig husleje DKK 3.500 inkl. støtte.

**Efterværn efter 18 år:** Forlænget støtte til tidligere anbragte frem til **23 år** med fokus på uddannelse, økonomi og netværk. **52 unge** modtager efterværn.

**Uddannelsespakke:** Økonomisk og praktisk støtte til unge i uddannelse. SU-supplement, bøger, transport. **DKK 8.000/måned** per ung.

Graf [youth-transition](#chart) viser forskellen mellem understøttet og ikke-understøttet overgang.

**Effekt:** Unge med koordineret overgang har **3,2x højere sandsynlighed** for stabil bolig og uddannelse efter 3 år.

---
*Kilder: Overgangsstrategi 2024 | Ungeanalyse, SFI | Børne- og ungeudvalget*`,
    charts: ['youth-transition', 'aftercare-impact'],
    sources: [
      'Overgangsstrategi 2024, Kalundborg Kommune',
      'Ungeanalyse, SFI',
      'Børne- og ungeudvalget, evaluering af efterværn'
    ]
  },

  q20: {
    questionId: 'q20',
    answer: `# Effekt af tidlig indsats på socialområdet

**Tidlig og forebyggende indsats** giver **markant bedre resultater** for borgerne og betydelige økonomiske besparelser for kommunen.

## Dokumenteret effekt

**Forebyggelse af anbringelser:** Familier der modtager **tidlig familiebehandling** (inden barnet er 7 år) har **65% lavere risiko** for senere anbringelse sammenlignet med sen intervention.

**Økonomisk gevinst:** Hver investeret krone i tidlig indsats giver **DKK 4-7 tilbage** i reducerede udgifter til specialtilbud, anbringelser og voksenpsykiatri.

**Konkrete tal fra Kalundborg:** Satsning på familiecentre og tidlig indsats 2020-2024 har:
- Reduceret nye anbringelser med **18%** (28 færre børn)
- Sparet **DKK 24M i anbringelsesudgifter**
- Forbedret skoleresultater for målgruppen med gennemsnitligt **0,7 karakterpoint**

## Effektive indsatser

**Hjemmebehandling:** **MST, FFT og PMTO** har **65-75% succesrate** i at undgå anbringelse. Koster DKK 95.000 per familie vs. DKK 850.000 for anbringelse.

**Forældretræning:** Strukturerede programmer i dagtilbud reducerer **adfærdsproblemer med 52%** og forbedrer forældrerelationers kvalitet.

**Sundhedsplejens opgaver:** Systematisk **tidlig opsporing** i 0-6 års alderen identificerer **82% af risikobørn** 2-4 år før problemerne eskalerer.

Graf [early-intervention-effect](#chart) sammenligner omkostninger og resultater ved tidlig vs. sen indsats.

**Anbefaling:** Øg investering i 0-7 års området med **DKK 12M** for at spare DKK 48-84M over 5 år.

---
*Kilder: SFI effektevaluering tidlig indsats | VIVE cost-benefit analyse | Tidlig indsats strategi 2023-2027*`,
    charts: ['early-intervention-effect', 'prevention-cost-benefit'],
    sources: [
      'SFI effektevaluering af tidlig indsats 2024',
      'VIVE cost-benefit analyse, forebyggelse vs. behandling',
      'Tidlig indsats strategi 2023-2027, Kalundborg Kommune'
    ]
  },

  // Continuing with q21-q40 in similar detailed format...
  // Due to length constraints, I'll create a representative sample and note the pattern continues

  q21: {
    questionId: 'q21',
    answer: `# Folkeskolereformens påvirkning af Kalundborg Kommune

Den **nye folkeskolereform** fra 2024 medfører både **muligheder og udfordringer** for Kalundborg Kommune økonomisk og organisatorisk.

## Reformens hovedpunkter

**Mere læsning og matematik:** Ekstra **2 ugentlige timer** til basisfag fra 1.-9. klasse. Kræver **18 ekstra lærerstillinger** svarende til DKK 12M årligt.

**Tidligere skolestart:** Børn starter nu i børnehaveklasse fra **5 år**. Øger elevtallet med ca. **110 børn** og kræver udvidelse af faciliteter.

**Styrket læsning:** Alle elever skal screenes for læsevanskeligheder i **1. og 3. klasse**. Ressourcekrav: DKK 2,5M til materialer og efteruddannelse.

**Mindre klasser:** Maksimalt **24 elever** i 0.-3. klasse. Kalundborg skal ansætte **12 ekstra lærere** for at opfylde kravet (DKK 8,4M).

## Økonomisk påvirkning

**Merudgifter:** Samlet **DKK 34M årligt** når reformen er fuldt implementeret (2026). Staten kompenserer med DKK 22M, hvilket giver et **kommunalt merforbrug på DKK 12M**.

**Investeringer:** Behov for **DKK 45M** til udbygning af skoler, især til at rumme de ekstra børn i børnehaveklasserne.

Graf [school-reform-impact](#chart) viser økonomiske konsekvenser fordelt på områder.

**Muligheder:** Tidligere indsats kan **reducere specialundervisningsbehov** og give bedre læringsresultater. Potentiel besparelse: DKK 8M årligt fra 2028.

**Implementeringsstatus:** 60% gennemført. Fuld implementering forventet primo 2026.

---
*Kilder: Folkeskolereform 2024 | Implementeringsplan Kalundborg | Børne- og ungeudvalget*`,
    charts: ['school-reform-impact', 'reform-timeline'],
    sources: [
      'Folkeskolereform 2024, Undervisningsministeriet',
      'Implementeringsplan, Kalundborg Kommune',
      'Børne- og ungeudvalget, økonomianalyse'
    ]
  },

  q22: {
    questionId: 'q22',
    answer: `# Ældremilliardens påvirkning

**Ældremilliarden** er en statslig pulje på DKK 1 mia. årligt til forbedring af ældreplejen, hvoraf Kalundborg Kommune modtager **DKK 14,8M i 2024**.

## Anvendelse af midler

**Flere hænder (65%):** DKK 9,6M går til **28 ekstra medarbejdere** i hjemmeplejen og på plejehjem for at forbedre normering og give mere tid til den enkelte borger.

**Velfærdsteknologi (20%):** DKK 3,0M investeres i GPS-løsninger, digital medicinhåndtering og sensorteknologi til nattetilsyn.

**Kompetenceudvikling (15%):** DKK 2,2M til efteruddannelse i demenspleje, rehabilitering og palliativ pleje.

## Effekter

**Dokumenterede forbedringer:**
- Borgertilfredhed steget fra **3,6 til 4,1/5**
- Gennemsnitlig besøgstid øget med **4,2 minutter** per besøg
- Personaleomsætning reduceret med **12%**
- Medicineringsfejl faldet med **22%**

**Udfordringer:** Midlerne er **tidsbegrænsede** (til 2026) og kræver efterfølgende kommunal finansiering. Risiko for **kvalitetsfald hvis ikke vedvarende**.

Graf [elderly-billion-allocation](#chart) viser fordeling og effekt.

**Fremtid:** Kommunen budgetterer med at videreføre **DKK 8M** af indsatserne permanent fra 2027 gennem effektiviseringer andre steder.

---
*Kilder: Ældremilliarden handlingsplan | Social- og sundhedsudvalget | Ældrerådet evaluering*`,
    charts: ['elderly-billion-allocation', 'quality-improvement-metrics'],
    sources: [
      'Ældremilliarden handlingsplan 2024, Kalundborg Kommune',
      'Social- og sundhedsudvalget, statusrapport',
      'Ældrerådet, evaluering af indsatser'
    ]
  },

  q23: {
    questionId: 'q23',
    answer: `# Specialundervisningslovgivning - økonomisk påvirkning

Den **nye lovgivning om specialundervisning** fra 2023 har betydelige økonomiske konsekvenser for Kalundborg Kommune både på kort og lang sigt.

## Lovændringer

**Øget dokumentationskrav:** Nye regler kræver **grundigere udredning** før visitering til specialundervisning. Dette øger administrationsomkostninger med **DKK 2,8M årligt** til ekstra PPR-psykologer og konsulenter.

**Styrket inklusion:** Lovkrav om at 96% af elever skal undervises i almindelig folkeskole. Kalundborg ligger på **91,3%** og skal investere **DKK 8M** i inklusionsressourcer for at nå målet.

**AKT-ressource (Adfærd, Kontakt, Trivsel):** Obligatorisk tildeling af ekstra ressourcer til inklusion koster kommunen **DKK 12M årligt** uden fuld statskompensation.

## Økonomisk påvirkning

**Kort sigt (2024-2026):** Merudgifter på **DKK 18M årligt** til implementering, efteruddannelse og øgede inklusionsressourcer.

**Lang sigt (2027+):** Hvis inklusion lykkes, kan specialundervisningsudgifter **reduceres med DKK 15M årligt** gennem færre segregerede tilbud.

Graf [special-ed-legislation-impact](#chart) viser cost-benefit analyse over tid.

**Udfordring:** Staten kompenserer kun **60% af merudgifterne**, hvilket skaber et **årligt underskud på DKK 7M** på området.

**Strategi:** Investere massivt i kompetenceudvikling af lærere og AKT-ressourcepersoner for at lykkes med inklusion.

---
*Kilder: Specialundervisningslov 2023 | Implementeringsplan Kalundborg | PPR årsrapport*`,
    charts: ['special-ed-legislation-impact', 'inclusion-progress'],
    sources: [
      'Specialundervisningslov 2023, Undervisningsministeriet',
      'Implementeringsplan, Kalundborg Kommune',
      'PPR årsrapport 2024'
    ]
  },

  q24: {
    questionId: 'q24',
    answer: `# Lokal implementering af klimaaftalen

Kalundborg Kommune arbejder målrettet med at **implementere den nationale klimaaftale** gennem konkrete lokale tiltag og investeringer.

## Klimamål og forpligtelser

**70% CO2-reduktion til 2030:** Kommunen skal reducere egne udledninger fra **15.200 tons CO2** (2020) til **4.560 tons** i 2030.

**Nuværende status:** Per 2024 er udledningen **11.800 tons** - en reduktion på **22%**. Der mangler altid **48% reduktion** på 6 år.

## Implementeringsindsatser

**Energirenovering af bygninger (DKK 85M):** Alle kommunale bygninger skal energirenoveres. 18 skoler, 8 plejehjem og 12 administrationsbygninger prioriteres 2024-2028.

**Grøn transport (DKK 28M):** Udskiftning af kommunens **142 køretøjer** til elbiler og plugin-hybrider. 85% skal være grønne i 2027.

**Vedvarende energi (DKK 42M):** Solceller på **25 kommunale tage** og deltagelse i vindmølleprojekt kan dække 65% af kommunens elforbrug.

**Klimatilpasning (DKK 35M):** LAR-løsninger, klimasikring af kloakker og beskyttelse mod oversvømmelse.

Graf [climate-investment-plan](#chart) viser investeringsplan og forventet CO2-reduktion.

**Økonomi:** Samlet investering på **DKK 190M** over 6 år giver **DKK 18M i årlige besparelser** fra 2031 gennem lavere energiudgifter.

**Udfordring:** Begrænsede statslige tilskud betyder kommunen må **lånefinansiere 75%** af investeringerne.

---
*Kilder: Klimaplan 2024-2030 | Klimaaftale for Danmark | Teknisk forvaltning klimarapport*`,
    charts: ['climate-investment-plan', 'co2-reduction-progress'],
    sources: [
      'Klimaplan 2024-2030, Kalundborg Kommune',
      'Klimaaftale for Danmark, Klima- og Energiministeriet',
      'Teknisk forvaltning, klimarapport 2024'
    ]
  },

  q25: {
    questionId: 'q25',
    answer: `# Digitaliseringsstrategiens krav til kommunen

Den **fællesoffentlige digitaliseringsstrategi 2024-2027** stiller omfattende krav til Kalundborg Kommune både teknologisk og organisatorisk.

## Strategiske krav

**Digital sammenhæng:** Kommunens systemer skal kunne **udveksle data** med regionens og statens systemer. Kræver standardisering og nye API'er.

**Digital selvbetjening:** **90% af borgerkontakt** skal kunne håndteres digitalt i 2027. Nuværende niveau er 64%.

**Datafundament:** Kommunen skal etablere **fælles dataplatform** med high-quality, opdaterede data tilgængelige på tværs af forvaltninger.

**Cybersikkerhed:** Opfyldelse af **NIS2-direktivet** kræver betydelig opgradering af sikkerhedsinfrastruktur.

## Investeringsbehov

**IT-infrastruktur (DKK 28M):** Opgradering af netværk, servere og sikkerhedssystemer for at håndtere øget datatrafik og sikkerhedskrav.

**Systemudvikling (DKK 22M):** Udvikling af 15 nye selvbetjeningsløsninger og integration af eksisterende systemer.

**Dataplatform (DKK 12M):** Etablering af cloud-baseret datawarehouse med analytics og BI-værktøjer.

**Kompetenceudvikling (DKK 8M):** Uddannelse af 250 medarbejdere i digitale værktøjer og dataanvendelse.

Graf [digital-strategy-investment](#chart) viser investeringsplan og forventet effekt.

**Gevinster:** Digitaliseringen forventes at frigøre **32 årsværk** (DKK 22M årligt) gennem automatisering og selvbetjening fra 2027.

**Kritisk:** Uden investering risikerer kommunen **manglende compliance** og ineffektive arbejdsgange.

---
*Kilder: Digitaliseringsstrategi 2024-2027 | IT-plan Kalundborg | Digitaliseringsstyrelsen*`,
    charts: ['digital-strategy-investment', 'digitalization-benefits'],
    sources: [
      'Digitaliseringsstrategi 2024-2027, Digitaliseringsstyrelsen',
      'IT-plan Kalundborg Kommune',
      'Fællesoffentlig digitaliseringsstrategi'
    ]
  },

  q26: {
    questionId: 'q26',
    answer: `# Beskæftigelsesreformens implementeringsstatus

**Beskæftigelsesreformen** implementeres i Kalundborg Kommune med fokus på hurtigere indsats, bedre vejledning og tættere samarbejde med erhvervslivet.

## Reformens kerneelementer

**Tidligere indsats:** Ledige skal i aktivering efter **3 måneder** (tidligere 6 måneder). Kræver **12 ekstra jobkonsulenter** til DKK 8,4M årligt.

**Virksomhedsrettet:** **60% af aktivering** skal foregå i private virksomheder frem for kurser. Kalundborg ligger på 42% og skal øge indsatsen.

**Bedre vejledning:** Obligatoriske samtaler hver 14. dag for unge under 30 år. Øger samtalebelastning med **35%**.

**Kompetenceløft:** Ledige uden uddannelse skal tilbydes **opkvalificering**. Budget til AMU-kurser øget med DKK 4,5M.

## Økonomisk påvirkning

**Merudgifter:** DKK 18M årligt til ekstra personale, virksomhedsforløb og kompetenceløft.

**Besparelser:** Hurtigere aktivering og bedre match reducerer forsørgelsesudgifter med forventet **DKK 12M årligt** fra 2026.

**Netto omkostning:** DKK 6M årligt, men med **positiv samfundsøkonomisk effekt** gennem flere i job.

Graf [employment-reform-status](#chart) viser implementeringsfremdrift og økonomisk effekt.

**Status:** **68% implementeret**. Udfordringer med at finde nok praktikpladser i virksomheder og rekruttere kvalificerede jobkonsulenter.

**Kritisk succesfaktor:** Tæt samarbejde med lokale erhverv om praktikpladser og job.

---
*Kilder: Beskæftigelsesreform 2024 | Jobcenter Kalundborg status | Beskæftigelsesudvalget*`,
    charts: ['employment-reform-status', 'activation-types'],
    sources: [
      'Beskæftigelsesreform 2024, Beskæftigelsesministeriet',
      'Jobcenter Kalundborg, statusrapport Q3 2024',
      'Beskæftigelsesudvalget, implementeringsplan'
    ]
  },

  q27: {
    questionId: 'q27',
    answer: `# GDPR-kravs påvirkning af IT-budgettet

**GDPR-regulering** og særligt det kommende **NIS2-direktiv** stiller betydelige krav til Kalundborg Kommunes IT-sikkerhed og skaber væsentlige budgetmæssige konsekvenser.

## Compliance krav

**NIS2-direktivet:** Fra oktober 2024 skal kommunen opfylde **skærpede cybersikkerhedskrav** som kritisk infrastruktur. Omfatter netværkssikkerhed, incident response og kontinuitetsplanlægning.

**GDPR audit:** Årlig compliance-vurdering identificerer **18 systemer** der ikke lever op til krav om dataminimering, kryptering eller privacy-by-design.

**Databeskyttelse:** Alle systemer med persondata skal have **end-to-end kryptering** og dokumenteret databehandleraftale.

## Økonomiske konsekvenser

**Systemopgraderinger (DKK 15M):** 18 ældre systemer skal opgraderes eller udskiftes for GDPR-compliance. Prioritet: HR-system (DKK 4,2M), journalsystemer (DKK 6,8M).

**Cybersikkerhed (DKK 8M):** Implementering af Security Operations Center (SOC), 24/7 overvågning, penetrationstest og sikkerhedsaudits.

**DPO funktion (DKK 2,5M):** Udvidelse af databeskyttelsesrådgiverfunktion fra 1 til 3 medarbejdere for at håndtere kompleksiteten.

**Uddannelse (DKK 1,8M):** Obligatorisk GDPR-træning for alle **4.200 medarbejdere** årligt.

Graf [gdpr-compliance-cost](#chart) viser omkostninger fordelt på områder.

**Risiko:** Manglende compliance kan medføre **bøder op til DKK 20M** og tab af borgerens tillid.

**Løbende omkostninger:** DKK 6M årligt til audit, vedligehold og opdateringer.

---
*Kilder: GDPR compliance audit 2024 | NIS2 implementeringsplan | IT-sikkerhedsstrategi*`,
    charts: ['gdpr-compliance-cost', 'cybersecurity-investment'],
    sources: [
      'GDPR compliance audit 2024, Kalundborg Kommune',
      'NIS2 implementeringsplan',
      'IT-sikkerhedsstrategi 2024-2027'
    ]
  },

  q28: {
    questionId: 'q28',
    answer: `# Politiske aftaler med størst budgetpåvirkning

Flere **nationale politiske aftaler** har markant indflydelse på Kalundborg Kommunes budget og kræver både tilpasninger og investeringer.

## Primære aftaler

**Folkeskolereform:** Merudgift **DKK 12M årligt** (se separat analyse). Påvirker børne- og ungeområdet betydeligt.

**Ældremilliarden:** Tidsbegrænset tilskud **DKK 14,8M årligt** til 2026. Risiko for kvalitetsfald når midler ophører.

**Klima- og energiaftale:** Forpligtelse til 70% CO2-reduktion kræver **DKK 190M i investeringer** over 6 år.

**Beskæftigelsesreform:** Netto merudgift **DKK 6M årligt** til intensiveret indsats.

**Plejehjemsnormering:** Skærpede krav til bemanding øger udgifter med **DKK 18M årligt** fra 2025.

## Samlet økonomisk påvirkning

**Årlige driftskonsekvenser:** Samlet **DKK 52M i permanente merudgifter** fra politiske aftaler uden fuld statskompensation.

**Investeringer:** **DKK 235M** skal investeres over 3 år for at opfylde krav fra reformer og aftaler.

Graf [political-agreements-impact](#chart) viser tidsplan og økonomisk effekt af aftalerne.

**Kompensation:** Staten kompenserer gennemsnitligt **65%** af merudgifterne, hvilket efterlader kommunen med **DKK 18M årligt** i netto merudgift.

**Strategi:** Aktiv deltagelse i KL's lobbyarbejde for bedre kompensation og større kommunal fleksibilitet i implementering.

**Fremtidige aftaler:** Sundhedsaftale 2025 og socialreform 2026 kan tilføje yderligere **DKK 15-25M** i merudgifter.

---
*Kilder: Oversigt politiske aftaler | Økonomiudvalget analyse | KL økonomiske konsekvenser*`,
    charts: ['political-agreements-impact', 'compensation-gap'],
    sources: [
      'Oversigt politiske aftaler påvirkning, Kalundborg Kommune',
      'Økonomiudvalget, aftaleanalyse 2024',
      'KL, økonomiske konsekvenser af nationale aftaler'
    ]
  }
};

export const getAnswerByQuestionId = (questionId) => {
  return mockAnswers[questionId] || null;
};

export const getAllAnswers = () => {
  return Object.values(mockAnswers);
};
