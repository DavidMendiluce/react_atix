import React from "react";
import "../../App";
import './login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logoBlack.png';

function Login() {
  return(
    <>
      <div className="loginContainer">
        <div className="loginWrapper">
          <div className="loginTop">
            <div className="logoContainer">
              <img onClick={function() {window.location.href='/'}} src={logo} className="logo"/>
            </div>
            <h4>Login Into Your Account</h4>
          </div>
          <div className="loginBottom">
            <div className="loginInputs">
              <div  className="loginNameInput">
                <input placeholder="Username or Email"/>
              </div>
              <div className="loginPassInput">
                <input placeholder="Password"/>
              </div>
            </div>
            <div className="forgotPassword">
              <p>Forgot your password?</p>
            </div>
            <div className="loginComponentBtn" >
              <div onClick="">   
                <Link style={{textDecoration: 'none', color: '#FF9846'}} to=""><span>LOGIN</span></Link>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;