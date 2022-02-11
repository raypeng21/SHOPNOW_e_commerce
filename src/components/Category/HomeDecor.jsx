import React from 'react';
import {
    homeDecor,
  } from "../../data"
import ProductList from '../ProductList/ProductList';

function HomeDecor() {
  return <div className='Electronic'>

          {homeDecor.map(item => (
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

export default HomeDecor;
