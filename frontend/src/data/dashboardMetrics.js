// K.A.I.A Dashboard - Key Metrics Data
// 40 forskellige cards der roterer hvert 20. sekund

// 10 Budgetbalance cards (forskellige områder)
const budgetBalanceCards = [
  {
    id: 'budget-jobcenter',
    label: 'Budgetbalance',
    area: 'Jobcenter',
    value: '-12.3',
    unit: 'M DKK',
    trend: 'down',
    change: '-8.5%',
    period: 'vs. budget 2024',
    description: 'Stigende udgifter til kontanthjælp og aktivering',
    category: 'budget'
  },
  {
    id: 'budget-skole',
    label: 'Budgetbalance',
    area: 'Folkeskoler',
    value: '-8.7',
    unit: 'M DKK',
    trend: 'down',
    change: '-5.2%',
    period: 'vs. budget 2024',
    description: 'Ekstra udgifter til lærerlønninger og vedligehold',
    category: 'budget'
  },
  {
    id: 'budget-ældre',
    label: 'Budgetbalance',
    area: 'Ældreområdet',
    value: '-15.2',
    unit: 'M DKK',
    trend: 'down',
    change: '-12.1%',
    period: 'vs. budget 2024',
    description: 'Stigende behov for hjemmehjælp og pleje',
    category: 'budget'
  },
  {
    id: 'budget-teknik',
    label: 'Budgetbalance',
    area: 'Teknik & Miljø',
    value: '-4.3',
    unit: 'M DKK',
    trend: 'down',
    change: '-3.8%',
    period: 'vs. budget 2024',
    description: 'Investeringer i klimatilpasning og vejnet',
    category: 'budget'
  },
  {
    id: 'budget-kultur',
    label: 'Budgetbalance',
    area: 'Kultur & Fritid',
    value: '-2.1',
    unit: 'M DKK',
    trend: 'down',
    change: '-4.2%',
    period: 'vs. budget 2024',
    description: 'Drift af biblioteker og fritidsfaciliteter',
    category: 'budget'
  },
  {
    id: 'budget-sundhed',
    label: 'Budgetbalance',
    area: 'Sundhed & Forebyggelse',
    value: '-6.8',
    unit: 'M DKK',
    trend: 'down',
    change: '-7.3%',
    period: 'vs. budget 2024',
    description: 'Stigende udgifter til sundhedsydelser',
    category: 'budget'
  },
  {
    id: 'budget-børn',
    label: 'Budgetbalance',
    area: 'Børn & Unge',
    value: '-9.4',
    unit: 'M DKK',
    trend: 'down',
    change: '-6.9%',
    period: 'vs. budget 2024',
    description: 'Dagtilbud og ungdomsklubber',
    category: 'budget'
  },
  {
    id: 'budget-administration',
    label: 'Budgetbalance',
    area: 'Administration',
    value: '-3.2',
    unit: 'M DKK',
    trend: 'down',
    change: '-2.1%',
    period: 'vs. budget 2024',
    description: 'IT-systemer og personaleomkostninger',
    category: 'budget'
  },
  {
    id: 'budget-planlægning',
    label: 'Budgetbalance',
    area: 'Planlægning & Byudvikling',
    value: '-5.6',
    unit: 'M DKK',
    trend: 'down',
    change: '-9.4%',
    period: 'vs. budget 2024',
    description: 'Byudviklingsprojekter og planlægning',
    category: 'budget'
  },
  {
    id: 'budget-sikkerhed',
    label: 'Budgetbalance',
    area: 'Sikkerhed & Beredskab',
    value: '-2.8',
    unit: 'M DKK',
    trend: 'down',
    change: '-3.5%',
    period: 'vs. budget 2024',
    description: 'Brandvæsen og beredskabsplanlægning',
    category: 'budget'
  }
];

