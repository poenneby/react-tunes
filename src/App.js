import React, { Component } from 'react';
import {loadSounds, playSound} from './bufferUtil';
import './App.css';

class Kick extends Component {

  componentWillReceiveProps(nextProps) {
    nextProps.playSound(nextProps.buffers.kick, nextProps.startTime);
  }

  render() {
    return <h1>Kick</h1>;
  }
}

class Clap extends Component {

  componentWillReceiveProps(nextProps) {
    nextProps.playSound(nextProps.buffers.clap, nextProps.startTime);
  }

  render() {
    return <h1>Clap</h1>;
  }
}

class Rest extends Component {
  render() {
    return <h1>Rest</h1>;
  }
}

class Track extends Component {
  render() {
    const tempo = 100;
    const notesPerQuarter = this.props.notesPerQuarter || 4;
    const noteOffset = 60 / tempo / notesPerQuarter;
    return (<div>
      {this.props.children.map((component, index) => {
        const startTime = index * noteOffset;
        return React.cloneElement(component, {...component.props, startTime});
      })}
      </div>);
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
        <Track notesPerQuarter={4} >
          <Kick playSound={playSound(context)} {...this.state} />
          <Rest />
          <Rest />
          <Rest />
          <Clap playSound={playSound(context)} {...this.state} />
          <Rest />
          <Rest />
          <Kick playSound={playSound(context)} {...this.state} />
          <Rest />
          <Kick playSound={playSound(context)} {...this.state} />
          <Kick playSound={playSound(context)} {...this.state} />
          <Rest />
          <Clap playSound={playSound(context)} {...this.state} />
          <Rest />
          <Rest />
          <Rest />
        </Track>
      </div>
    );
  }
}

export default App;
