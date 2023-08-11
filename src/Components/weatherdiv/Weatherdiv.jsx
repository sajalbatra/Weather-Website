//import React,{useEffect,useState} from 'react'
//import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import "./weatherdiv.scss"

const Weatherdiv = (props) => {

    return (
      <div className='weatherdiv'>
        <p id='location'>{props.searchValue}</p>
        {props.temperature && <p id='temp'>{props.temperature}°C</p>}
        {props.main && <p id='weatherstate'>{props.main}</p>}
      </div>
    );
  }
  

export default Weatherdiv
