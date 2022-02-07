import React, {useState} from 'react';
import "./register.scss"
import { Link,useHistory } from 'react-router-dom';
import { auth } from "../../firebase";

function Register() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
      };

    // const checkboxChecked =() =>{
    //     if(isChecked){
    //         register();
    //     }else{
    //         alert.message("Please agree the Conditions before sign up.")
    //     }

    // }

    const register = e =>{

        if(isChecked){
            e.preventDefault();

            auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //successfully created account
                // console.log(auth);
    
                if (auth) {
                    history.push("/")
                }
            })
            .catch(error => alert(error.message))
        }else{
            alert("Please agree the Conditions before sign up.")
        }


    }
  return (
    <div className='register'>

        <Link to = "/">
        <img className='register_logo' src="assets/logo_black.png" alt="" />
        </Link>

        <div className="register_container">
            <h1>Register</h1>
            <form>
                <h5>Your E-mail:</h5>
                <input type="text" value = {email} 
                onChange = {e => setEmail(e.target.value)}/>

                <h5>Your Password:</h5>
                <input type="password" value = {password} 
                onChange = {e => setPassword(e.target.value)}/>

            </form>
            <button onClick={register}
             className='login_registerButton'>Create your ShopNow Account</button>
            <p>
                <input className='registerCheckBox' 
                type="checkbox" 
                checked={isChecked}
                onChange={handleOnChange}
                /> 
                By creating your account, you agree to the SHOPNOW Conditions of Use and Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-based Ads Notice.
            </p>


        </div>


    </div>
  
  );
}

export default Register;
