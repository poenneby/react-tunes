import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {freq} from 'note-parser';

export default class Synth extends Component {
  state = {};

  componentWillReceiveProps(nextProps) {
    const {audioContext} = this.context;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    gain.gain.value = 0.5;
    osc.type = 'sawtooth';
    osc.frequency.value = freq(this.props.note);
    gain.connect(audioContext.destination);
    osc.connect(gain);
    osc.onended = () => this.setState({hasPlayed : true});
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

