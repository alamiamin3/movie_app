
import Login from "./components/Login/Login"
import AppContextProvider from "./components/Contexts/AppContext"
function App() {


  return (
    <AppContextProvider>
      <Login/>
    </AppContextProvider>
  )
}

export default App
