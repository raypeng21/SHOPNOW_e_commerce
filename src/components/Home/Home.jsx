import React from 'react';
import Product from '../Product/Product';
import "./home.scss"
export default function Home() {
  return (
  <div className='home'>
      <div className="home_container">
        <img className='home_image' src="assets/banner.png" alt="" />
      
            <div className="home_row">
                <Product
                title = "Samsung 65' TV"
                img="https://m.media-amazon.com/images/I/410+HZp6JSL._AC_SY200_.jpg"
                price = {1599.99}
                rating={4}
                
                />
                <Product />

            </div>

                  
            <div className="home_row">
            <Product />
            <Product />
            <Product />

                
            </div>
      
      
            <div className="home_row">

            <Product />

            </div>

      </div>
  </div>
  );
}
