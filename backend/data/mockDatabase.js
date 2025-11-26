// K.A.I.A Perplexity Demo - Centralized Mock Database

// ========================================
// CATEGORIES & QUESTIONS
// ========================================

export const categories = [
  {
    id: 'budget-economy',
    title: 'Budget og økonomi',
    icon: '💰',
    description: 'Spørgsmål om kommunens budget, økonomi og finansiering',
    questions: [
      { id: 'q1', text: 'Hvad er de største budgetudfordringer i Kalundborg Kommune i 2024?', category: 'budget-economy' },
      { id: 'q2', text: 'Hvordan påvirker demografiske ændringer kommunens økonomi?', category: 'budget-economy' },
      { id: 'q3', text: 'Hvilke områder har de største budgetoverskridelser?', category: 'budget-economy' },
      { id: 'q4', text: 'Hvad er kommunens låneramme og gældspolitik?', category: 'budget-economy' },
      { id: 'q5', text: 'Hvordan kan kommunen optimere sine indkøbsaftaler?', category: 'budget-economy' },
      { id: 'q6', text: 'Hvilke effektiviseringsmuligheder findes på administrationsområdet?', category: 'budget-economy' },
      { id: 'q7', text: 'Hvordan fordeles bloktilskuddet mellem forskellige områder?', category: 'budget-economy' },
      { id: 'q8', text: 'Hvad er prognosen for kommunens økonomiske udvikling de næste 5 år?', category: 'budget-economy' },
      { id: 'q9', text: 'Hvordan påvirker inflation og lønudvikling budgettet?', category: 'budget-economy' },
      { id: 'q10', text: 'Hvilke investeringer er planlagt i budgetperioden?', category: 'budget-economy' }
    ]
  },
  {
    id: 'social-services',
    title: 'Sociale tilbud, psykiatri og målgrupper',
    icon: '👥',
    description: 'Spørgsmål om sociale ydelser, psykiatri og specialiserede målgrupper',
    questions: [
      { id: 'q11', text: 'Hvordan udvikler udgifterne til specialområdet sig?', category: 'social-services' },
      { id: 'q12', text: 'Hvilke forebyggende tiltag kan reducere udgifterne til udsatte børn?', category: 'social-services' },
      { id: 'q13', text: 'Hvad er status på samarbejdet med Region Sjælland om psykiatri?', category: 'social-services' },
      { id: 'q14', text: 'Hvordan sikrer vi kvalitet i ældreplejen inden for budgetrammen?', category: 'social-services' },
      { id: 'q15', text: 'Hvilke tilbud har kommunen til borgere med handicap?', category: 'social-services' },
      { id: 'q16', text: 'Hvordan udvikler antallet af udsatte familier sig?', category: 'social-services' },
      { id: 'q17', text: 'Hvad koster gennemsnitligt et anbringelsesforløb?', category: 'social-services' },
      { id: 'q18', text: 'Hvilke tværfaglige samarbejder findes på socialområdet?', category: 'social-services' },
      { id: 'q19', text: 'Hvordan understøtter kommunen overgangen fra barn til voksen for udsatte?', category: 'social-services' },
      { id: 'q20', text: 'Hvad er effekten af tidlig indsats på socialområdet?', category: 'social-services' }
    ]
  },
  {
    id: 'reforms-legislation',
    title: 'Reformer, lovgivning og politiske aftaler',
    icon: '📚',
    description: 'Spørgsmål om reformer, lovændringer og politiske beslutninger',
    questions: [
      { id: 'q21', text: 'Hvordan påvirker den ny folkeskolereform Kalundborg Kommune?', category: 'reforms-legislation' },
      { id: 'q22', text: 'Hvilke ændringer følger af ældremilliarden?', category: 'reforms-legislation' },
      { id: 'q23', text: 'Hvad betyder den nye lovgivning om specialundervisning økonomisk?', category: 'reforms-legislation' },
      { id: 'q24', text: 'Hvordan implementeres klimaaftalen lokalt?', category: 'reforms-legislation' },
      { id: 'q25', text: 'Hvilke krav stiller digitaliseringsstrategien til kommunen?', category: 'reforms-legislation' },
      { id: 'q26', text: 'Hvad er status på implementering af beskæftigelsesreformen?', category: 'reforms-legislation' },
      { id: 'q27', text: 'Hvordan påvirker nye GDPR-krav kommunens IT-budget?', category: 'reforms-legislation' },
      { id: 'q28', text: 'Hvilke politiske aftaler påvirker budgettet mest?', category: 'reforms-legislation' },
      { id: 'q29', text: 'Hvad betyder den ny plejehjemsnormering i praksis?', category: 'reforms-legislation' },
      { id: 'q30', text: 'Hvordan forbereder kommunen sig på kommende reformer?', category: 'reforms-legislation' }
    ]
  },
  {
    id: 'analysis-forecasting',
    title: 'Mønsteranalyse, budgetopfølgning og prognoser',
    icon: '📊',
    description: 'Spørgsmål om dataanalyse, trends og fremskrivninger',
    questions: [
      { id: 'q31', text: 'Hvilke mønstre ses i budgetafvigelser over de sidste 3 år?', category: 'analysis-forecasting' },
      { id: 'q32', text: 'Hvordan forudsiger vi bedre udgiftsudviklingen på socialområdet?', category: 'analysis-forecasting' },
      { id: 'q33', text: 'Hvilke tidlige indikatorer varsler budgetpres?', category: 'analysis-forecasting' },
      { id: 'q34', text: 'Hvad viser benchmarking med sammenlignelige kommuner?', category: 'analysis-forecasting' },
      { id: 'q35', text: 'Hvordan udvikler nøgletallene sig i forhold til målsætninger?', category: 'analysis-forecasting' },
      { id: 'q36', text: 'Hvilke sæsonmønstre påvirker økonomien?', category: 'analysis-forecasting' },
      { id: 'q37', text: 'Hvad er de mest præcise metoder til udgiftsprognose?', category: 'analysis-forecasting' },
      { id: 'q38', text: 'Hvordan kan AI forbedre budgetopfølgning?', category: 'analysis-forecasting' },
      { id: 'q39', text: 'Hvilke KPI\'er skal følges tættest?', category: 'analysis-forecasting' },
      { id: 'q40', text: 'Hvad viser historisk data om effekten af besparelser?', category: 'analysis-forecasting' }
    ]
  }
];

