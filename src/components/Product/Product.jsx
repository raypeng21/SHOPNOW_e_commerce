import React from 'react';
import "./product.scss"


export default function Product({id, title, img, price,rating}) {
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
      
      <button className='product_button'>Add to Basket</button>
  </div>
  );
}
