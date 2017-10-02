import React, { Component } from 'react';
import PropTypes from "prop-types";
import {loadSounds, playSound} from './bufferUtil';
import './App.css';

class Kick extends Component {
  componentWillReceiveProps(nextProps) {
    playSound(this.context.audioContext, nextProps.buffers.kick, nextProps.startTime);
  }

  render() {
    return <h1>Kick</h1>;
  }
}

Kick.contextTypes = {
  audioContext : PropTypes.object
};

class Clap extends Component {
  componentWillReceiveProps(nextProps) {
    playSound(this.context.audioContext, nextProps.buffers.clap, nextProps.startTime);
  }

  render() {
    return <h1>Clap</h1>;
  }
}

Clap.contextTypes = {
  audioContext : PropTypes.object
};

class Hihat extends Component {
  componentWillReceiveProps(nextProps) {
    playSound(this.context.audioContext, nextProps.buffers.hihat, nextProps.startTime);
  }

  render() {
    return <h1>Hihat</h1>;
  }
}

Hihat.contextTypes = {
  audioContext : PropTypes.object
};

class Rest extends Component {
  render() {
    return <h1>Rest</h1>;
  }
}

class Track extends Component {
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

class Repeat extends Component {
  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        times: this.props.times || 1
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
        <Repeat times={4}>
          <Track notesPerQuarter={4} >
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
          </Track>
          <Track notesPerQuarter={4} >
            <Hihat {...this.state} />
            <Rest />
            <Hihat {...this.state} />
            <Hihat {...this.state} />
            <Hihat {...this.state} />
            <Rest />
            <Hihat {...this.state} />
            <Hihat {...this.state} />
            <Hihat {...this.state} />
            <Rest />
            <Hihat {...this.state} />
            <Hihat {...this.state} />
            <Hihat {...this.state} />
            <Rest />
            <Hihat {...this.state} />
            <Hihat {...this.state} />
          </Track>
        </Repeat>
      </div>
    );
  }
}

App.childContextTypes = {
  audioContext : PropTypes.object
};

export default App;
