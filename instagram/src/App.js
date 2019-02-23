import React, { Component } from 'react';
import dummyData from './dummy-data';
import Header from './components/Header/Header.js';
import PostPage from './components/PostContainer/PostPage';
import authenticate from './authentication/authenticate';
import LoginPage from './components/Login/Login';

import styled from 'styled-components';
const StyledMainDiv = styled.div`
  font-family: 'Segoe UI';
`


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts : [],
      filtered:[]
    }
  }


  componentDidMount() {
    // console.log('App component mounted')
    this.setState({
      posts : dummyData
    })
  }

  onSearch = event => {
    const filteredPosts = this.state.posts.filter(p => {
      if (p.username.includes(event.target.value)) {
        return p;
      }
      else {
        return null
      }
    });
    this.setState({ filtered: filteredPosts })
  }

  render() {
    return (
      <StyledMainDiv>
        <Header onSearch={this.onSearch} />
        <PostPage posts={this.state.posts} filtered={this.state.filtered} />
      </StyledMainDiv>      
    );
  }
}

export default authenticate(App)(LoginPage);
