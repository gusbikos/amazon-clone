import React, { useEffect } from 'react'
import './App.css'
import Header from './Header.js'
import Home from './Home.js'
import Checkout from './Checkout.js'
import Login from './Login.js'
import Payment from './Payment.js'
import Orders from './Orders.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51JiKKIH7b3O07IfKuHDB9boEgpNgBKwtjKml9doHIH6DPZJshckTaDYXjPAWXwnddj7Ko3Lw43dmPzxrUIhCAo8M00boUjh5Zy')

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

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route >

          <Route path="/checkout">
            <Header />  
            <Checkout />
          </Route >

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements >
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
