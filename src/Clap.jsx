import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {playBuffer} from './bufferUtil';

export default class Clap extends Component {
  componentWillReceiveProps(nextProps) {
    const gainNode = this.context.audioContext.createGain();
    gainNode.gain.value = nextProps.gain || 1;
    playBuffer(this.context.audioContext, gainNode, nextProps.buffers.clap, nextProps.startTime);
  }

  render() {
    return <h1>Clap</h1>;
  }
}

Clap.contextTypes = {
  audioContext : PropTypes.object
};

