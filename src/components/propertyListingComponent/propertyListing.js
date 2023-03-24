import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../App";
import Property from "../propertyComponent/property";
import './propertyListing.css';
import {selectAllProperties, fetchProperties} from '../../redux/reducers/propertiesSlice';
import { Spinner } from "../Spinner/Spinner";
import Maps from "../mapsComponent/maps";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function PropertyListing(props) {
  const destinationCapitalized = capitalizeFirstLetter(props.destination);
  const filters = {
    destination: destinationCapitalized,
    optionType: props.typeOption, 
    propertyType: props.typeProperty,
    fromDate: props.dateFrom, 
    toDate: props.dateTo,
    fromPrice: props.priceFrom, 
    toPrice: props.priceTo
  }

  const propertyStatus = useSelector(state => state.status)
  const error = useSelector((state) => state.error)
  const properties = useSelector(selectAllProperties);
  const dispatch = useDispatch();

  useEffect(() => {
    if (propertyStatus === 'idle') {
      dispatch(fetchProperties(filters))
    }
  }, [propertyStatus, dispatch])
  
  let propertyCard, mapsComponent

  if (propertyStatus === 'loading') {
    propertyCard = <Spinner text="Loading..." />
  } else if (propertyStatus === 'succeeded') {
    propertyCard = properties.map((property) => (
      <Property key={property.id} property={property} type="{filters}"/>
    ))
    mapsComponent = <Maps properties={properties}/>
  } else if (propertyStatus === 'failed') {
    propertyCard = <div>{error}</div>
  }
  
  return(
    <>
      <div className="propertyListingContainer">
        <div className="propertyListingBody">
          <div className="propertyListingWrapper">
            <div className="propertyListingTop">
              <select defaultValue="Relevance" className='propertyCategory'>
                <option disabled="disabled">Relevance</option>
                <option value="1">One</option>
                <option value="2">Two</option>
              </select>
            </div>
            <div className="propertyListingBottom">
              {propertyCard}
            </div>
          </div>
        </div>
      </div>
      <div className="mapsContainer">
        {mapsComponent}
      </div>
    </>
  );
};

export default PropertyListing;