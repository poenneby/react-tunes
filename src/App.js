import React, { Component } from 'react';
import {loadSounds, playSound} from './bufferUtil';
import './App.css';

class App extends Component {

  componentDidMount() {
    const context = new AudioContext();
    loadSounds(context, this, {
      kick : '/sounds/kick.wav',
      clap : '/sounds/clap.wav'
    }, () => {
      playSound(context, this.kick, 0);
      playSound(context, this.kick, 1);
      playSound(context, this.clap, 1);
      playSound(context, this.kick, 2);
      playSound(context, this.kick, 3);
      playSound(context, this.clap, 3);
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
