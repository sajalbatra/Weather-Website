import React from 'react'
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import "./weatherdiv.scss"

const Weatherdiv = ({ searchValue }) => {
  return (
    <div className='weatherdiv'>
      <p id='location'>{searchValue}</p>
    </div>
  )
}

// Prop validation using PropTypes
Weatherdiv.propTypes = {
  searchValue: PropTypes.string.isRequired,
};

export default Weatherdiv
