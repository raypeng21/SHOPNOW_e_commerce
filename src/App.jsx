import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import SignIn from './components/SignIn/SignIn';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders/Orders';
import Register from './components/Register/Register';
import Featured from './components/Category/Featured';
import SmartHome from './components/Category/SmartHome';
import HomeDecor from './components/Category/HomeDecor';
import Electronic from './components/Category/Electronic';


const promise = loadStripe('pk_test_51KQDfxCnboDPPE0WQvtAVudaHkNKgFm01H5xOc1hEEVMBKoCcrUvYnFxWn2HqZYY59JP3Hp6qa47kG8gADN4aDEI00I9QfaJGP');
// Stripe Public Key


function App() {
 
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // console.log("The user is ",authUser);

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

                
              <Route path='/SmartHome'>
                    <Header />
                    <SmartHome />
                </Route>

                <Route path='/HomeDecor'>
                    <Header />
                    <HomeDecor />
                </Route>

                <Route path='/Electronic'>
                    <Header />
                    <Electronic />
                </Route>


              <Route path='/featured'>
                    <Header />
                    <Featured />
                </Route>


              <Route path='/orders'>
                    <Header />
                    <Orders />
                </Route>



              <Route path='/register'>
                    <Header />
                    <Register />
              </Route>

              <Route path='/signin'>
                    <Header />
                    <SignIn />
                </Route>

              <Route path='/checkout'>
                    <Header />
                    <Checkout />
                </Route>


                <Route path='/payment'>
                    <Header />
                    <Elements stripe = {promise}>
                      <Payment />
                    </Elements>
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
