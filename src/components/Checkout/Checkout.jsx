import React from 'react';
import Subtotal from '../Subtotal/Subtotal';
import "./checkout.scss";
import  {useStateValue}  from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';


function Checkout() {

  const [{cart,user}, dispatch] = useStateValue();



  return (
  
  
  <div className='checkout'>

    <div className="checkout_left">
        <img 
        className='checkout_ad' 
        src="./assets/checkout_ad.png" 
        alt="" />

        <div className='checkout_list'>

          <h3>Hello, {user?.email}</h3>
          <h2 className='checkout_title'>Your Shopping Cart {cart.length ? ""  :  "is Empty"}</h2>


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


    <div className="checkout_right">
      <Subtotal />
    </div>



  </div>);
}

export default Checkout;
