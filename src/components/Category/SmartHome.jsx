import React from 'react';
import {
    smartHome,
  } from "../../data"
import ProductList from '../ProductList/ProductList';

function SmartHome() {
  return <div className='Electronic'>

          {smartHome.map(item => (
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

export default SmartHome;
