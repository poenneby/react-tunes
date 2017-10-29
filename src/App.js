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
    const notesPerSection = 4 * notesPerBar;
    const childrenWithProps = React.Children.map(this.props.children, (component, index) => {
      const sectionStartTime = notesPerSection * index;
      return React.cloneElement(component, {sectionStartTime, quartersPerMinute, notesPerQuarter});
    });
    return <span className="Track">Track: {childrenWithProps}</span>;
  }
}

class Section extends Component {
  render() {
    const {
      quartersPerMinute,
      notesPerQuarter = 4,
      sectionStartTime,
    } = this.props;
    const notesPerBar = quartersPerMinute * notesPerQuarter;
    return (<div className="Section">
      {React.Children.map(this.props.children, (component, index) => {
        const barStartTime = (notesPerBar * index) + sectionStartTime;
        return React.cloneElement(component, {barStartTime, notesPerQuarter, quartersPerMinute});
      })}
      </div>);
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

class BassLine extends Component {
  render() {
    return (
      <Section {...this.props}>
        <Bar>
          <MoogBass note="F2" />
          <Rest />
          <Rest />
          <Rest />
          <MoogBass note="F3" />
          <Rest />
          <Rest />
          <MoogBass note="D#2" />
          <Rest />
          <MoogBass  note="D#3" />
          <MoogBass note="C2" />
          <Rest />
          <MoogBass note="C3" />
          <Rest />
          <MoogBass note="D#2" />
          <Rest />
        </Bar>
        <Bar>
          <MoogBass note="F2" />
          <Rest />
          <Rest />
          <Rest />
          <MoogBass note="F3" />
          <Rest />
          <Rest />
          <Rest />
          <Rest />
          <MoogBass note="C2" />
          <MoogBass note="C3" />
          <Rest />
          <MoogBass note="D#3" />
          <Rest />
          <MoogBass note="F3" />
          <Rest />
        </Bar>
        <Bar>
          <MoogBass note="C#2" />
          <Rest />
          <Rest />
          <Rest />
          <MoogBass note="C#3" />
          <Rest />
          <Rest />
          <MoogBass note="D#2" />
          <Rest />
          <MoogBass note="D#3" />
          <MoogBass note="C2" />
          <Rest />
          <MoogBass note="C3" />
          <Rest />
          <MoogBass note="D#2" />
          <Rest />
        </Bar>
        <Bar>
          <MoogBass note="F3" />
          <Rest />
          <Rest />
          <Rest />
          <Rest />
          <Rest />
          <Rest />
          <Rest />
          <Rest />
          <MoogBass note="D#3" />
          <MoogBass note="C3" />
          <Rest />
          <MoogBass note="A#2" />
          <Rest />
          <MoogBass note="G#2" />
          <Rest />
        </Bar>
      </Section>
    );
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
            <BassLine {...this.state} />
            <BassLine {...this.state} />
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
