import React from 'react';
import "./subtotal.scss";
import CurrencyFormat from 'react-currency-format';
import  {useStateValue}  from '../../StateProvider';
import {getCartTotal} from '../../reducer';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Subtotal() {


  const history = useHistory();
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

      <button onClick={e => history.push('/payment')}>Proceed to Checlout</button>
  </div>;
}

export default Subtotal;