// 10 Befolkningskort
const populationCards = [
  {
    id: 'pop-tilflytter',
    label: 'Befolkning',
    area: 'Netto tilflytter',
    value: '+127',
    unit: 'personer',
    trend: 'up',
    change: '+2.6%',
    period: 'siden 2023',
    description: 'Flere tilflyttere end fraflyttere i 2024',
    category: 'population'
  },
  {
    id: 'pop-andel-ældre',
    label: 'Befolkning',
    area: 'Andel 65+',
    value: '24.1',
    unit: '%',
    trend: 'up',
    change: '+2.1%',
    period: 'siden 2020',
    description: 'Stigende andel ældre i befolkningen',
    category: 'population'
  },
  {
    id: 'pop-ung-under-18',
    label: 'Befolkning',
    area: 'Unge under 18',
    value: '9.400',
    unit: 'personer',
    trend: 'down',
    change: '-1.2%',
    period: 'årligt',
    description: 'Faldende antal børn og unge',
    category: 'population'
  },
  {
    id: 'pop-ung-uddannelse',
    label: 'Befolkning',
    area: 'Unge 18-25 i uddannelse',
    value: '2.850',
    unit: 'personer',
    trend: 'up',
    change: '+3.4%',
    period: 'siden 2023',
    description: 'Stigende antal unge i uddannelse',
    category: 'population'
  },
  {
    id: 'pop-ung-job',
    label: 'Befolkning',
    area: 'Unge 18-25 i job',
    value: '1.920',
    unit: 'personer',
    trend: 'up',
    change: '+1.8%',
    period: 'siden 2023',
    description: 'Flere unge i beskæftigelse',
    category: 'population'
  },
  {
    id: 'pop-aldersfordeling',
    label: 'Befolkning',
    area: 'Gennemsnitsalder',
    value: '44.2',
    unit: 'år',
    trend: 'up',
    change: '+0.8 år',
    period: 'siden 2020',
    description: 'Befolkningen bliver ældre',
    category: 'population'
  },
  {
    id: 'pop-husholdninger',
    label: 'Befolkning',
    area: 'Antal husholdninger',
    value: '22.150',
    unit: 'husholdninger',
    trend: 'up',
    change: '+0.5%',
    period: 'årligt',
    description: 'Stigende antal husholdninger',
    category: 'population'
  },
  {
    id: 'pop-enlige',
    label: 'Befolkning',
    area: 'Enlige husholdninger',
    value: '8.240',
    unit: 'husholdninger',
    trend: 'up',
    change: '+2.3%',
    period: 'årligt',
    description: 'Stigende andel enlige husholdninger',
    category: 'population'
  },
  {
    id: 'pop-børn-per-husholdning',
    label: 'Befolkning',
    area: 'Gns. børn per husholdning',
    value: '1.42',
    unit: 'børn',
    trend: 'down',
    change: '-0.08',
    period: 'siden 2020',
    description: 'Faldende antal børn per familie',
    category: 'population'
  },
  {
    id: 'pop-befolkningsvækst',
    label: 'Befolkning',
    area: 'Befolkningsvækst',
    value: '-0.3',
    unit: '%',
    trend: 'down',
    change: '-0.1%',
    period: 'årligt',
    description: 'Lidt faldende befolkningstal',
    category: 'population'
  }
];

