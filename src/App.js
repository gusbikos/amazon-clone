import React, { useEffect } from 'react'
import './App.css'
import Header from './Header.js'
import Home from './Home.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout.js'
import Login from './Login.js'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'

const App = () => {
  const [{}, dispatch] = useStateValue()

  useEffect (() => {

    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>> ', authUser)
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div classname="app">
        <Switch >

          <Route path="/login">
            <Login />
          </Route >

          <Route path="/checkout">
            <Header />  
            <Checkout />
          </Route >

          <Route path="/">
            <Header />
            <Home />
          </Route >
          
        </Switch >
      </div>
    </Router>
  )
}

export default App;
