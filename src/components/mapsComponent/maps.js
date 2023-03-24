import React, {useState} from 'react'
import { GoogleMap, useJsApiLoader, InfoWindow, Marker } from '@react-google-maps/api';
import Property from "../propertyComponent/property";
import houseIcon from '../../images/orangeHouseMini.png';
import './maps.css';
import { Link } from 'react-router-dom';

/*-----------------MAP options start--------------------*/
const containerStyle = {
  width: '100%',
  height: '100%'
}

var customZoom;
if(window.innerWidth <= 960) {
  customZoom = 9;
} else {
  customZoom = 10;
}

const center = {
  lat: 52.21503589187348,
  lng:  4.7826987562311105 
};
/*-----------------MAP options end--------------------*/

function Maps({properties}) {
  const markers = [];

  for(let i = 0; i<properties.length; i++) {
    var markerId = i + 1;
    var propertyId = properties[i].id;
    var currentTitle = properties[i].title;
    var currentLocation = properties[i].location;
    var currentImage = properties[i].imageListing;
    var latitude = properties[i].latitude;
    var longitude = properties[i].longitude;

    markers.push({id: markerId, propertyId: propertyId, title: currentTitle, location: currentLocation, image: currentImage, position: {lat : latitude, lng: longitude}});
  }

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={customZoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {markers.map(({ id, propertyId, title, location, image, position }) => (
      <Marker
        key={id}
        position={position}
        onClick={() => handleActiveMarker(id)}
        icon={{url: houseIcon, scale: 0.05}}
        propertyId = {propertyId}
        title = {title}
        location = {location}
        image = {image} 
      >
        {activeMarker === id ? (
          <InfoWindow options = {{maxWidth: 300}} onCloseClick={() => setActiveMarker(null)}>
            <Link to={`/property/${propertyId}`}>
              <div className='markerContainer'>
                <img src={image}/>
                <div className='markerText'>
                  <h1>{title}</h1>
                  <h3>{location}</h3>
                </div>
              </div>
            </Link>
          </InfoWindow>
        ) : null}
      </Marker>
    ))}
      <></>
    </GoogleMap>
  ) : <></>
}

export default Maps;