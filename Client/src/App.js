import React, { useEffect, createContext, useReducer, useContext } from 'react'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import NavBar from './components/NavBar.js'
import Gallery from './components/Gallery.js'
import Footer from './components/Footer.js'
import Log from './components/Login.js'
import Tabs from './components/Tabs.js'
import TheForm from './components/placeOrder.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Manage from './components/ManageAccount.js'
import { reducer, initialState } from './reducers/userReducer'
import Admin from './components/admin.js'
import './App.css'

export const UserContext = createContext()
const Routing = () => {
  const history = useHistory()
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      dispatch({ type: "USER", payload: user })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Switch>
      <Route exact path="/">
        <Tabs></Tabs>
      </Route>
      <Route path="/log">
        <Log></Log>
      </Route>
      <Route path="/gallery">
        <Gallery></Gallery>
      </Route>
      <Route path="/form">
        <TheForm></TheForm>
      </Route>
      <Route path="/tabs">
        <Tabs></Tabs>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/contact">
        <Contact></Contact>
      </Route>
      <Route path="/manage">
        <Manage></Manage>
      </Route>
      <Route path="/admin">
        <Admin></Admin>
      </Route>
    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
    <BrowserRouter>
      <NavBar />
      <Routing />
      <Footer />
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;