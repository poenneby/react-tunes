import React, { Component } from 'react';

const START_DELAY = 0.7;

export default class Track extends Component {
  render() {
    const {notesPerQuarter, tempo} = this.props;
    const quartersPerMinute = 60 / tempo;
    const notesPerBar = quartersPerMinute * notesPerQuarter;
    const notesPerSection = 4 * notesPerBar;
    const childrenWithProps = React.Children.map(this.props.children, (component, index) => {
      const sectionStartTime = START_DELAY + notesPerSection * index;
      return React.cloneElement(component, {sectionStartTime, quartersPerMinute, notesPerQuarter});
    });
    return <span className="Track">{this.props.trackName}: {childrenWithProps}</span>;
  }
}

