import { ResponsiveFunnel } from '@nivo/funnel'

interface dataDTO{
  id: string
  value: number
  label: string
}

const data: dataDTO[] = [
  {
    "id": "Leads",
    "value": 700,
    "label": "Leads"
  },
  {
    "id": "Oportunidades",
    "value": 350,
    "label": "Oportunidades",
  },
  {
    "id": "Vendas",
    "value": 120,
    "label": "Vendas"
  }
];

const Funnel: React.FC = ()=>{
  return (
    <ResponsiveFunnel
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        valueFormat=">-.0s"
        colors={['#9386C5', '#8572D1', '#7453F8']}
        borderWidth={20}
        theme={
          {
            grid: {
              line:{
                stroke: "#393956"
              }
            }
          }
        }
        labelColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    3
                ]
            ]
        }}
        beforeSeparatorLength={20}
        beforeSeparatorOffset={10}
        afterSeparatorLength={20}
        afterSeparatorOffset={10}
        currentPartSizeExtension={10}
        currentBorderWidth={10}
        motionConfig="wobbly"
    />
  )    
  }

  export default Funnel;