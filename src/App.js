import React, { Component } from 'react';
import {loadSounds, playSound} from './bufferUtil';
import './App.css';

class Kick extends Component {

  componentWillReceiveProps(nextProps) {
    nextProps.playSound(nextProps.buffers.kick, 0);
  }

  render() {
    return <h1>Kick</h1>;
  }
}

class Clap extends Component {

  componentWillReceiveProps(nextProps) {
    nextProps.playSound(nextProps.buffers.clap, 1);
  }

  render() {
    return <h1>Clap</h1>;
  }
}

class App extends Component {

  componentDidMount() {
    const context = new AudioContext();
    loadSounds(context, {
      kick : '/sounds/kick.wav',
      clap : '/sounds/clap.wav'
    }).then((buffers) => {
      this.setState({buffers});
    });
  }

  render() {
    const context = new AudioContext();
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Tunes</h2>
        </div>
        <p className="App-intro">
          <Kick playSound={playSound(context)} {...this.state} />
          <Clap playSound={playSound(context)} {...this.state} />
        </p>
      </div>
    );
  }
}

export default App;
