  import Globalstyles from './styles/globalstyles'
import { PageRoutes } from './Router'

import AppProvider from './AppContext/Provider'

function App() {
  return (
    <AppProvider>
      <Globalstyles/>
      <PageRoutes/>
    </AppProvider>
  )
}

export default App
