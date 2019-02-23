import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
    width: 100%;

    &:hover {
        border: 1px solid black;
    }

`

const SearchBar = (props) => {
    return (
        <>
            <StyledInput type="text" placeholder='Search' onKeyDown={props.onSearch} />
        </>
    );
};

export default SearchBar