import React, { useState,useEffect } from 'react';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../../StateProvider';
import "./payment.scss"
import {Link,useHistory} from "react-router-dom";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getCartTotal} from '../../reducer';
import axios from "../../axios";
import {db} from "../../firebase"

function Payment() {
    const [{cart, user}, dispatch] = useStateValue();
    const history = useHistory();

    const stripe  = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() =>{
        //generate special stripe secret , aloow charging
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //stripe expects the total in currencies subunits (*100)
                url: `/payment/create?total=${getCartTotal(cart) *100}`
            });

            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [cart])


    console.log('The Secret is ------>', clientSecret)


    const handleSubmit = async(e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
            card: elements.getElement(CardElement)
        }}).then(({paymentIntent}) => {
            //push order to the database`
            db
                .collection('user')
                .doc(user?.id)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    cart: cart,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

                         
            //paymentIntent is payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: "EMPTY_CART"
            })

            history.replace("/orders")
        })
    }

    const handleChange = e => {
    //Listening the change in CardElement & display any error
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");

    }

  return (
  

  <div className='payment'>
      
      <h1>Checkout(
          <Link to = "/checkout">
          {cart?.length} items
          </Link>
          
          
          )</h1>


      <div className="paymentContainer ">

        <div className="paymentSection">
            <div className="paymemntTitle">
                <h3>Delivery Address</h3>
            </div>

            <div className="paymentAddress">
                <p>{user?.email}</p>
                <p>838 Stensrud Rd</p>
                <p>Saskatoon, SK, CA</p>
            </div>
        </div>

        
        <div className="paymentSection">
            <div className="paymemntTitle">
                <h3>Review items and delivery</h3>

            </div>

            <div className="paymentItems">
                {cart.map(item => (
                    <CheckoutProduct 
                    id = {item.id}
                    title = {item.title} 
                    img = {item.img}
                    price = {item.price}
                    rating = {item.rating} 
                        />
                ))}
            </div>

        </div>

        
        <div className="paymentSection">
            <div className="paymemntTitle">
                <h3>Payment Method</h3>

            </div>

            <div className="paymentDetails">
                <form onSubmit={handleSubmit}>
                    <CardElement onChange = {handleChange}/>

                    <div className="paymentPriceContainer">
                        <CurrencyFormat
                                renderText = {(value) => (
                                <h3>Order Total: {value}</h3>
                            )}
                            decimalScale = {2}
                            value = {getCartTotal(cart)}
                            displayType = {"text"}
                            thousandSeparator = {true}
                            prefix = {"$"}
                        />
                        <button disabled = {processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing</p>: "Buy Now"}</span>

                        </button>
                    </div>
                    {error && <div>{error}</div>}
                </form>


            </div>
        </div>

      </div>

  </div>
  
  
  );
}

export default Payment;
