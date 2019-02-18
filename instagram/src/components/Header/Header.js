import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Logo from '../../images/image.png'
import Profile from '../../images/profile.png'
import './Header.css'


const Header = (props) => {
    return (
        <div className='header'>
            <img src={Logo} alt="insta"/>
            <SearchBar />
            <img src={Profile} alt ="profile" />
        </div>
    )
}

export default Header;