import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import "./searchbar.scss"

const Searchbar = () => {
  return (
    <div className="mainDiv">
      <div className="searchDiv">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search..."
          className='searchbar'
          required
        />
        <span className="search_icon">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
      <button className='searchbutton'>
        Click Me
      </button>
    </div>
  );
};

export default Searchbar;
