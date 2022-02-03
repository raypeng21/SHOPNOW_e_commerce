import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (

    
      <div className="app">

      <Router>

              <Switch>

              <Route path='/checkout'>
                    <Header />
                    <Checkout />
                </Route>


                <Route path='/'>
                    <Header />
                    <Home />
                </Route>



              </Switch>

      </Router>



      </div>
  );
}

export default App;
