import React from "react";
import "../../App";
import './agencySearchBar.css';
import { Link } from 'react-router-dom';
import backgroundImgDesktop from '../../images/realStateAgentHDCrop.jpg';
import backgroundImgMobile from '../../images/realStateAgentMobile.jpg';

var backgroundImg;

if(window.innerWidth <= 960) {
  backgroundImg = backgroundImgMobile;
} else {
  backgroundImg = backgroundImgDesktop;
}

function AgencySearchBar() {
  return(
    <>
      <div data-cy="agency-search-container" style={{backgroundImage: `url(${backgroundImg})`}} className="agencySearchBarContainer">
        <div className="agencySearchBarWrapper">
          <div className="sellPageTitle">
            <h1>Find an Agency near you</h1>
          </div>
          <div className="sellPageSearchBar">
            <div className='inputContainer'>
              <input placeholder='Destination or address'></input>
            </div>  
            <div className='agencySearchBarBottom'>
              <div>
                <Link style={{textDecoration: 'none', color: '#FF9846'}} to='/'><span>SEARCH</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AgencySearchBar;