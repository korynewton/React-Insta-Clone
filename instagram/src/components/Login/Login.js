import React from 'react';
import styled from 'styled-components';
import instaLogo from '../../images/icons/instagramLogo.svg'



const MainContainer = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin: 40px auto;
    width: 300px;
    background: lightgray;
    font-family: 'Segoe UI';
`

const StyledForm = styled.form`
    display: flex;
    flex-flow: column nowrap;
    /* border: 1px solid red; */
    text-align: center;
    margin: 10px 0;

    & h2 {
        font-size: 30px;

    }
    
`

const StyledInput = styled.input`
    width: 150px;
    height: 20px;
    margin: 10px 0;
`
const StyledButton = styled.button`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;
    background: #4caf50;

    &:hover {
        cursor:pointer;
    }
`

const StyledLogo = styled.img`
    display: block;
    max-width: 300px;
    margin: auto;
`



class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            userText: '',
            passText: ''
        }
    }
    


    login = e => {
        e.preventDefault();
        localStorage.setItem('username', this.state.userText);
        window.location.reload();
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return(
            <>

                <StyledLogo src={instaLogo} alt="Instagram"/>
                 <MainContainer className="App">
                    <StyledForm onSubmit={this.login}>
                        <h2>Sign In:</h2>
                        <StyledInput
                         placeholder='username'
                         name="userText"
                         value={this.state.userText} 
                         onChange={this.handleOnChange}
                         />                  
                   
                        <StyledInput 
                        type="password" 
                        placeholder="password" 
                        name="passText" value={this.state.passText} 
                        onChange={this.handleOnChange}
                        />        
                        <StyledButton onSubmit={this.login}>Submit</StyledButton>
                    </StyledForm>
                </MainContainer>
            </>
        )
    }
    
}

export default LoginPage
