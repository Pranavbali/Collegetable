import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ setSearchQuery }) => {
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Search for a college..." 
                onChange={handleInputChange} 
            />
        </div>
    );
};

export default SearchBar;
