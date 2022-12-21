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
    label: 'Task'
  },
  {
    id: 2,
    label: 'Cliente'
  },
  {
    id: 3,
    label: 'DeadLine'
  }
] 