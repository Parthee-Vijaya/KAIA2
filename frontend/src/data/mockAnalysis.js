// K.A.I.A Perplexity Demo - Mock Analysis Data

export const mockAnalysis = {
  q1: {
    questionId: 'q1',
    statusNow: [
      'Kommunen har et strukturelt underskud på DKK 73M i 2024, primært drevet af stigende udgifter på specialområdet (+DKK 42M) og demografisk pres',
      'Bloktilskuddet stiger kun 2,1% årligt, mens udgifterne vokser med 4,3% - dette gab skaber vedvarende økonomisk pres',
      'Inflation på 6,2% og overenskomstmæssige lønstigninger på 3,7% øger driftsomkostningerne markant uden fuld kompensation'
    ],
    scenarios: [
      {
        type: 'best',
        title: 'Optimistisk scenario',
        description: 'Vellykket gennemførelse af effektiviseringer på DKK 65M, kontrol med specialområdet gennem tidlig indsats, og befolkningstilvækst gennem erhvervsudvikling fører til balance i 2027',
        probability: '35%',
        impact: 'Balance opnås, likviditet forbedres til DKK 200M'
      },
      {
        type: 'likely',
        title: 'Sandsynligt scenario',
        description: 'Delvis gennemførelse af effektiviseringer (DKK 40M), fortsatte udfordringer på specialområdet, og moderat demografisk udvikling resulterer i vedvarende mindre underskud på DKK 30-40M',
        probability: '50%',
        impact: 'Kræver løbende tilpasninger og prioriteringer'
      },
      {
        type: 'worst',
        title: 'Pessimistisk scenario',
        description: 'Effektiviseringer realiseres ikke, specialområdet vokser uændret (+9% årligt), og økonomisk recession reducerer skatteindtægter yderligere - underskud på DKK 120M+ i 2027',
        probability: '15%',
        impact: 'Kræver drastiske besparelser og nedskæringer'
      }
    ],
    actions: [
      '✅ Implementer straks de identificerede effektiviseringer med højest ROI: RPA/automatisering (DKK 5,2M), optimeret indkøb (DKK 15M), og velfærdsteknologi (DKK 12M)',
      '✅ Etabler tværgående task force til styring af specialområdet med fokus på tidlig indsats, flere kommunale tilbud, og bedre prognoser',
      '✅ Gennemfør månedlig budgetopfølgning med forecasting for at identificere afvigelser tidligt og justere løbende',
      '✅ Prioriter investeringer i erhvervsudvikling og bosætning for at øge skatteindtægter langsigtet',
      '✅ Forhandle med KL og andre kommuner om fælles lobbyindsats for bedre statslig kompensation til demografiske udfordringer'
    ]
  },

  q2: {
    questionId: 'q2',
    statusNow: [
      'Andelen af borgere over 65 år stiger fra 24,1% til forventet 28,7% i 2030, hvilket øger plejeudgifterne med DKK 180M over perioden',
      'Antallet af erhvervsaktive falder med 800 personer frem mod 2030, reducerende skatteindtægter med anslået DKK 45M årligt',
      'Forsørgerkvoten forværres fra 1,8 arbejdende per ældre i 2020 til 1,4 i 2030, hvilket skaber strukturelt udgiftspres'
    ],
    scenarios: [
      {
        type: 'best',
        title: 'Vækstscenario',
        description: 'Succesfuld tiltrækkning af erhverv og familier gennem målrettet bosætningsstrategi stabiliserer befolkningssammensætningen. Andelen af erhvervsaktive holder sig over 54%',
        probability: '25%',
        impact: 'Demografisk balance forbedres, skatteindtægter stabiliseres'
      },
      {
        type: 'likely',
        title: 'Fortsat tendens',
        description: 'Den nuværende demografiske udvikling fortsætter som prognosticeret. Kræver betydelige tilpasninger i velfærdsydelser og øget produktivitet',
        probability: '60%',
        impact: 'DKK 180M merudgift på ældrepleje, DKK 45M fald i skatteindtægter'
      },
      {
        type: 'worst',
        title: 'Accelereret afvandring',
        description: 'Flere unge og erhvervsaktive flytter væk grundet manglende jobmuligheder. Andelen af 65+ når 30% allerede i 2028',
        probability: '15%',
        impact: 'Kritisk udgiftspres, skatteindtægter falder yderligere DKK 25M'
      }
    ],
    actions: [
      '✅ Udvikle og implementere ambitiøs bosætnings- og erhvervsudviklingsstrategi målrettet familier i den erhvervsaktive alder',
      '✅ Investere massivt i velfærdsteknologi (DKK 25M over 3 år) for at håndtere flere ældre borgere uden proportional personalestigning',
      '✅ Etablere partnerskaber med lokale erhverv om praktikpladser og jobtilbud for at fastholde unge efter endt uddannelse',
      '✅ Udvikle fleksible plejemodeller der kan skalere effektivt med stigende ældrebyrde (rehabilitering, frivillige, teknologi)',
      '✅ Lobbying overfor staten om særlig støtte til kommuner med ekstrem demografisk udfordring'
    ]
  },

  q3: {
    questionId: 'q3',
    statusNow: [
      'Børn og unge specialområdet har det største merforbrug på DKK 42M (18% over budget), primært drevet af dyre eksterne anbringelser',
      'Social og sundhed voksenområdet overskrider med DKK 23M (12%), især på botilbud og psykiatri-relaterede tilbud',
      'Socialområdet samlet udgør 65% af den totale budgetoverskridelse på DKK 73M - klart det mest pressede område'
    ],
    scenarios: [
      {
        type: 'best',
        title: 'Vellykket forebyggelse',
        description: 'Tidlig indsats og flere kommunale tilbud reducerer behovet for dyre eksterne anbringelser med 40% over 3 år. Overskridelser falder til DKK 15M i 2027',
        probability: '30%',
        impact: 'DKK 25M+ årlig besparelse fra 2027'
      },
      {
        type: 'likely',
        title: 'Fortsat pres',
        description: 'Kompleksiteten af sager fortsætter med at stige, men delvis effekt af forebyggelse stabiliserer væksten. Overskridelse på DKK 35-40M vedvarer',
        probability: '55%',
        impact: 'Kræver permanent budgettilpasning på DKK 35M'
      },
      {
        type: 'worst',
        title: 'Eskalerende udgifter',
        description: 'Antallet af komplekse sager accelererer, psykiatrien får længere ventetider, og kommunen tvinges til endnu dyrere akutløsninger. Overskridelse når DKK 85M',
        probability: '15%',
        impact: 'Kræver omfattende omprioriteringer på tværs af hele budgettet'
      }
    ],
    actions: [
      '✅ Etablere kommunalt døgntilbud for 12-16 pladser til at reducere eksterne anbringelser (investering DKK 18M, årlig besparelse DKK 8M)',
      '✅ Implementere MST og FFT evidensbaserede familiebehandlingsprogrammer for at forebygge anbringelser (besparelse 1:6 ratio)',
      '✅ Styrke samarbejdet med Region Sjælland om hurtigere udredning og behandling i psykiatrien for at undgå dyre kommunale mellemløsninger',
      '✅ Indføre systematisk business case-vurdering for alle nye sager med alternativanalyse før ekstern anbringelse',
      '✅ Etablere tættere budgetopfølgning med månedlig forecasting og tidlig eskalering af afvigelser'
    ]
  },

  q5: {
    questionId: 'q5',
    statusNow: [
      'Kun 58% af kommunens årlige indkøb på DKK 890M er dækket af rammeaftaler - langt under KL\'s anbefaling på 75%',
      'Fragmenteret indkøb med 127 forskellige leverandører på kontorartikler alene koster DKK 4M i unødige omkostninger',
      'Samlet besparelsespotentiale på DKK 15-22M årligt gennem SKI-aftaler, koordineret udbud og procesdigitalisering'
    ],
    scenarios: [
      {
        type: 'best',
        title: 'Fuld optimering',
        description: 'Etablering af professionel central indkøbsfunktion, tilslutning til alle relevante SKI-aftaler, og digital e-handel implementering realiserer DKK 22M årligt',
        probability: '40%',
        impact: 'DKK 22M årlig besparelse + bedre kvalitet og compliance'
      },
      {
        type: 'likely',
        title: 'Delvis forbedring',
        description: 'Tilslutning til de største SKI-aftaler og konsolidering af primære leverandører giver DKK 12-15M årligt. E-handel implementeres gradvist',
        probability: '50%',
        impact: 'DKK 12-15M besparelse over 2 år'
      },
      {
        type: 'worst',
        title: 'Status quo',
        description: 'Organisatorisk modstand og decentral kultur forhindrer koordinering. Kun mindre isolerede forbedringer opnås (DKK 3-5M)',
        probability: '10%',
        impact: 'Tabt besparelsespotentiale på DKK 17-19M årligt'
      }
    ],
    actions: [
      '✅ Etabler central indkøbsenhed med mandat og beslutningskompetence på tværs af forvaltninger (investering DKK 2,5M, besparelse DKK 15M+)',
      '✅ Gennemfør hurtig tilslutning til SKI-rammeaftaler for IT/software (DKK 8M), energi (DKK 4M) og fødevarer (DKK 3M)',
      '✅ Implementer e-handelssystem med automatisk fakturahåndtering (investering DKK 4M, procesbesparelse DKK 6M årligt)',
      '✅ Lav fælles udbud med Holbæk og Sorø kommuner på store områder som rengøring og byggematerialer',
      '✅ Etabler quarterly spend analysis og leverandør scorecard for kontinuerlig optimering'
    ]
  },

  q8: {
    questionId: 'q8',
    statusNow: [
      'Uden korrigerende tiltag vil kommunen have et akkumuleret underskud på DKK 285M i 2029 grundet strukturelt gap mellem indtægter (+1,6% årligt) og udgifter (+3,2% årligt)',
      'Basisscenariet med vedtagne effektiviseringer giver stadig et underskud på DKK 42M i 2029',
      'Kritiske succesfaktorer er kontrol med specialområdet, erhvervsudvikling, og gennemførelse af DKK 65M i effektiviseringer'
    ],
    scenarios: [
      {
        type: 'best',
        title: 'Optimistisk - Balance i 2028',
        description: 'Vellykket effektivisering, specialområdet stabiliseres gennem tidlig indsats, befolkningstilvækst gennem erhverv øger skatteindtægter. Balance opnås 2028',
        probability: '35%',
        impact: 'Positiv balance DKK 8M i 2029, likviditet styrkes'
      },
      {
        type: 'likely',
        title: 'Basis - Fortsat underskud',
        description: 'Moderat udgiftsstyring og delvis effektivisering. Demografisk udvikling fortsætter som prognose. Underskud DKK 42M i 2029',
        probability: '50%',
        impact: 'Kræver løbende tilpasninger og prioriteringer'
      },
      {
        type: 'worst',
        title: 'Pessimistisk - Kritisk underskud',
        description: 'Budgetoverskridelser fortsætter, effektiviseringer fejler, recession rammer skatteindtægter. Underskud DKK 180M i 2029',
        probability: '15%',
        impact: 'Tvinges til drastiske nedskæringer i kernevelfærd'
      }
    ],
    actions: [
      '✅ Vedtage og overvåge implementering af konkret handlingsplan for de DKK 65M i effektiviseringer med tydelige milepæle og ansvarlige',
      '✅ Etablere forebyggelsesstrategi på børneområdet med fokus på at bryde udgiftsvæksten gennem tidlig indsats (ROI 1:6)',
      '✅ Iværksætte målrettet erhvervsudviklingsindsats for at tiltrække arbejdspladser og øge skatteindtægter (investering DKK 15M kan give DKK 30M ekstra indtægter)',
      '✅ Implementere rolling forecast system med kvartalsvis scenarieopdatering for at justere strategi proaktivt',
      '✅ Etablere politisk tværgående økonomisk task force der mødes månedligt om økonomistyring og prioriteringer'
    ]
  },

  q11: {
    questionId: 'q11',
    statusNow: [
      'Udgifterne på specialområdet er steget 57% fra DKK 218M (2019) til DKK 342M (2024) - langt over demografisk vækst og inflation',
      'Gennemsnitlig årlig vækst på 9,4% vs. budgetstigning på kun 4,2%, skabende akkumuleret underskud på DKK 98M',
      'Drivere er flere komplekse sager (+48% børn i specialtilbud), dyrere eksterne anbringelser (nu 45% vs. 28%), og stigende voksenpsykiatri'
    ],
    scenarios: [
      {
        type: 'best',
        title: 'Vendt udvikling',
        description: 'Massiv satsning på tidlig indsats og kommunale tilbud reducerer væksten til 2-3% årligt. Udgifter stabiliseres på DKK 380M i 2027',
        probability: '25%',
        impact: 'DKK 40M+ besparelse sammenlignet med nuværende trend'
      },
      {
        type: 'likely',
        title: 'Dæmpet vækst',
        description: 'Forebyggelsesindsats har delvis effekt. Vækst reduceres til 5-6% årligt. Udgifter når DKK 430M i 2027',
        probability: '55%',
        impact: 'Kræver fortsat budgettilpasning på DKK 15-20M årligt'
      },
      {
        type: 'worst',
        title: 'Accelererende udgifter',
        description: 'Kompleksiteten af sager øges yderligere, ventetider i psykiatri stiger, udgiftsvækst fortsætter på 9%+. DKK 485M i 2027',
        probability: '20%',
        impact: 'Ukontrollerbar udgiftsspiral, kræver politisk krisehåndtering'
      }
    ],
    actions: [
      '✅ Investere DKK 15M i tidlig indsats (familiecentre, MST, FFT) med dokumenteret ROI på 1:6 - kan spare DKK 90M over 5 år',
      '✅ Etablere eget kommunalt døgntilbud for 12-16 pladser til DKK 18M investering, sparer DKK 8M årligt på eksterne anbringelser',
      '✅ Styrke PPR og børnepsykiatri med 4 ekstra psykologer (DKK 3,2M) for hurtigere udredning og forebyggelse',
      '✅ Implementere systematisk forecasting-model baseret på tidlige indikatorer (nye sager i familierådgivning, børnehavetrivsel) for bedre budgetkontrol',
      '✅ Etablere tættere samarbejde med Region Sjælland om co-location af psykiatri og socialrådgivning for at undgå dyre mellemløsninger'
    ]
  },

  q12: {
    questionId: 'q12',
    statusNow: [
      'Evidensen viser at tidlig familiebehandling kan undgå 40% af anbringelser med ROI på 1:6 (1 krone investeret giver 6 kr. tilbage)',
      'Kalundborg har potentiale for DKK 24M årlig besparelse ved at undgå 35 anbringelser gennem MST og FFT programmer',
      'Tidlig trivselsmåling i dagtilbud kan identificere risikobørn 2-3 år tidligere, men kræver systematisk implementering'
    ],
    scenarios: [
      {
        type: 'best',
        title: 'Fuld forebyggelse',
        description: 'Implementering af alle evidensbaserede programmer (MST, FFT, familiecentre, skolesocialrådgivere) reducerer anbringelser med 45% og specialundervisning med 30%',
        probability: '30%',
        impact: 'DKK 65M årlig besparelse + markant forbedret børnetrivsel'
      },
      {
        type: 'likely',
        title: 'Delvis effekt',
        description: 'MST og familiecentre implementeres succesfuldt, men fuld skalering tager tid. 25% reduktion i anbringelser over 3 år',
        probability: '55%',
        impact: 'DKK 35M årlig besparelse fra 2027'
      },
      {
        type: 'worst',
        title: 'Begrænset impact',
        description: 'Organisatorisk modstand, manglende ressourcer til implementering, og vedvarende kompleksitet af sager begrænser effekten til 10% reduktion',
        probability: '15%',
        impact: 'Kun DKK 12M besparelse, fortsatte budgetudfordringer'
      }
    ],
    actions: [
      '✅ Implementere MST (Multisystemisk Terapi) og FFT (Functional Family Therapy) programmer med certificerede terapeuter (investering DKK 3,2M, besparelse DKK 15M årligt)',
      '✅ Etablere 2 familiecentre der samler sundhedspleje, socialrådgivning, PPR og dagtilbud (investering DKK 8M, besparelse DKK 22M gennem koordinering)',
      '✅ Ansætte 6 skolesocialrådgivere fordelt på folkeskoler til tidlig opsporing og håndtering (DKK 5M investering, DKK 22M besparelse i specialundervisning)',
      '✅ Implementere systematisk trivselsmåling i alle dagtilbud med automatisk opfølgning på risikobørn (DKK 1,5M årligt)',
      '✅ Etablere family preservation team med 24/7 akut familiebehandling til at undgå akutte anbringelser (DKK 4M, kan spare DKK 12M)'
    ]
  },

  q21: {
    questionId: 'q21',
    statusNow: [
      'Folkeskolereformen medfører DKK 34M i årlige merudgifter når fuldt implementeret (2026), men staten kompenserer kun med DKK 22M',
      'Kommunalt merforbrug på DKK 12M til ekstra lærere (30 stillinger), mindre klasser, og tidligere skolestart',
      'Investeringsbehov på DKK 45M til fysisk udbygning af skoler for at rumme de ekstra børnehaveklasser'
    ],
    scenarios: [
      {
        type: 'best',
        title: 'Positiv langsigtet effekt',
        description: 'Tidligere indsats og bedre læring reducerer specialundervisningsbehov med 15% og forbedrer eksamensresultater. Netto besparelse DKK 8M fra 2028',
        probability: '40%',
        impact: 'Reform finansierer sig selv efter 4 år gennem reduceret specialundervisning'
      },
      {
        type: 'likely',
        title: 'Neutral effekt',
        description: 'Moderat forbedring af læringsresultater, men begrænset effekt på specialundervisning. Permanent merforbrug på DKK 10-12M',
        probability: '45%',
        impact: 'Kræver permanent budgettilpasning'
      },
      {
        type: 'worst',
        title: 'Utilstrækkelig kompensation',
        description: 'Reformens krav øges yderligere, kompensation følger ikke med, og merforbrug når DKK 22M uden dokumenteret effekt på læring',
        probability: '15%',
        impact: 'Betydelig budgetbelastning, politisk pres for ændringer'
      }
    ],
    actions: [
      '✅ Gennemføre detaljeret cost-benefit analyse af reformens langsigtede effekt på specialundervisning og brug den til at justere strategi',
      '✅ Forhandle med KL om øget statskompensation baseret på dokumenterede merudgifter - koordinere med andre kommuner',
      '✅ Optimere skolestruktur ved at samle mindre skoler (som planlagt fællesskole) for at opnå stordriftsfordele',
      '✅ Investere målrettet i læseindsats og tidlig screening for at maksimere reformens potentiale for at reducere senere specialundervisning',
      '✅ Måle og dokumentere reformens effekt kvartalsvis (læseresultater, trivsel, specialundervisningsbehov) for evidensbaseret justering'
    ]
  }

  // Pattern continues for all 40 questions with same structure:
  // - 3 statusNow points
  // - 3 scenarios (best/likely/worst) with probability and impact
  // - 5 actionable items with checkmarks
};

export const getAnalysisByQuestionId = (questionId) => {
  return mockAnalysis[questionId] || null;
};

export const getAllAnalysis = () => {
  return Object.values(mockAnalysis);
};
