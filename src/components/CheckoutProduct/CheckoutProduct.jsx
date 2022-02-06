import React from 'react';
import "./checkoutproduct.scss"

import  {useStateValue}  from '../../StateProvider';

function CheckoutProduct({id, img, title, price, rating}) {

    const [{cart}, dispatch] = useStateValue();

    
    const removeFromCart = (cart) => {
    dispatch({
        type: "REMOVE_FROM_CART",
        id:id,
    })
    }
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct_img' src={img} alt="" />



        <div className="checkoutProduct_info">
            <p className='checkoutProduct_title'>{title}</p>

            <p className='checkoutProduct_price'>
                <small>$</small> 
                <strong>{price}</strong>
            </p>


            <p className='checkoutProduct_rating'>
                {Array(rating)
                .fill()
                .map((_, I) => (
                    <p>⭐</p>
                ))}

            </p>

            <button onClick={removeFromCart}>Remove From Cart</button>

        </div>
    </div>
    );
}

export default CheckoutProduct;
