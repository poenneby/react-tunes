import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {playBuffer} from './bufferUtil';

export default class Clap extends Component {
  state = {};

  componentWillReceiveProps(nextProps) {
    const {audioContext} = this.context;
    const {gain = 1, buffers, startTime} = nextProps;
    const gainNode = audioContext.createGain();
    gainNode.gain.value = gain;
    playBuffer(audioContext, gainNode, buffers.clap, startTime, () => { this.setState({hasPlayed : true}) });
  }

  render() {
    return this.state.hasPlayed ? <p className="note"><span role="img" aria-label="clap">👏</span></p> : null;
  }
}

Clap.contextTypes = {
  audioContext : PropTypes.object
};

