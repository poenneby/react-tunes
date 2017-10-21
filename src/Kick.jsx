import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {playBuffer} from './bufferUtil';

export default class Kick extends Component {
  componentWillReceiveProps(nextProps) {
    const gainNode = this.context.audioContext.createGain();
    gainNode.gain.value = nextProps.gain || 2;
    playBuffer(this.context.audioContext, gainNode, nextProps.buffers.kick, nextProps.startTime);
  }

  render() {
    return <h1><span role="img" aria-label="kick">👢</span></h1>;
  }
}

Kick.contextTypes = {
  audioContext : PropTypes.object
};
