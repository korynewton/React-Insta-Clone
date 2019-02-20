import React from 'react'



class LoginPage extends React.Component {
    state = {
        userText: '',
        passText: ''
    }


    login = e => {
        e.preventDefault();
        localStorage.setItem(this.state.userText, this.state.passText);
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
                <input type="text" placeholder="username" name="userText" value={this.state.userText} onChange={this.handleOnChange}/>
                <input type="password" name="" placeholder="password" name="passText" value={this.state.passText} onChange={this.handleOnChange}/>
                <button onClick={this.login}>Login</button>
            </>
        )
    }
    
}

export default LoginPage
