import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {playBuffer} from './bufferUtil';

export default class Hihat extends Component {
  state = {};

  componentWillReceiveProps(nextProps) {
    const gainNode = this.context.audioContext.createGain();
    gainNode.gain.value = nextProps.gain || 0.1;
    playBuffer(this.context.audioContext, gainNode, nextProps.buffers.hihat, nextProps.startTime, () => {this.setState({hasPlayed : true})});
  }

  render() {
    return this.state.hasPlayed ? <h2><span role="img" aria-label="hihat">🎩</span></h2> : null;
  }
}

Hihat.contextTypes = {
  audioContext : PropTypes.object
};

