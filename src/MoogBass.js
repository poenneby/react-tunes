import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {freq} from 'note-parser';
import contour from 'audio-contour';

export default class MoogBass extends Component {
  state = {};

  componentWillReceiveProps(nextProps) {
    const {audioContext} = this.context;

    const masterVolume = audioContext.createGain();
    masterVolume.gain.value = 0.5;
    masterVolume.connect(audioContext.destination);

    const amplitudeGain = audioContext.createGain();
    amplitudeGain.gain.value = 0;
    amplitudeGain.connect(masterVolume);

    const env = contour(audioContext,
      {
        attack: 0.01,
        decay: 0.2,
        sustain: 0.2,
        release: 0.2,
      }
    );

    env.connect(amplitudeGain.gain);

    const osc1 = audioContext.createOscillator();
    osc1.type = 'sawtooth';
    osc1.detune.value = -1;
    osc1.onended = () => this.setState({hasPlayed : true});
    osc1.frequency.value = freq(this.props.note);
    osc1.connect(amplitudeGain);

    const osc2 = audioContext.createOscillator();
    osc2.type = 'sine';
    osc2.detune.value = -10;
    osc2.frequency.value = freq(this.props.note);
    osc2.connect(amplitudeGain);

    osc1.start(nextProps.startTime);
    osc2.start(nextProps.startTime);
    env.start(nextProps.startTime);
    const finish = env.stop(nextProps.startTime + 0.23);
    osc1.stop(finish);
    osc2.stop(finish);

  }

  render() {
    return this.state.hasPlayed ? <h2>{this.props.note}</h2> : null;
  }
}

MoogBass.contextTypes = {
  audioContext : PropTypes.object
};

