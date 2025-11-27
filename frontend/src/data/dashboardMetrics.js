// K.A.I.A Dashboard - Key Metrics Data

export const dashboardMetrics = {
  budgetBalance: {
    label: 'Budgetbalance',
    value: '-73M',
    unit: 'DKK',
    trend: 'down',
    change: '-12%',
    period: 'vs. budget 2024',
    icon: '💰',
    color: 'red',
    description: 'Overskridelse på de mest pressede områder'
  },
  totalDebt: {
    label: 'Total gæld',
    value: '1,2',
    unit: 'mia. DKK',
    trend: 'down',
    change: '-8%',
    period: 'siden 2021',
    icon: '📊',
    color: 'green',
    description: 'Gæld per indbygger: DKK 24.500'
  },
  population: {
    label: 'Befolkning',
    value: '48.920',
    unit: 'indbyggere',
    trend: 'down',
    change: '-0,3%',
    period: 'årlig vækst',
    icon: '👥',
    color: 'orange',
    description: 'Faldende befolkningstal'
  },
  elderlyShare: {
    label: 'Andel 65+',
    value: '24,1%',
    unit: '',
    trend: 'up',
    change: '+2,1%',
    period: 'siden 2020',
    icon: '👴',
    color: 'blue',
    description: 'Stigende aldring af befolkningen'
  }
};

export const dashboardTrends = {
  populationDevelopment: {
    title: 'Befolkningsudvikling 2020-2030',
    type: 'line',
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
    config: {
      xKey: 'year',
      lines: [
        { dataKey: 'total', name: 'Total befolkning', stroke: '#3B82F6' },
        { dataKey: 'age0_17', name: '0-17 år', stroke: '#10B981' },
        { dataKey: 'age18_64', name: '18-64 år', stroke: '#F59E0B' },
        { dataKey: 'age65plus', name: '65+ år', stroke: '#EF4444' }
      ]
    }
  },
  budgetTrend: {
    title: 'Budgetudvikling 2020-2024',
    type: 'area',
    data: [
      { year: '2020', budget: 2.65, actual: 2.68, overspend: 0.03 },
      { year: '2021', budget: 2.72, actual: 2.78, overspend: 0.06 },
      { year: '2022', budget: 2.78, actual: 2.85, overspend: 0.07 },
      { year: '2023', budget: 2.84, actual: 2.92, overspend: 0.08 },
      { year: '2024', budget: 2.90, actual: 2.97, overspend: 0.07 }
    ],
    config: {
      xKey: 'year',
      areas: [
        { dataKey: 'budget', name: 'Budget', fill: '#3B82F6', stroke: '#3B82F6' },
        { dataKey: 'actual', name: 'Faktisk', fill: '#EF4444', stroke: '#EF4444' }
      ]
    }
  },
  departmentSpending: {
    title: 'Udgiftsfordeling 2024',
    type: 'bar',
    data: [
      { department: 'Social & Sundhed', budget: 1165, actual: 1188, overspend: 23 },
      { department: 'Børn & Unge', budget: 908, actual: 950, overspend: 42 },
      { department: 'Beskæftigelse', budget: 341, actual: 349, overspend: 8 },
      { department: 'Kultur & Miljø', budget: 142, actual: 140, overspend: -2 },
      { department: 'Administration', budget: 284, actual: 282, overspend: -2 }
    ],
    config: {
      xKey: 'department',
      bars: [
        { dataKey: 'budget', name: 'Budget', fill: '#3B82F6' },
        { dataKey: 'actual', name: 'Faktisk', fill: '#EF4444' }
      ]
    }
  },
  debtDevelopment: {
    title: 'Gældsudvikling 2020-2024',
    type: 'line',
    data: [
      { year: '2020', debt: 1.30, perCapita: 26400 },
      { year: '2021', debt: 1.28, perCapita: 26000 },
      { year: '2022', debt: 1.25, perCapita: 25500 },
      { year: '2023', debt: 1.22, perCapita: 24900 },
      { year: '2024', debt: 1.20, perCapita: 24500 }
    ],
    config: {
      xKey: 'year',
      lines: [
        { dataKey: 'debt', name: 'Total gæld (mia. DKK)', stroke: '#8B5CF6' }
      ]
    }
  }
};

