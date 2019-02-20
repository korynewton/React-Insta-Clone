import React from 'react'

const SearchBar = (props) => {
    return (
        <div>
            <input type="text" placeholder='Search' onKeyDown={props.onSearch} />
        </div>
    );
};

export default SearchBar