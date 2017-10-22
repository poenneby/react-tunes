import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {loadSounds} from './bufferUtil';
import './App.css';

import Rest from './Rest.jsx';
import Kick from './Kick.jsx';
import Clap from './Clap.jsx';
import Hihat from './Hihat.jsx';
import Synth from './Synth.jsx';
import MoogBass from './MoogBass.jsx';

const ONE_SECOND = 1;

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

class Track extends Component {
  render() {
    const {notesPerQuarter} = this.props;
    const quartersPerMinute = 60 / this.props.tempo;
    const notesPerBar = quartersPerMinute * notesPerQuarter;
    const childrenWithProps = React.Children.map(this.props.children, (component, index) => {
      const barOffset = ONE_SECOND + notesPerBar * index;
      return React.cloneElement(component, {barStartTime : barOffset, quartersPerMinute});
    });
    return <span className="Track">Track: {childrenWithProps}</span>;
  }
}

class Bar extends Component {
  render() {
    const {
      quartersPerMinute,
      notesPerQuarter = 4,
      barStartTime,
    } = this.props;
    const noteLength = quartersPerMinute / notesPerQuarter;
      return (<div className="Bar">
          {React.Children.map(this.props.children, (component, index) => {
            const startTime = (noteLength * index) + barStartTime;
            return React.cloneElement(component, {startTime});
          })}
      </div>);
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
            <Bar>
              <MoogBass {...this.state} note="F2" />
              <Rest />
              <Rest />
              <Rest />
              <MoogBass {...this.state} note="F3" />
              <Rest />
              <Rest />
              <MoogBass {...this.state} note="D#2" />
              <Rest />
              <MoogBass {...this.state} note="D#3" />
              <MoogBass {...this.state} note="C2" />
              <Rest />
              <MoogBass {...this.state} note="C3" />
              <Rest />
              <MoogBass {...this.state} note="D#2" />
              <Rest />
            </Bar>
            <Bar>
              <MoogBass {...this.state} note="F2" />
              <Rest />
              <Rest />
              <Rest />
              <MoogBass {...this.state} note="F3" />
              <Rest />
              <Rest />
              <Rest />
              <Rest />
              <MoogBass {...this.state} note="C2" />
              <MoogBass {...this.state} note="C3" />
              <Rest />
              <MoogBass {...this.state} note="D#3" />
              <Rest />
              <MoogBass {...this.state} note="F3" />
              <Rest />
            </Bar>
            <Bar>
              <MoogBass {...this.state} note="C#2" />
              <Rest />
              <Rest />
              <Rest />
              <MoogBass {...this.state} note="C#3" />
              <Rest />
              <Rest />
              <MoogBass {...this.state} note="D#2" />
              <Rest />
              <MoogBass {...this.state} note="D#3" />
              <MoogBass {...this.state} note="C2" />
              <Rest />
              <MoogBass {...this.state} note="C3" />
              <Rest />
              <MoogBass {...this.state} note="D#2" />
              <Rest />
            </Bar>
            <Bar>
              <MoogBass {...this.state} note="F3" />
              <Rest />
              <Rest />
              <Rest />
              <Rest />
              <Rest />
              <Rest />
              <Rest />
              <Rest />
              <MoogBass {...this.state} note="D#3" />
              <MoogBass {...this.state} note="C3" />
              <Rest />
              <MoogBass {...this.state} note="A#2" />
              <Rest />
              <MoogBass {...this.state} note="G#2" />
              <Rest />
            </Bar>
          </Track>
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
            <Bar>
              <Synth {...this.state} note="F4" />
              <Rest />
              <Rest />
              <Rest />
              <Synth {...this.state} note="C5" />
              <Rest />
              <Rest />
              <Synth {...this.state} note="F4" />
              <Rest />
              <Synth {...this.state} note="F4" />
              <Synth {...this.state} note="C#5" />
              <Rest />
              <Synth {...this.state} note="C5" />
              <Rest />
              <Synth {...this.state} note="G#4" />
              <Rest />
            </Bar>
            <Bar>
              <Synth {...this.state} note="F4" />
              <Rest />
              <Synth {...this.state} note="C5" />
              <Rest />
              <Synth {...this.state} note="F5" />
              <Rest />
              <Synth {...this.state} note="F4" />
              <Synth {...this.state} note="D#4" />
              <Rest />
              <Synth {...this.state} note="D#4" />
              <Synth {...this.state} note="C4" />
              <Rest />
              <Synth {...this.state} note="G4" />
              <Rest />
              <Synth {...this.state} note="F4" />
              <Rest />
            </Bar>
          </Track>
          <Track quartersPerBar={4} notesPerQuarter={4}>
            <Bar>
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
            <Bar>
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
            <Bar>
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
            <Bar>
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
          <Track quartersPerBar={4} notesPerQuarter={4}>
            <Bar>
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
            <Bar>
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
            <Bar>
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
            <Bar>
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
        </Song>
      </div>
    );
  }
}

App.childContextTypes = {
  audioContext : PropTypes.object
};

export default App;
