import React from 'react';
import "./productlist.scss"
import  {useStateValue}  from '../../StateProvider';
export default function ProductList({id, title, img, price,rating}) {

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
  
  <div className='productList'>
      <img className='product_picture' src={img} alt="" />

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
      
      <button onClick={addToCart}>Add to Cart</button>
  </div>
  );
}
