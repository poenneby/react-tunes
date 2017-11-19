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
    return this.state.hasPlayed ? <p className="note" style={{position: 'relative', bottom: this.props.gain + 'em'}}><span role="img" aria-label="hihat">🎩</span></p> : null;
  }
}

Hihat.contextTypes = {
  audioContext : PropTypes.object
};

