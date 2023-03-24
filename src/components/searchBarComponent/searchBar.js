import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import './searchBar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { useId } from 'react';

function SearchBar() {
  const stringPath = window.location.href;
  const arrayPath = stringPath.split('/');
  const currentPath = arrayPath[3];
  let stringFromDate = "";
  let stringToDate = "";

  /*----------------Calendar logic start-----------------*/
  const todaysDate = new Date(); 
  const [date, setDate] = useState(todaysDate);
  const [openCalendar, setCalendar] = useState(false);
  let spanFrom = 'from';
  let spanTo = 'to';
  function submitCalendar(selectedDate) {
    const toDate = new Date(formatDate(selectedDate[0])).getTime();
    const fromDate = new Date(formatDate(selectedDate[1])).getTime();
    const todaysFormated = new Date(formatDate(todaysDate)).getTime();
    if(toDate >= todaysFormated && fromDate > toDate) {
      setDate(selectedDate);
      setCalendar(false);
    }
  }
  function toggleCalendar() {
    setCalendar(true);
  }
  if(date.length && date.length > 0) {
    var dayArrival = date[0].toString().split(' ')[2];
    var monthArrival = date[0].toString().split(' ')[1];
    var yearArrival = date[0].toString().split(' ')[3];
    var dayDeparture = date[1].toString().split(' ')[2];
    var monthDeparture = date[1].toString().split(' ')[1];
    var yearDeparture = date[1].toString().split(' ')[3];
    stringFromDate = dayArrival + " " + monthArrival + " " + yearArrival;
    stringToDate = dayDeparture + " " + monthDeparture + " " + yearDeparture;
    spanFrom = stringFromDate;
    spanTo = stringToDate;
  }
  /*----------------Calendar logic end-----------------*/

  //Parameters that are being passed in the url and then are used to filter the search
  const [propertyType, setPropertyType] = useState(currentPath);
  const [optionType, setOptionType] = useState(currentPath);
  const [destinationAddress, setDestinationAddress] = useState("");
  const [fromPrice, setFromPrice] = useState("From");
  const [toPrice, setToPrice] = useState("To");
  const inputId = useId();

  function checkFields() {
    if((destinationAddress === 'Amsterdam' || destinationAddress === 'amsterdam' 
    || destinationAddress === 'Haarlem' || destinationAddress === 'haarlem' ||
    destinationAddress === 'Leiden' || destinationAddress === 'leiden' || 
    destinationAddress === 'All' || destinationAddress === 'all' ||
    destinationAddress === 'All no filter' || destinationAddress === 'all no filter') && 
    optionType && stringFromDate && stringToDate &&  optionType !== '' 
    && stringFromDate !== '' && stringToDate !== '') {
      return true;
    } else {
      return false;
    }
  }

  function formatDate(dateString) {
    let arrayFormated = [];
    const dateArray = dateString.toString().split(' ');
    for(let i = 0; i<=3; i++) {
      arrayFormated.push(dateArray[i])
    }
    return arrayFormated.join(' ');
  }

  return(
    <>
      <div className='searchBarContainer animate__animated animate__fadeInLeft'>
        <div className='searchBarBox'>
          <div className='searchBarTop'>
            <ul>
              <li className={propertyType === 'buy' ? 'active' : ''} id="buySearchbarOption" onClick={function(event) { setOptionType('buy'); setPropertyType('buy')}}>Buy<span></span></li>
              <li className={propertyType === 'rent' ? 'active' : ''} id="rentSearchbarOption" onClick={function(event) { setOptionType('rent'); setPropertyType('rent')}}>Rent<span></span></li>
              <li className={propertyType === 'apartment' ? 'active' : ''} onClick={function(event) { setPropertyType('apartment')}}>Apartment<span></span></li>
              <li className={propertyType === 'studio' ? 'active' : ''} onClick={function(event) { setPropertyType('studio')}}>Studio<span></span></li>
              <li className={propertyType === 'detachedHouse' ? 'active' : ''} onClick={function(event) { setPropertyType('detachedHouse')}}>Detached House<span></span></li>
            </ul>
          </div>
          <div className='searchBarMiddle'>
            <div className='searchBarMiddleTop'>
              <div className='destinationContainer'>
                <input id={inputId} value={destinationAddress} onInput={e =>setDestinationAddress(e.target.value)} placeholder='Search for a location'></input>
              </div>
            </div>
            <div className='searchBarMiddleBottom'>
              <div id='calendarContainer'>
                <div style={{display: openCalendar ? 'none' : ''}} onClick={toggleCalendar} id='calendarInput'>
                  <div className="datesWrapper">
                    <div className="fromDateWrap">
                      <FontAwesomeIcon icon={faCalendar} size="lg"/>
                      <span id="spanFrom">{spanFrom}</span>
                    </div>
                    <span className='lineSeparator'>|</span>
                    <div className='toDateWrap'>
                      <FontAwesomeIcon icon={faCalendar} size="lg"/>
                      <span id="spanTo">{spanTo}</span>
                    </div>
                  </div>
                </div>
                <div className='reactCalendarWrapper' style={Object.assign({display: openCalendar ? 'block' : 'none'},
                {marginTop: openCalendar ? '14rem' : ''})}>
                  <Calendar
                    onChange={submitCalendar}
                    value={date}
                    selectRange={true}
                    />
                </div>     
              </div>
              <div className='priceRangeContainer'>
                <div className='priceRangeWrapper'>
                  <select value={fromPrice} onChange={e =>setFromPrice(e.target.value)} className='dropwdownPricesFrom'>
                    <option value="From" disabled="disabled">From</option>
                    <option value="1000">1000</option>
                    <option value="2000">2000</option>
                    <option value="3000">3000</option>
                    <option value="500000">500000</option>
                    <option value="1000000">1000000</option>
                  </select>
                  <select value={toPrice} onChange={e =>setToPrice(e.target.value)} className='dropwdownPricesTo'>
                    <option value="To" disabled="disabled">To</option>
                    <option value="2000">2000</option>
                    <option value="3000">3000</option>
                    <option value="500000">500000</option>
                    <option value="1000000">1000000</option>
                    <option value="2000000">2000000</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='searchBarBottom'>
            <div>
              <Link style={{textDecoration: 'none', color: '#FF9846'}} to = { checkFields() ? {pathname: `/properties/${optionType}/${propertyType}/${destinationAddress}/${stringFromDate}/${stringToDate}/${fromPrice}/${toPrice}/`} : '#'}><span>SEARCH</span></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchBar;