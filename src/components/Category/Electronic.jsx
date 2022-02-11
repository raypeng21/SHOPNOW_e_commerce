import React from 'react';
import {
    electronic,
  } from "../../data"
import ProductList from '../ProductList/ProductList';

function Electronic() {
  return <div className='Electronic'>

          {electronic.map(item => (
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

export default Electronic;
