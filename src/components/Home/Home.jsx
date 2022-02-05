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
                id = {1232}
                title = "Samsung 65' Q60T 4K Ultra HD HDR Smart QLED TV (QN65Q60TAFXZC) [Canada Version]"
                img="https://m.media-amazon.com/images/I/410+HZp6JSL._AC_SY200_.jpg"
                price = {1599.99}
                rating={5}
                
                />
                <Product
                id = {21232}
                title = "All-new Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal"
                img="https://m.media-amazon.com/images/I/71at+SHImkL._AC_SL1000_.jpg"
                price = {129.99}
                rating={5}
                
                />

            </div>

                  
            <div className="home_row">
            <Product
                id = {23233}
                title = "HOMCOM Storage Shelf 3-Tier Bookcase Display Rack Home Organizer for Home Office, Living Room, Playroom, Rustic Brown"
                img="https://m.media-amazon.com/images/I/818O1PL+cWS._AC_SL1500_.jpg"
                price = {169.99}
                rating={4}
                
                />                
                <Product
                id = {4232}
                title = "Hathaway Jupiter 7' Pool Table, 84 inch  L x 48 inch W x 31 inch H, Black"
                img="https://m.media-amazon.com/images/I/61llvl5qfjL._AC_SL1500_.jpg"
                price = {1069.98}
                rating={3}
                
                />                
                <Product
                id = {52323}
                title = "NOUHAUS Ergo3D Ergonomic Office Chair - Rolling Desk Chair with 3D Adjustable Armrest, 3D Lumbar Support and Blade Wheels - Mesh Computer Chair, Gaming Chairs, Executive Swivel Chair (Black)"
                img="https://m.media-amazon.com/images/I/81EsueZ3fTL._AC_SL1500_.jpg"
                price = {629.99}
                rating={5}
                
                />

                
            </div>
      
      
            <div className="home_row">

            <Product
                id = {6232}
                title = "SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
                img="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SL1000_.jpg"
                price = {1499.99}
                rating={5}
                
                />
            </div>

      </div>
  </div>
  );
}
