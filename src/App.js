import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {loadSounds} from './bufferUtil';
import './App.css';

import Track from './Track';
import BassLine from './BassLine';
import SynthLine from './SynthLine';
import IntroDrumLine from './IntroDrumLine';
import MainDrumLine from './MainDrumLine';
import HihatLine from './HihatLine';
import FourBarsRest from './FourBarsRest';
import ClapLine from './ClapLine';

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
      snare : '/sounds/snare.wav',
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
          <Track trackName="Synth" notesPerQuarter={4}>
            <SynthLine {...this.state} />
            <SynthLine {...this.state} />
            <FourBarsRest />
            <FourBarsRest />
            <SynthLine {...this.state} />
            <SynthLine {...this.state} />
          </Track>
          <Track trackName="Bass" notesPerQuarter={4}>
            <FourBarsRest />
            <FourBarsRest />
            <BassLine {...this.state} />
            <BassLine {...this.state} />
            <BassLine {...this.state} />
            <BassLine {...this.state} />
          </Track>
          <Track trackName="Drums" notesPerQuarter={4}>
            <FourBarsRest />
            <FourBarsRest />
            <IntroDrumLine {...this.state} />
            <IntroDrumLine {...this.state} />
            <MainDrumLine {...this.state} />
            <MainDrumLine {...this.state} />
          </Track>
          <Track trackName="Hihat" notesPerQuarter={4}>
            <FourBarsRest />
            <FourBarsRest />
            <HihatLine {...this.state} />
            <HihatLine {...this.state} />
            <HihatLine {...this.state} />
            <HihatLine {...this.state} />
          </Track>
          <Track trackName="Claps" notesPerQuarter={4}>
            <FourBarsRest />
            <FourBarsRest />
            <ClapLine {...this.state} />
            <ClapLine {...this.state} />
            <ClapLine {...this.state} />
            <ClapLine {...this.state} />
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
