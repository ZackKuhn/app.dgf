interface CtmMarkTypes {
  id: number
  data_label: string
  data_value: string
  indicator: {
    value: number
    effect: 'positive' | 'default' | 'negative'
  }
}

export const CustomerMarketingData: CtmMarkTypes[] = [
    {
      id: 1,  
      data_label: 'Investimento',
      data_value: 'R$ 2.500',
      indicator:{
        value: 12,
        effect: 'negative',
        }
    },
    {
      id: 2,  
      data_label: 'Faturamento',
      data_value: 'R$ 11.437',
      indicator:{
        value: 25,
        effect: 'positive',
        }
    },
    {
      id: 3,  
      data_label: 'Vendas',
      data_value: '147',
      indicator:{
        value: 0,
        effect: 'default'
        }
    },
]

