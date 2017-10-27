import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {playBuffer} from './bufferUtil';

export default class Snare extends Component {
  state = {};

  componentWillReceiveProps(nextProps) {
    const gainNode = this.context.audioContext.createGain();
    gainNode.gain.value = nextProps.gain || 1;
    playBuffer(this.context.audioContext, gainNode, nextProps.buffers.snare, nextProps.startTime, () => { this.setState({hasPlayed : true}) });
  }

  render() {
    return this.state.hasPlayed ? <h1><span role="img" aria-label="snare">👏</span></h1> : null;
  }
}

Snare.contextTypes = {
  audioContext : PropTypes.object
};

