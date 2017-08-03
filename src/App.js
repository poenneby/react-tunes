import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    const context = new AudioContext();
    fetch('/sounds/kick.wav')
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        const source = context.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(context.destination);
        source.start();
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Tunes</h2>
        </div>
        <p className="App-intro">
          Kick!
        </p>
      </div>
    );
  }
}

export default App;
