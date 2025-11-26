// K.A.I.A Perplexity Demo - Mock Chart Data (Recharts compatible)

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
  },

  'demographic-distribution': {
    type: 'pie',
    title: 'Befolkningsfordeling 2024',
    data: [
      { name: '0-17 år', value: 17.1, count: 8210 },
      { name: '18-64 år', value: 55.8, count: 26780 },
      { name: '65+ år', value: 27.1, count: 13010 }
    ],
    config: {
      dataKey: 'value',
      nameKey: 'name',
      colors: ['#8dd1e1', '#82ca9d', '#ffc658']
    }
  },

  'workforce-decline': {
    type: 'line',
    title: 'Udvikling i erhvervsaktive (18-64 år)',
    data: [
      { year: '2020', count: 27850, percentage: 57.7 },
      { year: '2022', count: 27420, percentage: 56.8 },
      { year: '2024', count: 26780, percentage: 55.8 },
      { year: '2026', count: 26240, percentage: 54.9 },
      { year: '2028', count: 25680, percentage: 53.8 },
      { year: '2030', count: 25050, percentage: 52.8 }
    ],
    config: {
      xKey: 'year',
      lines: [
        { dataKey: 'count', stroke: '#8884d8', name: 'Antal', yAxisId: 'left' },
        { dataKey: 'percentage', stroke: '#ff7c7c', name: 'Andel %', yAxisId: 'right' }
      ]
    }
  },

  'departments-overspending': {
    type: 'bar',
    title: 'Budgetoverskridelser efter område 2024 (DKK M)',
    data: [
      { department: 'Børn & Unge', overspending: 42, budget: 908, percentage: 4.6 },
      { department: 'Social & Sundhed', overspending: 23, budget: 1165, percentage: 2.0 },
      { department: 'Beskæftigelse', overspending: 8, budget: 341, percentage: 2.3 },
      { department: 'Kultur & Miljø', overspending: 0, budget: 142, percentage: 0 },
      { department: 'Administration', overspending: 0, budget: 284, percentage: 0 }
    ],
    config: {
      xKey: 'department',
      bars: [
        { dataKey: 'overspending', fill: '#ff7c7c', name: 'Overskridelse' }
      ]
    }
  },

  'overspending-trend': {
    type: 'line',
    title: 'Udvikling i budgetoverskridelser (DKK M)',
    data: [
      { quarter: 'Q1 2023', 'Børn & Unge': 8, 'Social & Sundhed': 5, 'Beskæftigelse': 2 },
      { quarter: 'Q2 2023', 'Børn & Unge': 15, 'Social & Sundhed': 9, 'Beskæftigelse': 3 },
      { quarter: 'Q3 2023', 'Børn & Unge': 24, 'Social & Sundhed': 14, 'Beskæftigelse': 5 },
      { quarter: 'Q4 2023', 'Børn & Unge': 35, 'Social & Sundhed': 19, 'Beskæftigelse': 7 },
      { quarter: 'Q1 2024', 'Børn & Unge': 12, 'Social & Sundhed': 6, 'Beskæftigelse': 2 },
      { quarter: 'Q2 2024', 'Børn & Unge': 22, 'Social & Sundhed': 11, 'Beskæftigelse': 4 },
      { quarter: 'Q3 2024', 'Børn & Unge': 42, 'Social & Sundhed': 23, 'Beskæftigelse': 8 }
    ],
    config: {
      xKey: 'quarter',
      lines: [
        { dataKey: 'Børn & Unge', stroke: '#ff7c7c', name: 'Børn & Unge' },
        { dataKey: 'Social & Sundhed', stroke: '#ffc658', name: 'Social & Sundhed' },
        { dataKey: 'Beskæftigelse', stroke: '#8dd1e1', name: 'Beskæftigelse' }
      ]
    }
  },

  'debt-development': {
    type: 'bar',
    title: 'Gældsudvikling 2019-2024 (DKK M)',
    data: [
      { year: '2019', debt: 1420, perCapita: 28800 },
      { year: '2020', debt: 1380, perCapita: 28200 },
      { year: '2021', debt: 1310, perCapita: 27100 },
      { year: '2022', debt: 1265, perCapita: 26300 },
      { year: '2023', debt: 1200, perCapita: 24500 },
      { year: '2024', debt: 1185, perCapita: 24100 }
    ],
    config: {
      xKey: 'year',
      bars: [
        { dataKey: 'debt', fill: '#8884d8', name: 'Total gæld (M)' }
      ]
    }
  },

  'loan-capacity': {
    type: 'bar',
    title: 'Låneramme - Udnyttelse og kapacitet (DKK M)',
    data: [
      { category: 'Godkendt ramme', amount: 450 },
      { category: 'Udnyttet', amount: 280 },
      { category: 'Ledig kapacitet', amount: 170 }
    ],
    config: {
      xKey: 'category',
      bars: [
        { dataKey: 'amount', fill: '#82ca9d', name: 'Beløb' }
      ]
    }
  },

  'procurement-savings': {
    type: 'bar',
    title: 'Besparelsespotentiale ved optimeret indkøb (DKK M)',
    data: [
      { category: 'IT & Software', potential: 8, current: 145 },
      { category: 'Energi', potential: 4, current: 82 },
      { category: 'Fødevarer', potential: 3, current: 95 },
      { category: 'Rengøring', potential: 2.5, current: 48 },
      { category: 'Procesbesparelse', potential: 6, current: 0 }
    ],
    config: {
      xKey: 'category',
      bars: [
        { dataKey: 'potential', fill: '#82ca9d', name: 'Besparelse' }
      ]
    }
  },

  'supplier-consolidation': {
    type: 'pie',
    title: 'Leverandørkonsolidering - Før og efter',
    data: [
      { name: 'Kontorartikler', before: 127, after: 6, savings: 4.2 },
      { name: 'IT-udstyr', before: 43, after: 3, savings: 2.8 },
      { name: 'Rengøring', before: 28, after: 2, savings: 1.5 },
      { name: 'Byggematerialer', before: 67, after: 8, savings: 3.1 }
    ],
    config: {
      dataKey: 'savings',
      nameKey: 'name',
      colors: ['#8884d8', '#82ca9d', '#ffc658', '#ff7c7c']
    }
  },

  'admin-efficiency': {
    type: 'bar',
    title: 'Effektiviseringspotentiale - Administration (DKK M)',
    data: [
      { area: 'RPA/Automatisering', savings: 5.2, timeline: '6 mdr' },
      { area: 'Selvbetjening', savings: 3.5, timeline: '12 mdr' },
      { area: 'Servicecentre', savings: 10.0, timeline: '18 mdr' },
      { area: 'Ledelsesstruktur', savings: 6.0, timeline: '24 mdr' },
      { area: 'Systemharmonisering', savings: 4.0, timeline: '24 mdr' }
    ],
    config: {
      xKey: 'area',
      bars: [
        { dataKey: 'savings', fill: '#82ca9d', name: 'Besparelse' }
      ]
    }
  },

  'digitalization-roadmap': {
    type: 'area',
    title: 'Digitaliseringsplan - Akkumuleret effekt (DKK M)',
    data: [
      { period: 'Start', accumulated: 0, investment: 0 },
      { period: '6 mdr', accumulated: 3.2, investment: 8 },
      { period: '12 mdr', accumulated: 8.7, investment: 15 },
      { period: '18 mdr', accumulated: 18.7, investment: 22 },
      { period: '24 mdr', accumulated: 28.7, investment: 28 },
      { period: '36 mdr', accumulated: 35.0, investment: 28 }
    ],
    config: {
      xKey: 'period',
      areas: [
        { dataKey: 'accumulated', fill: '#82ca9d', name: 'Besparelse' },
        { dataKey: 'investment', fill: '#ff7c7c', name: 'Investering' }
      ]
    }
  },

  'block-grant-distribution': {
    type: 'pie',
    title: 'Bloktilskud fordeling 2024 (DKK 2.84 mia.)',
    data: [
      { name: 'Børn & Unge', value: 32, amount: 908 },
      { name: 'Social & Sundhed', value: 41, amount: 1165 },
      { name: 'Beskæftigelse', value: 12, amount: 341 },
      { name: 'Kultur & Miljø', value: 5, amount: 142 },
      { name: 'Administration', value: 10, amount: 284 }
    ],
    config: {
      dataKey: 'value',
      nameKey: 'name',
      colors: ['#8dd1e1', '#82ca9d', '#ffc658', '#d084d0', '#8884d8']
    }
  },

  'grant-vs-expenses': {
    type: 'line',
    title: 'Bloktilskud vs. Udgiftsvækst (%)',
    data: [
      { year: '2020', grant: 2.8, expenses: 3.2 },
      { year: '2021', grant: 2.4, expenses: 3.8 },
      { year: '2022', grant: 1.9, expenses: 4.1 },
      { year: '2023', grant: 2.2, expenses: 3.9 },
      { year: '2024', grant: 2.1, expenses: 4.3 }
    ],
    config: {
      xKey: 'year',
      lines: [
        { dataKey: 'grant', stroke: '#82ca9d', name: 'Bloktilskud' },
        { dataKey: 'expenses', stroke: '#ff7c7c', name: 'Udgifter' }
      ]
    }
  },

  'economic-forecast': {
    type: 'line',
    title: 'Økonomisk prognose 2024-2029 - Scenarier (DKK M)',
    data: [
      { year: '2024', optimistic: 0, base: 0, pessimistic: 0 },
      { year: '2025', optimistic: -8, base: -15, pessimistic: -35 },
      { year: '2026', optimistic: -12, base: -28, pessimistic: -72 },
      { year: '2027', optimistic: -5, base: -35, pessimistic: -118 },
      { year: '2028', optimistic: 2, base: -38, pessimistic: -158 },
      { year: '2029', optimistic: 8, base: -42, pessimistic: -180 }
    ],
    config: {
      xKey: 'year',
      lines: [
        { dataKey: 'optimistic', stroke: '#82ca9d', name: 'Optimistisk' },
        { dataKey: 'base', stroke: '#8884d8', name: 'Basis' },
        { dataKey: 'pessimistic', stroke: '#ff7c7c', name: 'Pessimistisk' }
      ]
    }
  },

  'scenario-comparison': {
    type: 'bar',
    title: 'Scenarie sammenligning 2029 (DKK M)',
    data: [
      { scenario: 'Optimistisk', balance: 8, assumptions: 'Effektivisering + Vækst' },
      { scenario: 'Basis', balance: -42, assumptions: 'Moderat udvikling' },
      { scenario: 'Pessimistisk', balance: -180, assumptions: 'Fortsatte overskridelser' }
    ],
    config: {
      xKey: 'scenario',
      bars: [
        { dataKey: 'balance', fill: '#8884d8', name: 'Balance' }
      ]
    }
  },

  'special-area-growth': {
    type: 'area',
    title: 'Udgiftsudvikling specialområdet 2019-2024 (DKK M)',
    data: [
      { year: '2019', children: 148, adults: 70, total: 218 },
      { year: '2020', children: 162, adults: 78, total: 240 },
      { year: '2021', children: 184, adults: 84, total: 268 },
      { year: '2022', children: 208, adults: 88, total: 296 },
      { year: '2023', children: 235, adults: 95, total: 330 },
      { year: '2024', children: 262, adults: 102, total: 364 }
    ],
    config: {
      xKey: 'year',
      areas: [
        { dataKey: 'children', fill: '#8dd1e1', name: 'Børn' },
        { dataKey: 'adults', fill: '#ffc658', name: 'Voksne' }
      ]
    }
  },

  'placement-costs': {
    type: 'bar',
    title: 'Gennemsnitlige anbringelsesomkostninger (DKK 1000/år)',
    data: [
      { type: 'Alm. plejefamilie', cost: 335, count: 42 },
      { type: 'Forstærket plejefamilie', cost: 600, count: 28 },
      { type: 'Spec. plejefamilie', cost: 1025, count: 12 },
      { type: 'Kommunalt opholdssted', cost: 750, count: 18 },
      { type: 'Privat døgninstitution', cost: 1475, count: 22 },
      { type: 'Sikret institution', cost: 2800, count: 4 }
    ],
    config: {
      xKey: 'type',
      bars: [
        { dataKey: 'cost', fill: '#ff7c7c', name: 'Omkostning' }
      ]
    }
  },

  'investment-timeline': {
    type: 'bar',
    title: 'Investeringsplan 2024-2027 (DKK M)',
    data: [
      { year: '2024', schools: 35, elderly: 28, infrastructure: 22, it: 8 },
      { year: '2025', schools: 82, elderly: 65, infrastructure: 38, it: 15 },
      { year: '2026', schools: 58, elderly: 42, infrastructure: 28, it: 10 },
      { year: '2027', schools: 10, elderly: 7, infrastructure: 7, it: 5 }
    ],
    config: {
      xKey: 'year',
      bars: [
        { dataKey: 'schools', fill: '#8dd1e1', name: 'Skoler', stackId: 'a' },
        { dataKey: 'elderly', fill: '#82ca9d', name: 'Ældrepleje', stackId: 'a' },
        { dataKey: 'infrastructure', fill: '#ffc658', name: 'Infrastruktur', stackId: 'a' },
        { dataKey: 'it', fill: '#8884d8', name: 'IT', stackId: 'a' }
      ]
    }
  }
};

export const getChartById = (chartId) => {
  return mockCharts[chartId] || null;
};

export const getAllCharts = () => {
  return Object.values(mockCharts);
};

export const getChartsByType = (type) => {
  return Object.values(mockCharts).filter(chart => chart.type === type);
};
