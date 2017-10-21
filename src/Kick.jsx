import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {playBuffer} from './bufferUtil';

export default class Kick extends Component {
  state = {hasPlayed : false};

  componentWillReceiveProps(nextProps) {
    const gainNode = this.context.audioContext.createGain();
    gainNode.gain.value = nextProps.gain || 2;
    playBuffer(this.context.audioContext, gainNode, nextProps.buffers.kick, nextProps.startTime, () => { this.setState({hasPlayed : !this.state.hasPlayed}) });
  }

  render() {
    return this.state.hasPlayed ? <h2><span role="img" aria-label="kick">👢</span></h2> : null;
  }
}

Kick.contextTypes = {
  audioContext : PropTypes.object
};
