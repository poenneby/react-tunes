import React, { Component } from 'react';

export default class Track extends Component {
  render() {
    const {notesPerQuarter} = this.props;
    const quartersPerMinute = 60 / this.props.tempo;
    const notesPerBar = quartersPerMinute * notesPerQuarter;
    const notesPerSection = 4 * notesPerBar;
    const childrenWithProps = React.Children.map(this.props.children, (component, index) => {
      const sectionStartTime = notesPerSection * index;
      return React.cloneElement(component, {sectionStartTime, quartersPerMinute, notesPerQuarter});
    });
    return <span className="Track">Track: {childrenWithProps}</span>;
  }
}

