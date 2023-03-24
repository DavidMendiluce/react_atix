import React from "react";
import "../../App";
import './pages.css';
import videoSource from '../../videos/home_tour_1.mp4';
import SearchBar from "../searchBarComponent/searchBar";
import Navbar from '../navbarComponent/navbar';

var desktopMobile = "";
var backgroundDisplay = "";
if(window.innerWidth <= 960) {
    desktopMobile = 'mobileImage';
    backgroundDisplay =  'homeContainer imageDisplay';
  } else {
    desktopMobile = 'desktopVideo';
    backgroundDisplay = 'homeContainer videoDisplay';
  }

function Home(pathText) {
  window.addEventListener('popstate', (event) => {
    window.location.href = './';
  });

  return(
    <>
      <div className={backgroundDisplay}>
        <video className={desktopMobile} src={videoSource} autoPlay loop muted></video>
        <Navbar urlPathName = {pathText}/>
        <SearchBar searchFilters = {pathText}/>
      </div>
    </>
  )
}

export default Home;