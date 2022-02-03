import React from 'react';
import "./subtotal.scss";
import CurrencyFormat from 'react-currency-format';
import  {useStateValue}  from '../../StateProvider';
import {getCartTotal} from '../../reducer';

function Subtotal() {
  const [{cart}] = useStateValue();



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

      <button>Proceed to Checlout</button>
  </div>;
}

export default Subtotal;
