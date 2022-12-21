export interface CustomerDataTypes 
{
  id: string;
  name: string
  order: string
  step: string
  fee: number
  initial_date: string
  str_name: string
  str_email: string
  str_contact: number
  mkt_email: string
  sales_phone: string
  folder_link: string
  bnsplan_link: string
  payment_day: string
  ticket: number
  margin: number
  media_budget: number
  media_invest: number
  tools_invest: number
  mont_income: number
  sales: number
  bns_model: string
  bns_tag: string
  deal: string
  flag: number
  rating: number
  core: number
  status: string
  holder: {
    name: string
  }
}[]