// 20 Andre relevante kort (økonomi, gæld, investeringer, etc.)
const otherCards = [
  {
    id: 'econ-total-gæld',
    label: 'Økonomi',
    area: 'Total gæld',
    value: '1.2',
    unit: 'mia. DKK',
    trend: 'down',
    change: '-8%',
    period: 'siden 2021',
    description: 'Gæld per indbygger: DKK 24.500',
    category: 'economy'
  },
  {
    id: 'econ-gæld-per-indbygger',
    label: 'Økonomi',
    area: 'Gæld per indbygger',
    value: '24.500',
    unit: 'DKK',
    trend: 'down',
    change: '-7.2%',
    period: 'siden 2021',
    description: 'Faldende gæld per indbygger',
    category: 'economy'
  },
  {
    id: 'econ-skatteindtægter',
    label: 'Økonomi',
    area: 'Skatteindtægter',
    value: '1.85',
    unit: 'mia. DKK',
    trend: 'up',
    change: '+2.3%',
    period: 'årligt',
    description: 'Stigende skatteindtægter',
    category: 'economy'
  },
  {
    id: 'econ-bloktilskud',
    label: 'Økonomi',
    area: 'Bloktilskud',
    value: '892',
    unit: 'M DKK',
    trend: 'up',
    change: '+1.8%',
    period: 'årligt',
    description: 'Stigende bloktilskud fra staten',
    category: 'economy'
  },
  {
    id: 'econ-investeringer',
    label: 'Økonomi',
    area: 'Investeringer',
    value: '145',
    unit: 'M DKK',
    trend: 'up',
    change: '+12.5%',
    period: 'årligt',
    description: 'Stigende investeringer i infrastruktur',
    category: 'economy'
  },
  {
    id: 'econ-likviditet',
    label: 'Økonomi',
    area: 'Likviditet',
    value: '287',
    unit: 'M DKK',
    trend: 'up',
    change: '+5.2%',
    period: 'siden 2023',
    description: 'God likviditetsposition',
    category: 'economy'
  },
  {
    id: 'econ-renteudgifter',
    label: 'Økonomi',
    area: 'Renteudgifter',
    value: '42',
    unit: 'M DKK',
    trend: 'up',
    change: '+8.3%',
    period: 'årligt',
    description: 'Stigende renter på kommunegæld',
    category: 'economy'
  },
  {
    id: 'econ-udligning',
    label: 'Økonomi',
    area: 'Udligningsbidrag',
    value: '156',
    unit: 'M DKK',
    trend: 'down',
    change: '-3.1%',
    period: 'årligt',
    description: 'Faldende udligningsbidrag',
    category: 'economy'
  },
  {
    id: 'econ-overskud',
    label: 'Økonomi',
    area: 'Årsresultat',
    value: '-73',
    unit: 'M DKK',
    trend: 'down',
    change: '-12%',
    period: 'vs. budget 2024',
    description: 'Underskud på tværs af områder',
    category: 'economy'
  },
  {
    id: 'econ-reserver',
    label: 'Økonomi',
    area: 'Økonomiske reserver',
    value: '428',
    unit: 'M DKK',
    trend: 'down',
    change: '-15%',
    period: 'siden 2023',
    description: 'Faldende reserver pga. overskridelser',
    category: 'economy'
  },
  {
    id: 'service-digitalisering',
    label: 'Service',
    area: 'Digitaliseringsgrad',
    value: '78',
    unit: '%',
    trend: 'up',
    change: '+5%',
    period: 'siden 2023',
    description: 'Stigende digitalisering af services',
    category: 'service'
  },
  {
    id: 'service-selvbetjening',
    label: 'Service',
    area: 'Selvbetjening',
    value: '62',
    unit: '%',
    trend: 'up',
    change: '+8%',
    period: 'siden 2023',
    description: 'Flere borgere bruger selvbetjening',
    category: 'service'
  },
  {
    id: 'service-svar-tid',
    label: 'Service',
    area: 'Gns. svar-tid',
    value: '2.3',
    unit: 'dage',
    trend: 'down',
    change: '-15%',
    period: 'siden 2023',
    description: 'Hurtigere svar på henvendelser',
    category: 'service'
  },
  {
    id: 'service-tilfredshed',
    label: 'Service',
    area: 'Borgertilfredshed',
    value: '4.2',
    unit: '/5',
    trend: 'up',
    change: '+0.3',
    period: 'siden 2023',
    description: 'Stigende tilfredshed med services',
    category: 'service'
  },
  {
    id: 'miljø-co2-reduktion',
    label: 'Miljø',
    area: 'CO₂-reduktion',
    value: '18',
    unit: '%',
    trend: 'up',
    change: '+3%',
    period: 'siden 2020',
    description: 'Stigende CO₂-reduktion',
    category: 'environment'
  },
  {
    id: 'miljø-grøn-energi',
    label: 'Miljø',
    area: 'Grøn energi',
    value: '67',
    unit: '%',
    trend: 'up',
    change: '+5%',
    period: 'siden 2023',
    description: 'Stigende andel grøn energi',
    category: 'environment'
  },
  {
    id: 'miljø-affald',
    label: 'Miljø',
    area: 'Genbrugsrate',
    value: '54',
    unit: '%',
    trend: 'up',
    change: '+2%',
    period: 'siden 2023',
    description: 'Stigende genbrugsrate',
    category: 'environment'
  },
  {
    id: 'arbejde-ledighed',
    label: 'Arbejde',
    area: 'Ledighedsrate',
    value: '3.2',
    unit: '%',
    trend: 'down',
    change: '-0.4%',
    period: 'siden 2023',
    description: 'Faldende ledighed',
    category: 'employment'
  },
  {
    id: 'arbejde-kontanthjælp',
    label: 'Arbejde',
    area: 'Kontanthjælpsmodtagere',
    value: '1.240',
    unit: 'personer',
    trend: 'down',
    change: '-5.2%',
    period: 'siden 2023',
    description: 'Faldende antal kontanthjælpsmodtagere',
    category: 'employment'
  },
  {
    id: 'arbejde-aktivering',
    label: 'Arbejde',
    area: 'Aktiveringsrate',
    value: '68',
    unit: '%',
    trend: 'up',
    change: '+4%',
    period: 'siden 2023',
    description: 'Stigende aktiveringsrate',
    category: 'employment'
  }
];

