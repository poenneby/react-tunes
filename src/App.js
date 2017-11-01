import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {loadSounds} from './bufferUtil';
import './App.css';

import Track from './Track';
import BassLine from './BassLine';
import SynthLine from './SynthLine';
import DrumLine from './DrumLine';

class Song extends Component {
  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        ...child.props,
        tempo: this.props.tempo || 100
      })
    });
    return <div>{childrenWithProps}</div>;
  }
}


class App extends Component {
  constructor() {
    super();
    this.audioContext = new AudioContext();
  }

  getChildContext() {
    return {audioContext : this.audioContext};
  }

  componentDidMount() {
    loadSounds(this.audioContext, {
      kick : '/sounds/kick.wav',
      clap : '/sounds/clap.wav',
      hihat : '/sounds/hat_c.wav'
    }).then((buffers) => {
      this.setState({buffers});
    });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Tunes</h2>
        </div>
        <Song tempo={110}>
          <Track notesPerQuarter={4}>
            <SynthLine {...this.state} />
            <SynthLine {...this.state} />
          </Track>
          <Track notesPerQuarter={4}>
            <BassLine {...this.state} />
            <BassLine {...this.state} />
          </Track>
          <Track notesPerQuarter={4}>
            <DrumLine {...this.state} />
            <DrumLine {...this.state} />
          </Track>
        </Song>
      </div>
    );
  }
}

App.childContextTypes = {
  audioContext : PropTypes.object
};

export default App;
