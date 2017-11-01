import React, { Component } from 'react';

export default class Rest extends Component {
  state = {};

  componentWillReceiveProps(nextProps) {
    setTimeout(() => this.setState({hasPlayed : true}), nextProps.startTime * 1000);
  }
  render() {
    return this.state.hasPlayed ? <p className="note"><span role="img" aria-label="rest">＿</span></p> : null;
  }
}
