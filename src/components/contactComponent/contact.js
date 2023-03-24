import React from "react";
import "../../App";
import './contact.css';

function Contact(props) {
  var property = props.propertyProps;
  const {price, type, rooms, bathrooms, size} = property;
  var formatedPrice = "";

  if(props.propertyProps.price) {
    formatedPrice = props.propertyProps.price.toLocaleString('de-DE');
  }
  //Add per month styling to the price of properties for rent
  var month = '';
  if(type === 'rent') {
    month = '/month';
  }

  return(
    <>
      <div className='contactContainer'>
        <div className="contactWrapper">
          <div className="topContact">
            <div className="priceContact">
              <h3>{formatedPrice}€{month}</h3>
            </div>
            <div className="roomCharacteristicsContact">
              <ul>
                <li>{rooms} Rooms</li>
                <li>{size} m2</li>
                <li>{bathrooms} Bathroom</li>
              </ul>
            </div>
          </div>
          <div className="middleContact">
            <div className="middleContactTitle">
              <p>Are you interested?</p>
            </div>
            <div className="contactForm">
              <div className="topContactForm">
                <input placeholder="Name"></input>
                <input placeholder="Surname"></input>
              </div>
              <div className="middleContactForm">
                <input placeholder="Email"></input>
              </div>
              <div className="bottomContactForm">
                <textarea placeholder="Tell me if you want me to schedule a visit..."></textarea>
              </div>
            </div>
          </div>
          <div className="bottomContact">
            <div className="contactBtnContainer">
              <span>CONTACT</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;