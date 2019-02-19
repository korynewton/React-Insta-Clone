import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Header from './components/Header/Header.js';
import PostContainer from './components/PostContainer/PostContainer'


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts : []
    }
  }

  componentDidMount() {
    // console.log('App component mounted')
    this.setState({
      posts : dummyData
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          {this.state.posts.map((post, index) => <PostContainer key={index} postId={index} posts={post} />)}
        </div>
      </div>      
    );
  }
}

export default App;
