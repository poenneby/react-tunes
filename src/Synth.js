import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {freq} from 'note-parser';
import Tuna from 'tunajs';

export default class Synth extends Component {
  state = {};

  componentWillReceiveProps(nextProps) {
    const {audioContext} = this.context;
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
    osc.onended = () => this.setState({hasPlayed : true});
    osc.frequency.value = freq(this.props.note);
    gain.connect(delay);
    osc.connect(gain);
    delay.connect(audioContext.destination);
    osc.start(nextProps.startTime);
    osc.stop(nextProps.startTime + 0.23);
  }

  render() {
    return this.state.hasPlayed ? <h2>{this.props.note}</h2> : null;
  }
}

Synth.contextTypes = {
  audioContext : PropTypes.object
};

