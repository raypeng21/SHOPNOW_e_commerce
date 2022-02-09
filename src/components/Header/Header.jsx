import React from 'react';
import './header.scss'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import  {useStateValue}  from '../../StateProvider';
import { auth } from '../../firebase';

export default function Header() {


  const handleAuthentication = () =>{
    if(user){
      auth.signOut();
    }
  } 
  const [{cart, user}] = useStateValue();

  return (
    <div className='header'>

      <div className="mainHeader">

      <Link to ="/" >
      <img className='header_logo' src="assets/logo.png" alt="" />
      </Link>


        <div className="header_search">
          <input className='header_search_input' type="text" />
          <SearchIcon className='header_searchIcon' />
        </div>



        <div className="header_nav">
          <Link to = {!user && "/signin"}>
          <div onClick={handleAuthentication} className="header_option">
              <span className='header_option_line_one'>Hello {user ? ", "+ user.email : " Guest" } </span>
              <span className='header_option_line_two'>{user ? "Sign out" : "Sign in"}</span>
            </div>
          
          </Link>

          <Link to = "/orders">
            <div className="header_option">
                <span className='header_option_line_one'>Return</span>
                <span className='header_option_line_two'>& Orders</span>
              </div>
          </Link>


            <div className="header_option">
              <span className='header_option_line_one'>Become</span>
              <span className='header_option_line_two'>Nower</span>
            </div>


            <Link to = "/checkout">
            <div className="header_option_cart">
            <ShoppingCartIcon />
            <span className='header_option_line_two header_basketCount'>
              {cart?.length}
              </span>

            </div>
            
            </Link>

          </div>
      



        </div>
      

      <div className="supportHeader">
        

      </div>
        
    </div>

    
  );
}