// ========================================
// MOCK ANSWERS (Sample - all 40 would be here)
// ========================================

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
  }
  // ... rest of q2-q40 would follow same pattern
};

// ========================================
// MOCK CHARTS
// ========================================

export const mockCharts = {
  'budget-trend-2024': {
    type: 'line',
    title: 'Budgetudvikling 2020-2024 (DKK Millioner)',
    data: [
      { year: '2020', budget: 2650, actual: 2680, deviation: 30 },
      { year: '2021', budget: 2720, actual: 2765, deviation: 45 },
      { year: '2022', budget: 2810, actual: 2885, deviation: 75 },
      { year: '2023', budget: 2920, actual: 2998, deviation: 78 },
      { year: '2024', budget: 3040, actual: 3113, deviation: 73 }
    ],
    config: {
      xKey: 'year',
      lines: [
        { dataKey: 'budget', stroke: '#8884d8', name: 'Budget' },
        { dataKey: 'actual', stroke: '#82ca9d', name: 'Faktisk' }
      ]
    }
  },
  'demographic-pressure': {
    type: 'area',
    title: 'Demografisk pres - Aldersfordeling',
    data: [
      { year: '2020', '0-17': 18.2, '18-64': 57.7, '65+': 24.1 },
      { year: '2021', '0-17': 17.9, '18-64': 57.2, '65+': 24.9 },
      { year: '2022', '0-17': 17.6, '18-64': 56.8, '65+': 25.6 },
      { year: '2023', '0-17': 17.4, '18-64': 56.2, '65+': 26.4 },
      { year: '2024', '0-17': 17.1, '18-64': 55.8, '65+': 27.1 },
      { year: '2025', '0-17': 16.9, '18-64': 55.3, '65+': 27.8 }
    ],
    config: {
      xKey: 'year',
      areas: [
        { dataKey: '0-17', fill: '#8dd1e1', name: '0-17 år' },
        { dataKey: '18-64', fill: '#82ca9d', name: '18-64 år' },
        { dataKey: '65+', fill: '#ffc658', name: '65+ år' }
      ]
    }
  }
  // ... rest of charts would follow
};

// ========================================
// MOCK ANALYSIS
// ========================================

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
  }
  // ... rest of analysis would follow
};

// ========================================
// MOCK FOLLOW-UP QUESTIONS
// ========================================

export const mockFollowUp = {
  q1: {
    questionId: 'q1',
    followUpQuestions: [
      'Hvilke konkrete effektiviseringstiltag har størst potentiale i Kalundborg?',
      'Hvordan kan kommunen reducere udgifterne på specialområdet på kort sigt?',
      'Hvilke kommuner har lignende udfordringer og hvordan håndterer de dem?',
      'Hvad er de væsentligste risici for budgettet i 2025?',
      'Hvordan påvirker de demografiske ændringer budgettet de næste 5 år?'
    ]
  }
  // ... rest of follow-ups would follow
};

// ========================================
// EXPORT FUNCTIONS
// ========================================

export function getCategories() {
  return categories;
}

export function getQuestionById(questionId) {
  for (const category of categories) {
    const question = category.questions.find(q => q.id === questionId);
    if (question) return question;
  }
  return null;
}

export function getAnswerByQuestionId(questionId) {
  return mockAnswers[questionId] || null;
}

export function getChartById(chartId) {
  return mockCharts[chartId] || null;
}

export function getAnalysisByQuestionId(questionId) {
  return mockAnalysis[questionId] || null;
}

export function getFollowUpByQuestionId(questionId) {
  return mockFollowUp[questionId] || null;
}

export function getAllData() {
  return {
    categories,
    answers: mockAnswers,
    charts: mockCharts,
    analysis: mockAnalysis,
    followUp: mockFollowUp
  };
}
