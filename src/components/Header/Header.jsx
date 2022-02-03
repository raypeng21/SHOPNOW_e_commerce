import React from 'react';
import './header.scss'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

export default function Header() {
  return (
    <div className='header'>
        <img className='header_logo' src="assets/logo.png" alt="" />


        <div className="header_search">
          <input className='header_search_input' type="text" />
          <SearchIcon className='header_searchIcon'/ >
        </div>



        <div className="header_nav">
            <div className="header_option">
              <span className='header_option_line_one'>Hello</span>
              <span className='header_option_line_two'>Sign in</span>

            </div>

            <div className="header_option">
              <span className='header_option_line_one'>Return</span>
              <span className='header_option_line_two'>& Orders</span>
            </div>

            <div className="header_option">
              <span className='header_option_line_one'>Your</span>
              <span className='header_option_line_two'>Nower</span>
            </div>

            <div className="header_option_basket">
            <ShoppingBasketIcon />
            <span className='header_option_line_two header_basketCount'>0</span>

            </div>


        </div>

        
    </div>

    
  );
}
