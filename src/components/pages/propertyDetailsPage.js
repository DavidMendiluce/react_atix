import React from "react";
import "../../App";
import './pages.css';
import Navbar from '../navbarComponent/navbar';
import Contact from "../contactComponent/contact";
import PropertyDetails from "../propertyDetailsComponent/propertyDetails";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {selectPropertyById} from '../../redux/reducers/propertiesSlice';

function ProdpertyDetailsPage() {
  const {propertyId} = useParams();
  const property = useSelector((state) => selectPropertyById(state, propertyId));

  return(
      <>
      <div className="propertyDetailsPageContainer">
        <Navbar urlPathName = 'buy' navBlack = 'true'/>
        <div className='propertyDetailsPageBody'>
          <PropertyDetails propertyProps = {property}/>
          <Contact propertyProps = {property}/>
        </div>
      </div>
      </>
  )
}

export default ProdpertyDetailsPage;