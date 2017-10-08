import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {loadSounds} from './bufferUtil';
import './App.css';

import Rest from './Rest.jsx';
import Kick from './Kick.jsx';
import Clap from './Clap.jsx';
import Hihat from './Hihat.jsx';
import Synth from './Synth.jsx';

class Track extends Component {
  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        ...this.props,
        times: this.props.times || 1
      })
    });
    return <div>{childrenWithProps}</div>;
  }
}

class Bar extends Component {
  render() {
    const tempo = 100;
    const notesPerQuarter = this.props.notesPerQuarter || 4;
    const quartersPerBar = 4;
    const notesPerBar = notesPerQuarter * quartersPerBar;
    const noteOffset = 60 / tempo / notesPerQuarter;
    const repeats = Array(this.props.times).fill().map((time, timeIndex) => {
      return (<div>
          {React.Children.map(this.props.children, (component, index) => {
            const startTime = (noteOffset * (notesPerBar * timeIndex)) + index * noteOffset;
            return React.cloneElement(component, {startTime});
          })}
      </div>);
    });
    return <div>{repeats.map((repeat) => <div>{repeat}</div>)}</div>;
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
          <Track notesPerQuarter={4}>
            <Bar>
              <Synth {...this.state} note="F4" />
              <Rest />
              <Rest />
              <Rest />
              <Synth {...this.state} note="G#4" />
              <Rest />
              <Rest />
              <Synth {...this.state} note="F4" />
              <Rest />
              <Synth {...this.state} note="F4" />
              <Synth {...this.state} note="A#4" />
              <Rest />
              <Synth {...this.state} note="F4" />
              <Rest />
              <Synth {...this.state} note="D#4" />
              <Rest />
            </Bar>
          </Track>
          <Track notesPerQuarter={4} >
            <Bar times={2}>
              <Kick {...this.state} />
              <Rest />
              <Rest />
              <Rest />
              <Clap {...this.state} />
              <Rest />
              <Rest />
              <Kick {...this.state} />
              <Rest />
              <Kick {...this.state} />
              <Kick {...this.state} />
              <Rest />
              <Clap {...this.state} />
              <Rest />
              <Rest />
              <Rest />
            </Bar>
          </Track>
          <Track notesPerQuarter={4} >
            <Bar times={2}>
              <Hihat {...this.state} gain={0.7} />
              <Rest />
              <Hihat {...this.state} />
              <Hihat {...this.state} />
              <Hihat {...this.state} gain={0.7} />
              <Rest />
              <Hihat {...this.state} />
              <Hihat {...this.state} />
              <Hihat {...this.state} gain={0.7} />
              <Rest />
              <Hihat {...this.state} />
              <Hihat {...this.state} />
              <Hihat {...this.state} gain={0.7} />
              <Rest />
              <Hihat {...this.state} />
              <Hihat {...this.state} />
            </Bar>
          </Track>
      </div>
    );
  }
}

App.childContextTypes = {
  audioContext : PropTypes.object
};

export default App;
