import React from 'react';
import {
    featuredItem,
  } from "../../data"
import ProductList from '../ProductList/ProductList';
function Featured() {
  return <div className='featured'>

          {featuredItem.map(item => (
                    <ProductList
                    id = {item.id}
                    title = {item.title} 
                    img = {item.img}
                    price = {item.price}
                    rating = {item.rating}
                    />
          ))}


  </div>;
}

export default Featured;
