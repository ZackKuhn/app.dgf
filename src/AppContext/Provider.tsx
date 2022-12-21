import React, {useState} from 'react'
import AppContext from './Context'

import {GLOBAL_STATES} from './Context'

type ProviderProps = {
  children: any;
}

const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, setState] = useState(GLOBAL_STATES.state)
  const [animState, setAnimState] = useState(GLOBAL_STATES.animState)
  const [goToAnimState, setGoToAnim] = useState(GLOBAL_STATES.goToAnimState)
  const [userTokenData, setUserTokenData] = useState(GLOBAL_STATES.userTokenData)

  return (
    <AppContext.Provider value=
    {{
      userTokenData, setUserTokenData,
      state, setState, 
      animState, setAnimState, 
      goToAnimState, setGoToAnim
    }}>
      {children}
    </AppContext.Provider>
  )
} 

export default AppProvider