import React from 'react';
import './SearchBoxStyles.css';

function SearchBox({placeholder, handleChange}) {
    return (
        <input 
            className="search"
            type="search" 
            placeholder={placeholder} 
            onChange={handleChange }>
            </input>
    )
};

export default SearchBox
