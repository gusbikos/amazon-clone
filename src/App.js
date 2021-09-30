import './App.css'
import Header from './Header.js'
import Home from './Home.js'
import Checkout from './Checkout.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div classname="app">
        <Header />  
        <Switch >
          <Route path="/checkout">
            <Checkout />
          </Route >
          <Route path="/">
            {/* <Header /> */}
            <Home />
          </Route >
        </Switch >
      </div>
    </Router>
  )
}

export default App;
