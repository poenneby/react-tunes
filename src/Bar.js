import React, { Component } from 'react';

export default class Bar extends Component {
  render() {
    const {
      quartersPerMinute,
      notesPerQuarter = 4,
      barStartTime,
    } = this.props;
    const noteLength = quartersPerMinute / notesPerQuarter;
    const {children, ...propsWithoutChildren} = this.props;
      return (<div className="Bar">
          {React.Children.map(this.props.children, (component, index) => {
            const startTime = (noteLength * index) + barStartTime;
            return React.cloneElement(component, {...propsWithoutChildren, startTime});
          })}
      </div>);
  }
}
