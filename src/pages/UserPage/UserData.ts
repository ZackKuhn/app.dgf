interface skillsDTO {
  label: string
  currentvalue: number
    maxvalue: number
  active: boolean
}

export const skills: skillsDTO[] = [
  {
    label:"Cultura",
    currentvalue: 38,
    maxvalue: 45,
    active: false
  },
  {
    label:"Entregas",
    currentvalue: 23,
    maxvalue: 35,
    active: false
  },
  {
    label:"HeadSkill",
    currentvalue: 11,
    maxvalue: 25,
    active: false
  },
  {
    label:"Total",
    currentvalue: 37,
    maxvalue: 100,
    active: true
  }
];

