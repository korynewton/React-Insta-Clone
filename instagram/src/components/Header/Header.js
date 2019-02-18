import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
// import Logo from '../../images/image.png'
import instaLogo from '../../images/icons/instagram.svg'
import navigate from '../../images/icons/compass.svg'
import like from '../../images/icons/heart.svg'
import user from '../../images/icons/user.svg'
import './Header.css'


const Header = (props) => {
    return (
        <div className='header'>
            {/* <img src={Logo} alt="insta"/> */}
            <img src={instaLogo} alt="Instagram"/>
            <h3>instagram</h3>
            <SearchBar />
            <img src={navigate} alt="Navigation"/>
            <img src={like} alt="Like"/>
            <img src={user} alt="Profile"/>


        </div>
    )
}

export default Header;