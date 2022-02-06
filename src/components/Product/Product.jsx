import React from 'react';
import "./product.scss"
import  {useStateValue}  from '../../StateProvider';
export default function Product({id, title, img, price,rating}) {

  const [ {cart}, dispatch] = useStateValue();

  // console.log("This is  the cart", cart);

  const addToCart = () => {
      //displatch item into data layer
      dispatch({
        type: "ADD_TO_CART",
        item:{
          id:id,
          title:title,
          img:img,
          price:price,
          rating:rating,
        },
      });
    };
  return (
  
  <div className='product'>
      <div className="product_info">
          <p>{title}</p>
          <p className='product_price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">
              {Array(rating)
              .fill()
              .map((_, I) => (
                  <p>⭐</p>
              ))}
          </div>

      </div>
      <img className='product_picture' src={img} alt="" />
      
      <button onClick={addToCart}>Add to Cart</button>
  </div>
  );
}
