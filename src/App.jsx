import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (

    
      <div className="app">

      <Router>

              <Switch>

              <Route path='/checkout'>
                    <Header />
                    <h1>I am Checkout Page</h1>
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
