import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Weatherdiv from '../weatherdiv/Weatherdiv';

import "./searchbar.scss";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const formRef = useRef(null);

  const handleCitySearch = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchValue);
    formRef.current.reset();
    setSearchValue(""); // Optionally reset the searchValue state
  };

  return (
    <div className="mainDiv">
      <form ref={formRef} onSubmit={handleCitySearch}>
        <div className="searchDiv">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search..."
            className="searchbar"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            required
          />
          <span className="search_icon">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        
        <button className="searchbutton" type="submit">
          Click Me
        </button>

        </div>
        <Weatherdiv searchValue={searchValue} />
 
      </form>
      
    </div>
  );
};

export default Searchbar;
