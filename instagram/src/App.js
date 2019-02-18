import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import Header from './components/Header/Header.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts : dummyData
    }
  }

  render() {
    return (
      <Header />
    );
  }
}

export default App;
