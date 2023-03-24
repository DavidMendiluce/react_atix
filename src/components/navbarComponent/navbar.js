import React, {useState, useEffect} from 'react';
import './navbar.css';
import {LoginSignupButton} from '../LoginSignUpButtonComponent/LoginSignupButton';
import logo from '../../images/logo1.png';
import 'animate.css';

function Navbar() {
  const stringPath = window.location.href;
  const arrayPath = stringPath.split('/');
  const currentPath = arrayPath[3];
  const optionType = arrayPath[4];

  const [button, setButton] = useState(true);
  const [hamburger, setHamburger] = useState(false)
  function showMobileMenu() {
    setHamburger(!hamburger);
  }

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);

  return(
    <>
      <nav style={Object.assign({background: currentPath === 'sell' || 
        currentPath === 'properties' || currentPath === 'property' ? '#303030' : ''},
      {position: currentPath === 'sell' || 
      currentPath === 'properties' || currentPath === 'property' ? 'fixed' : ''})} className='navbar'>
        <div className='navbarWrapper'>
          <div className='navbar-container'>
            <div className='leftBar animate__animated animate__fadeInLeft'>
              <ul>
                <li id="buyOption" className={currentPath === 'buy' || optionType === 'buy' ? 'link-active' : ''} onClick={() => window.location.href = '/buy'}>Buy</li>
                <li id="rentOption" className={currentPath === 'rent' || optionType === 'rent' ? 'link-active' : ''} onClick={() => window.location.href = '/rent'}>Rent</li>
                <li id="sellOption" className={currentPath === 'sell' ? 'link-active' : ''} onClick={() => window.location.href = '/sell'}>Sell</li>
              </ul>
            </div>
            <div className='middleBar animate__animated animate__fadeInDown'>
              <img data-cy="logo" onClick={function() {window.location.href='/'}} id="atixLogo" src={logo}/>
            </div>
            <div data-cy="hamburger-menu" id='hamburguer-menu' className={hamburger ? 'open' : ''} onClick={showMobileMenu.bind(this)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className='rightBar'>{button && <LoginSignupButton/>}</div>  
          </div>
        </div>
        <div style={{visibility: currentPath === 'sell' || 
        currentPath === 'properties' || currentPath === 'property' ? 'hidden' : 'visible'}} 
        className='navbarLine'></div>
        <div className={`hideMe animate__animated ${hamburger ? 'animate__fadeInDown' : 'animate__fadeOutUp'} ${hamburger ? 'showMe' : 'hideMe'}`} id="navbar-container-mobile">
          <ul>
            <li onClick={() => window.location.href = '/buy'}>Buy</li>
            <li onClick={() => window.location.href = '/rent'}>Rent</li>
            <li data-cy="sell-link" onClick={() => window.location.href = '/sell'}>Sell</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;

