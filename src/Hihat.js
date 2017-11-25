import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {playBuffer} from './bufferUtil';

export default class Hihat extends Component {
  state = {};

  componentWillReceiveProps(nextProps) {
    const {audioContext} = this.context;
    const {gain = 0.1, buffers, startTime} = nextProps;
    const gainNode = audioContext.createGain();
    gainNode.gain.value = gain;
    playBuffer(audioContext, gainNode, buffers.hihat, startTime, () => {this.setState({hasPlayed : true})});
  }

  render() {
    return this.state.hasPlayed ? <p className="note" style={{position: 'relative', bottom: this.props.gain + 'em'}}><span role="img" aria-label="hihat">🎩</span></p> : null;
  }
}

Hihat.contextTypes = {
  audioContext : PropTypes.object
};

