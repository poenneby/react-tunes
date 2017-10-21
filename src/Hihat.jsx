import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {playBuffer} from './bufferUtil';

export default class Hihat extends Component {
  componentWillReceiveProps(nextProps) {
    const gainNode = this.context.audioContext.createGain();
    gainNode.gain.value = nextProps.gain || 0.1;
    playBuffer(this.context.audioContext, gainNode, nextProps.buffers.hihat, nextProps.startTime);
  }

  render() {
    return <h1>{`<Hihat>`}</h1>;
  }
}

Hihat.contextTypes = {
  audioContext : PropTypes.object
};

