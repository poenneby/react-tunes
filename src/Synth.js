import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {freq} from 'note-parser';
import contour from 'audio-contour';
import Tuna from 'tunajs';

export default class Synth extends Component {
  state = {};

  componentWillReceiveProps(nextProps) {
    // REFACTOR!!!
    const {audioContext} = this.context;
    const {noteLength, length = 1} = nextProps;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    const tuna = new Tuna(audioContext);
    const delay = new tuna.Delay({
      feedback: 0.45,    //0 to 1+
      delayTime: 250,    //1 to 10000 milliseconds
      wetLevel: 1,    //0 to 1+
      dryLevel: 1,       //0 to 1+
      cutoff: 12050,      //cutoff frequency of the built in lowpass-filter. 20 to 22050
      bypass: 0
    });

    gain.gain.value = 0.5;
    osc.type = 'sawtooth';
    osc.detune.value = -1;
    osc.onended = () => this.setState({hasPlayed : true});
    osc.frequency.value = freq(this.props.note);
    const biquadFilter = audioContext.createBiquadFilter();
    biquadFilter.type = 'lowpass';
    biquadFilter.frequency.value = 3644;
    const env = contour(this.context.audioContext, {
      attack: 0.01,
      decay: 0.5,
      sustain: 0.15,
      release: 0.5,
    });

    env.connect(gain.gain);

    osc.connect(biquadFilter);
    biquadFilter.connect(delay);
    delay.connect(gain);
    const compressor = audioContext.createDynamicsCompressor();
    // gain.connect(audioContext.destination);
    gain.connect(compressor);
    compressor.connect(audioContext.destination);
    env.start(nextProps.startTime);
    osc.start(nextProps.startTime);
    env.stop(nextProps.startTime + (noteLength * length));
    osc.stop(nextProps.startTime + (noteLength * length));
  }

  render() {
    return this.state.hasPlayed ? <p className="note">{this.props.note}</p> : null;
  }
}

Synth.contextTypes = {
  audioContext : PropTypes.object
};

