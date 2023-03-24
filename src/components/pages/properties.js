import React from "react";
import "../../App";
import './pages.css';
import Navbar from '../navbarComponent/navbar';
import { useParams } from "react-router-dom";
import PropertyListing from "../propertyListingComponent/propertyListing";

function Properties() {
  const {optionType, propertyType, destinationAddress, fromDate, toDate, fromPrice, toPrice} = useParams();

  return(
    <>
      <div className='propertiesContainer'>
        <Navbar urlPathName = 'buy' navBlack = 'true'/>
        <div className="propertiesBody">
          <PropertyListing typeOption = {optionType} typeProperty = {propertyType}
          destination = {destinationAddress} dateFrom = {fromDate} dateTo = {toDate}
          priceFrom = {fromPrice} priceTo = {toPrice}/>
        </div>
      </div>
    </>
  )
}

export default Properties;