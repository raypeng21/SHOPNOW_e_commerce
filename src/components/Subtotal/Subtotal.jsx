import React ,{useState}from 'react';
import "./subtotal.scss";
import CurrencyFormat from 'react-currency-format';
import  {useStateValue}  from '../../StateProvider';
import {getCartTotal} from '../../reducer';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Subtotal() {

  const history = useHistory();
  const [{cart}] = useStateValue();
  
  const checkEmptyCart = () =>{

    if (cart.length <= 0){
        alert("You don't have any item in your cart!")

    }else{
        history.push('/payment')
    }
  }


  return <div className='subtotal' >
      <CurrencyFormat
          renderText = {(value) => (
              <>
                <p>
                    Subtotal ({cart?.length} items) : <strong> {value}</strong>
                </p>
                <small className='subtotal_gift'>
                    <input type="checkbox" /> This order contain a gift
                </small>
              </>
          )}
          decimalScale = {2}
          value = {getCartTotal(cart)}
          displayType = {"text"}
          thousandSeparator = {true}
          prefix = {"$"}
      />

      <button onClick={checkEmptyCart}>Proceed to Checlout</button>
  </div>;
}

export default Subtotal;
