import React from "react";
import "../../App";
import './pages.css';
import Navbar from '../navbarComponent/navbar';
import AgencySearchBar from "../agencySearchBarComponent/agencySearchBar";

function AgencySearchBarPage(pathText) {
  return(
    <>
      <Navbar urlPathName = {pathText} navBlack = 'true'/>
      <AgencySearchBar/>
    </>
  )
}

export default AgencySearchBarPage;