// Kombiner alle cards
export const allDashboardCards = [
  ...budgetBalanceCards,
  ...populationCards,
  ...otherCards
];

// Eksporter også de originale for bagudkompatibilitet
export const dashboardMetrics = {
  budgetBalance: budgetBalanceCards[0],
  totalDebt: otherCards[0],
  population: populationCards[2],
  elderlyShare: populationCards[1]
};

export const dashboardTrends = {
  populationDevelopment: {
    title: 'Befolkningsudvikling 2020-2030',
    type: 'line',
    category: 'population',
    description: 'Visuel oversigt over befolkningsudvikling med aldersfordeling over tid',
    importance: 'Kritisk for planlægning af fremtidige servicebehov og budgetter',
    data: [
      { year: '2020', total: 49200, age0_17: 9800, age18_64: 31000, age65plus: 8400 },
      { year: '2021', total: 49100, age0_17: 9700, age18_64: 30800, age65plus: 8600 },
      { year: '2022', total: 49000, age0_17: 9600, age18_64: 30600, age65plus: 8800 },
      { year: '2023', total: 48950, age0_17: 9500, age18_64: 30400, age65plus: 9050 },
      { year: '2024', total: 48920, age0_17: 9400, age18_64: 30200, age65plus: 9320 },
      { year: '2025', total: 48850, age0_17: 9300, age18_64: 30000, age65plus: 9550 },
      { year: '2026', total: 48780, age0_17: 9200, age18_64: 29800, age65plus: 9780 },
      { year: '2027', total: 48700, age0_17: 9100, age18_64: 29600, age65plus: 10000 },
      { year: '2028', total: 48620, age0_17: 9000, age18_64: 29400, age65plus: 10220 },
      { year: '2029', total: 48540, age0_17: 8900, age18_64: 29200, age65plus: 10440 },
      { year: '2030', total: 48460, age0_17: 8800, age18_64: 29000, age65plus: 10660 }
    ],
    insights: {
      current: '48.920 indbyggere i 2024',
      change: '-0.3% siden 2023',
      forecast: 'Forventet fald til 47.800 i 2030',
      takeaway: 'Stigende andel 65+ (fra 17% til 22%) påvirker fremtidige udgifter'
    },
    stats: {
      average: 48800,
      peak: 49200,
      trough: 48460,
      changePercent: -1.5
    },
    config: {
      xKey: 'year',
      lines: [
        { dataKey: 'total', name: 'Total befolkning', stroke: '#0056A7' },
        { dataKey: 'age0_17', name: '0-17 år', stroke: '#10B981' },
        { dataKey: 'age18_64', name: '18-64 år', stroke: '#F59E0B' },
        { dataKey: 'age65plus', name: '65+ år', stroke: '#D40000' }
      ]
    }
  },
  budgetTrend: {
    title: 'Budgetudvikling 2020-2024',
    type: 'area',
    category: 'budget',
    description: 'Sammenligning af budgetteret vs. faktisk udgift over tid',
    importance: 'Viser strukturelle udfordringer i budgetdisciplin',
    data: [
      { year: '2020', budget: 2.65, actual: 2.68, overspend: 0.03 },
      { year: '2021', budget: 2.72, actual: 2.78, overspend: 0.06 },
      { year: '2022', budget: 2.78, actual: 2.85, overspend: 0.07 },
      { year: '2023', budget: 2.84, actual: 2.92, overspend: 0.08 },
      { year: '2024', budget: 2.90, actual: 2.97, overspend: 0.07 }
    ],
    insights: {
      current: '2.97 mia. DKK faktisk udgift i 2024',
      change: '+2.4% vs. budget',
      forecast: 'Forventet stigning til 3.05 mia. i 2025',
      takeaway: 'Konsistent overskridelse på 2-3% kræver strukturelle tiltag'
    },
    stats: {
      averageOverspend: 0.062,
      peakOverspend: 0.08,
      trend: 'stabil'
    },
    alert: 'warning',
    config: {
      xKey: 'year',
      areas: [
        { dataKey: 'budget', name: 'Budget', fill: 'rgba(0, 86, 167, 0.2)', stroke: '#0056A7' },
        { dataKey: 'actual', name: 'Faktisk', fill: 'rgba(212, 0, 0, 0.2)', stroke: '#D40000' }
      ]
    }
  },
  departmentSpending: {
    title: 'Udgiftsfordeling per område 2024',
    type: 'bar',
    category: 'budget',
    description: 'Oversigt over hvor budgettet bruges på tværs af kommunens områder',
    importance: 'Hjælper med at identificere områder med højeste udgiftspres',
    data: [
      { department: 'Social & Sundhed', budget: 1165, actual: 1188, overspend: 23 },
      { department: 'Børn & Unge', budget: 908, actual: 950, overspend: 42 },
      { department: 'Beskæftigelse', budget: 341, actual: 349, overspend: 8 },
      { department: 'Kultur & Miljø', budget: 142, actual: 140, overspend: -2 },
      { department: 'Administration', budget: 284, actual: 282, overspend: -2 }
    ],
    insights: {
      current: 'Social & Sundhed er største udgiftspost (1.188 M DKK)',
      change: 'Samlet overskridelse på 73 M DKK',
      forecast: 'Forventet stigning i Social & Sundhed på 5% i 2025',
      takeaway: 'Børn & Unge har højeste overskridelse i procent (4.6%)'
    },
    stats: {
      totalBudget: 2840,
      totalActual: 2909,
      largestDepartment: 'Social & Sundhed',
      highestOverspend: 'Børn & Unge'
    },
    alert: 'warning',
    config: {
      xKey: 'department',
      bars: [
        { dataKey: 'budget', name: 'Budget', fill: '#0056A7' },
        { dataKey: 'actual', name: 'Faktisk', fill: '#D40000' }
      ]
    }
  },
  debtDevelopment: {
    title: 'Gældsudvikling 2020-2024',
    type: 'line',
    category: 'economy',
    description: 'Kommunens gældsudvikling og gæld per indbygger over tid',
    importance: 'Viser kommunens økonomiske sundhed og fremtidige renteudgifter',
    data: [
      { year: '2020', debt: 1.30, perCapita: 26400 },
      { year: '2021', debt: 1.28, perCapita: 26000 },
      { year: '2022', debt: 1.25, perCapita: 25500 },
      { year: '2023', debt: 1.22, perCapita: 24900 },
      { year: '2024', debt: 1.20, perCapita: 24500 }
    ],
    insights: {
      current: '1.20 mia. DKK total gæld i 2024',
      change: '-7.7% siden 2020',
      forecast: 'Forventet fald til 1.15 mia. i 2025',
      takeaway: 'Positiv trend: Gæld per indbygger faldet med 7.2%'
    },
    stats: {
      average: 1.25,
      peak: 1.30,
      trough: 1.20,
      changePercent: -7.7
    },
    alert: 'success',
    config: {
      xKey: 'year',
      lines: [
        { dataKey: 'debt', name: 'Total gæld (mia. DKK)', stroke: '#0056A7' }
      ]
    }
  },
  revenueVsExpense: {
    title: 'Indtægter vs. Udgifter 2020-2024',
    type: 'area',
    category: 'economy',
    description: 'Sammenligning af kommunens indtægter og udgifter over tid',
    importance: 'Kritisk for at forstå kommunens økonomiske balance',
    data: [
      { year: '2020', revenue: 2.45, expense: 2.68, balance: -0.23 },
      { year: '2021', revenue: 2.52, expense: 2.78, balance: -0.26 },
      { year: '2022', revenue: 2.58, expense: 2.85, balance: -0.27 },
      { year: '2023', revenue: 2.64, expense: 2.92, balance: -0.28 },
      { year: '2024', revenue: 2.70, expense: 2.97, balance: -0.27 }
    ],
    insights: {
      current: 'Underskud på 270 M DKK i 2024',
      change: 'Underskud stabiliseret siden 2023',
      forecast: 'Forventet underskud på 280 M DKK i 2025',
      takeaway: 'Indtægter stiger, men udgifter stiger hurtigere'
    },
    stats: {
      averageBalance: -0.262,
      worstYear: 2023,
      bestYear: 2020
    },
    alert: 'error',
    config: {
      xKey: 'year',
      areas: [
        { dataKey: 'revenue', name: 'Indtægter', fill: 'rgba(16, 185, 129, 0.2)', stroke: '#10B981' },
        { dataKey: 'expense', name: 'Udgifter', fill: 'rgba(212, 0, 0, 0.2)', stroke: '#D40000' }
      ]
    }
  },
  unemploymentTrend: {
    title: 'Ledighedsrate 2020-2024',
    type: 'line',
    category: 'employment',
    description: 'Udvikling i ledighedsrate over tid',
    importance: 'Viser effektiviteten af beskæftigelsesindsatsen',
    data: [
      { year: '2020', rate: 4.2, unemployed: 1290, employed: 29400 },
      { year: '2021', rate: 3.8, unemployed: 1170, employed: 29600 },
      { year: '2022', rate: 3.5, unemployed: 1070, employed: 29500 },
      { year: '2023', rate: 3.3, unemployed: 1000, employed: 29400 },
      { year: '2024', rate: 3.2, unemployed: 970, employed: 29230 }
    ],
    insights: {
      current: '3.2% ledighedsrate i 2024',
      change: '-1.0% siden 2020',
      forecast: 'Forventet stabilisering omkring 3.0% i 2025',
      takeaway: 'Positiv trend: Faldende ledighed over hele perioden'
    },
    stats: {
      average: 3.6,
      peak: 4.2,
      trough: 3.2,
      changePercent: -23.8
    },
    alert: 'success',
    config: {
      xKey: 'year',
      lines: [
        { dataKey: 'rate', name: 'Ledighedsrate (%)', stroke: '#0056A7' }
      ]
    }
  }
};
