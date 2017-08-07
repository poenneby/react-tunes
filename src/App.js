import React, { Component } from 'react';
import {loadSounds, playSound} from './bufferUtil';
import './App.css';

class App extends Component {

  componentDidMount() {
    const context = new AudioContext();
    loadSounds(context, {
      kick : '/sounds/kick.wav',
      clap : '/sounds/clap.wav'
    }).then((buffers) => {
      playSound(context, buffers.kick, 0);
      playSound(context, buffers.kick, 1);
      playSound(context, buffers.clap, 1);
      playSound(context, buffers.kick, 2);
      playSound(context, buffers.kick, 3);
      playSound(context, buffers.clap, 3);
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
