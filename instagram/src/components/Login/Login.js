import React from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';



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
                 <Container className="App">
                    <h2>Sign In</h2>
                    <Form className="form" onSubmit={this.login}>
                    <Col>
                        <FormGroup>
                        <Label>Username</Label>
                        <Input
                         placeholder='username'
                         name="userText"
                         value={this.state.userText} 
                         onChange={this.handleOnChange}
                         />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input 
                        type="password" 
                        placeholder="password" 
                        name="passText" value={this.state.passText} 
                        onChange={this.handleOnChange}
                        />
                        </FormGroup>
                    </Col>
                    <Button onSubmit={this.login}>Submit</Button>
                    </Form>
                </Container>
            </>
        )
    }
    
}

export default LoginPage
