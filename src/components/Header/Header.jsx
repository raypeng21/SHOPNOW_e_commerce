import React from 'react';
import './header.scss'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import  {useStateValue}  from '../../StateProvider';

export default function Header() {

  const [{cart}] = useStateValue();

  return (
    <div className='header'>
      <Link to ="/" >
      <img className='header_logo' src="assets/logo.png" alt="" />
      </Link>


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


            <Link to = "/checkout">
            <div className="header_option_basket">
            <ShoppingCartIcon />
            <span className='header_option_line_two header_basketCount'>
              {cart?.length}
              </span>

            </div>
            
            </Link>



        </div>

        
    </div>

    
  );
}
