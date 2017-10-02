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

class Hihat extends Component {
  componentWillReceiveProps(nextProps) {
    nextProps.playSound(nextProps.buffers.hihat, nextProps.startTime);
  }

  render() {
    return <h1>Hihat</h1>;
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
  componentDidMount() {
    const context = new AudioContext();
    loadSounds(context, {
      kick : '/sounds/kick.wav',
      clap : '/sounds/clap.wav',
      hihat : '/sounds/hat_c.wav'
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
        <Repeat times={4}>
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
          <Track notesPerQuarter={4} >
            <Hihat playSound={playSound(context)} {...this.state} />
            <Rest />
            <Hihat playSound={playSound(context)} {...this.state} />
            <Hihat playSound={playSound(context)} {...this.state} />
            <Hihat playSound={playSound(context)} {...this.state} />
            <Rest />
            <Hihat playSound={playSound(context)} {...this.state} />
            <Hihat playSound={playSound(context)} {...this.state} />
            <Hihat playSound={playSound(context)} {...this.state} />
            <Rest />
            <Hihat playSound={playSound(context)} {...this.state} />
            <Hihat playSound={playSound(context)} {...this.state} />
            <Hihat playSound={playSound(context)} {...this.state} />
            <Rest />
            <Hihat playSound={playSound(context)} {...this.state} />
            <Hihat playSound={playSound(context)} {...this.state} />
          </Track>
        </Repeat>
      </div>
    );
  }
}

export default App;
