import React, {useState} from 'react';
import "./signin.scss";
import { Link, useHistory} from 'react-router-dom';
import { auth } from "../../firebase";


function SignIn() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e =>{
        e.preventDefault(); 

        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push("/")
        })
        .catch(error => alert(error.message))


    }


  return (
  
    <div className='signin'>

        <Link to = "/">
        <img className='signin_logo' src="assets/logo_black.png" alt="" />
        </Link>

        <div className="signin_container">
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value = {email} 
                onChange = {e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value = {password} 
                onChange = {e => setPassword(e.target.value)}/>

                <button type = "submit" onClick={signIn}
                className='login_signinButton'>Sign in</button>
            </form>

            <p>
                By signing-in you agree to the SHOPNOW Conditions of Use and Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-based Ads Notice.
            </p>

            <Link to = "/register">
            <button
             className='login_registerButton'>Create new ShopNow Account</button>
            </Link>

        </div>

    </div>
  );
}

export default SignIn;
