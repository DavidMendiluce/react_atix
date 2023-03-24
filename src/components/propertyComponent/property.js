import React, { useEffect } from "react";
import "../../App";
import './property.css';
import { Link } from "react-router-dom";

function Property({property}) {
  let descriptionShort = property.description.substring(0,130);
  descriptionShort = descriptionShort + "...";
  const stringPath = window.location.href;
  const arrayPath = stringPath.split('/');
  const optionType = arrayPath[4];

  return(
    <>
      <div key={property.id} className="propertyContainer">
        <Link to={`/property/${optionType}/${property.id}`}>
          <div className="propertyBox">
            <div className="leftProperty">
              <div className="leftPropertyBox">
                <img src={property.imageListing}/>
              </div>
            </div>
            <div className="rightProperty">
              <div className="propertyTitle">
                <h1>{property.title}</h1>
              </div>
              <div className="propertySubtitle">
                <h3>{property.location}</h3>
              </div>
              <div className="propertyDescription">
                <p>
                  {descriptionShort}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Property;