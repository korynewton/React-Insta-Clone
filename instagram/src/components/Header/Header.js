import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Logo from '../../images/image.png'

const Header = (props) => {
    return (
        <div>
            <img src={Logo} alt="insta"/>
            <SearchBar />
        </div>
    )
}

export default Header;