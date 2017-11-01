import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {playBuffer} from './bufferUtil';

export default class Clap extends Component {
  state = {};

  componentWillReceiveProps(nextProps) {
    const gainNode = this.context.audioContext.createGain();
    gainNode.gain.value = nextProps.gain || 1;
    playBuffer(this.context.audioContext, gainNode, nextProps.buffers.clap, nextProps.startTime, () => { this.setState({hasPlayed : true}) });
  }

  render() {
    return this.state.hasPlayed ? <p className="note"><span role="img" aria-label="clap">👏</span></p> : null;
  }
}

Clap.contextTypes = {
  audioContext : PropTypes.object
};

