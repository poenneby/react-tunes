import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {playBuffer} from './bufferUtil';

export default class Snare extends Component {
  state = {};

  componentWillReceiveProps(nextProps) {
    const {audioContext} = this.context;
    const {buffers, gain = 2, startTime} = nextProps;
    const gainNode = audioContext.createGain();
    gainNode.gain.value = gain;
    playBuffer(audioContext, gainNode, buffers.snare, startTime, () => { this.setState({hasPlayed : true}) });
  }

  render() {
    return this.state.hasPlayed ? <h1><span role="img" aria-label="snare">🥁</span></h1> : null;
  }
}

Snare.contextTypes = {
  audioContext : PropTypes.object
};

