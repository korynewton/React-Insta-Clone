import React from 'react'



class LoginPage extends React.Component {
    state = {
        userText: '',
        passText: ''
    }


    login = e => {
        e.preventDefault();
        localStorage.setItem(this.state.userText, this.state.passText)
        location.reload();
    }
    
    render() {
        return(
            <>
                <input type="text" placeholder="username" value={this.state.userText}/>
                <input type="password" name="" placeholder="password" value={this.state.passText}/>
                <button onclick={this.login}>Login</button>
            </>
        )
    }
    
}

export default LoginPage
