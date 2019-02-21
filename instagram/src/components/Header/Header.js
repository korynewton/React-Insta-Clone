import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import instaLogo from '../../images/icons/instagram.svg';
import navigate from '../../images/icons/compass.svg';
import like from '../../images/icons/heart.svg';
import user from '../../images/icons/user.svg';
import logo from '../../images/icons/instagramLogo.svg';
import styled from 'styled-components'

const StyledHeader = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid black; */
`
const LogoHeader = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
`
const LogoImage = styled.img`
    max-height: 30px;
    width:auto;
`

const SearchDiv = styled.div`
    width: 30%;
    /* border: 1px solid purple; */
`
const NavIconsDiv = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-around;
`



const Header = (props) => {
    return (
        <StyledHeader>
            <LogoHeader>
                <LogoImage src={instaLogo} alt="Instagram"/>
                <h3> | </h3>
                <LogoImage src={logo} alt="Instagram"/>
            </LogoHeader>
            <SearchDiv>
                <SearchBar onSearch={props.onSearch} />
            </SearchDiv>
            <NavIconsDiv>
                <img src={navigate} alt="Navigation"/>
                <img src={like} alt="Like"/>
                <img src={user} alt="Profile"/>
            </NavIconsDiv>
        </StyledHeader>
    )
}

export default Header;