import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <video
        className="app-video"
        muted
        autoPlay="true"
        loop="true"
        src={`${process.env.PUBLIC_URL}/fount.mp4`}
      />
    );
  }
}

export default App;
