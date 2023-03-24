import React from "react";
import './LoginSignupButton.css';
import { Link } from "react-router-dom";

export const LoginSignupButton = ({children, type, onClick}) => {
  return(
    <div className="loginSignupBtnsContainer animate__animated animate__fadeInLeft">
      <div className="loginBtnContainer">
        <Link to='../login'>
          <button className="loginBtn" onClick={onClick} type={type}>
            Login
          </button>
        </Link>
      </div>
      <div className="loginSignupSeparator">|</div>
      <div className="signupBtnContainer">
        <Link to='/'>
          <button className="signupBtn" onClick={onClick} type={type}>
            SignUp
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LoginSignupButton;