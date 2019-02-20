import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Header from './components/Header/Header.js';
import PostContainer from './components/PostContainer/PostContainer'


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
    });
    this.setState({ filtered: filteredPosts })
  }

  render() {
    return (
      <div>
        <Header onSearch={this.onSearch} />
        <div>
          {this.state.filtered.length > 0 
          ? this.state.filtered.map((post, index) => <PostContainer key={index} postId={index} posts={post} />)
          : this.state.posts.map((post, index) => <PostContainer key={index} postId={index} posts={post} />)
        }
          {/* {this.state.posts.map((post, index) => <PostContainer key={index} postId={index} posts={post} />)} */}
        </div>
      </div>      
    );
  }
}

export default App;
