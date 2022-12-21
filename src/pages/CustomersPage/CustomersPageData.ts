interface labelDataProps {
  id: number;
  label: string;
  info: string;
}

interface TableLabelTypes {
  id: number;
  label: string;
}

export const labelData: labelDataProps[] = [
  {
  id: 1,
  label: 'Registrados',
  info: '48'
  },
  {
  id: 2,
  label: 'Ativos',
  info: '43'
  },
  {
  id: 3,
  label: 'Churn',
  info: '5'
}
]

export const tableLabel: TableLabelTypes[] = [
  {
    id: 1,
    label: 'Razão social'
  },
  {
    id: 2,
    label: 'Holder'
  },
  {
    id: 4,
    label: 'Modelo de negócios'
  },
  {
    id: 5,
    label: 'Setor de atuação'
  },
  {
    id: 6,
    label: 'Ver mais'
  }
] 