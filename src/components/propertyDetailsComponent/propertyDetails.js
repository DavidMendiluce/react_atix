import React from "react";
import "../../App";
import './propertyDetails.css';
import garageImg from '../../images/garageGrey.png';
import bed from '../../images/bed.png';
import wifiImg from '../../images/wifiCropped.png';
import shower from '../../images/showerCropped.png';
import house from '../../images/house.png';

function PropertyDetails(props) {
  var property = props.propertyProps;
  const {title, imageURL, description, type, imageListing,
  location, rooms, bathrooms, size, garage, wifi} = property;

  return(
    <div className='propertyDetailsContainer'>
      <div className="propertyDetailsBody">
          {Object.keys(property).length === 0 ? (
              <div>...Loading</div>
          ) : (
          <div className="propertyDetailsWrapper">
            <div className="detailsTop">
              <img src={imageURL} />
            </div>
            <div className="detailsMid">
              <div className="propertyTitle">
                <h1>{title}</h1>
              </div>
              <div className="propertySubTitle">
                <h3>{location}</h3>
              </div>
              <div className="propertyDescription">
                <p>{description}</p>
              </div>
            </div>
            <div className="detailsBottom">
              <div className="symbolsContainer">
                <div className="topSymbols">
                  <div className="symbolBox">
                    <div className="symbolImgWrapper"><img src={house}/></div>
                    <p>{size}m2</p>
                  </div>
                  <div className="symbolBox">
                    <div className="symbolImgWrapper"><img src={bed}/></div>
                    <p>{rooms} Bedroom</p>
                  </div>
                  <div className="symbolBox">
                    <div className="symbolImgWrapper"><img src={shower}/></div>
                    <p>{bathrooms} Bathroom</p>
                  </div>
                </div>
                <div className="bottomSymbols">
                  <div className="symbolBox">
                    <div className="symbolImgWrapper">
                      <img src={wifiImg}/>
                    </div>
                    <p>{wifi}</p>
                  </div>
                  <div className="symbolBox">
                    <div className="symbolImgWrapper">
                      <img src={garageImg}/>
                    </div>
                    <p>{garage}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )} 
      </div>
    </div>
  )
}

export default PropertyDetails;