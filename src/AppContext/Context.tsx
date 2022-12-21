import { createContext, SetStateAction } from 'react'    

type UserType = {
  id: string
  name: string      
  nickname: string 
  avatar: string         
  initdate: string         
  email: string             
  contact: string      
  accessProfile: string
  spec: string         
  flag: number          
  rating: number      
  core: number           
  culture: number        
  headskill: number   
} 

type modalType = {
  openModal: boolean;
}

type AnimType = {
  startAnim: boolean;
}

type ConfirmationType = {
  goToAnim: boolean;
}

type PropsUserContext = {
  userTokenData: UserType
  setUserTokenData: React.Dispatch<React.SetStateAction<UserType>>
  state: modalType
  setState: React.Dispatch<React.SetStateAction<modalType>>
  animState: AnimType
  setAnimState: React.Dispatch<React.SetStateAction<AnimType>>
  goToAnimState: ConfirmationType
  setGoToAnim: React.Dispatch<React.SetStateAction<ConfirmationType>>
}

export const GLOBAL_STATES = {
  userTokenData:{
    id: '3f890h7034f85j0',
    name: '',      
    nickname: '', 
    avatar: '',         
    initdate: '',         
    email: '',             
    contact: '',      
    accessProfile: '',
    spec: '',         
    flag: 0,          
    rating: 0,      
    core: 0,           
    culture: 0,        
    headskill: 0 
  },
  state: {
    openModal: false
  },
  animState: {
    startAnim: false
  },
  goToAnimState: {  
    goToAnim: false
  },
  setState: () => {},
  setAnimState: () => {},
  setGoToAnim: () => {},
  setUserTokenData: () => {},
}

const AppContext = createContext<PropsUserContext>(GLOBAL_STATES)

export default AppContext