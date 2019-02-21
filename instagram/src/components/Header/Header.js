import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
// import Logo from '../../images/image.png'
import instaLogo from '../../images/icons/instagram.svg';
import navigate from '../../images/icons/compass.svg';
import like from '../../images/icons/heart.svg';
import user from '../../images/icons/user.svg';
import logo from '../../images/icons/instagramLogo.svg';
import './Header.css';


const Header = (props) => {
    return (
        <div className='header'>
            <div className="headerLeft headerBox">
                <img src={instaLogo} alt="Instagram"/>
                <h3> | </h3>
                <img src={logo} alt="Instagram"/>
            </div>
            <div className='headerCenter headerBox'>
                <SearchBar onSearch={props.onSearch} />
            </div>
            <div className="headerRight headerBox">
                <img src={navigate} alt="Navigation"/>
                <img src={like} alt="Like"/>
                <img src={user} alt="Profile"/>
            </div>
        </div>
    )
}

export default Header;