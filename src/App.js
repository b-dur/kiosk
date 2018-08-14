import React, { Component } from 'react';
import './App.css';
import video from './fount.mp4';

class App extends Component {
  render() {
    return (
      <video
        className="app-video"
        muted
        autoPlay="true"
        loop="true"
        src={video}
      />
    );
  }
}

export default App;
