import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {freq} from 'note-parser';

export default class Synth extends Component {
  componentWillReceiveProps(nextProps) {
    const {audioContext} = this.context;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    gain.gain.value = 0.5;
    osc.type = 'sawtooth';
    osc.frequency.value = freq(this.props.note);
    gain.connect(audioContext.destination);
    const panner = audioContext.createStereoPanner();
    panner.pan.value = 50;
    panner.connect(gain);
    osc.connect(panner);
    osc.start(nextProps.startTime);
    osc.stop(nextProps.startTime + 0.23);
  }

  render() {
    return <h1>Synth</h1>;
  }
}

Synth.contextTypes = {
  audioContext : PropTypes.object
};

