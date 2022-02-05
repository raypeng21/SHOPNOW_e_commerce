import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import SignIn from './components/SignIn/SignIn';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
 
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The user is ",authUser);

      if(authUser){ //user status is logged in
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }else{  //user logged out
        dispatch({
          type:'SET_USER',
          user: null
        })      }
    })

  }, [])  //only run once when the app component loads
  return (

    
      <div className="app">

      <Router>

              <Switch>

              <Route path='/signin'>
                    <Header />
                    <SignIn />
                </Route>

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
