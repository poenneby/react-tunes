import React, {Component} from 'react';

export default class Section extends Component {
  render() {
    const {
      quartersPerMinute,
      notesPerQuarter = 4,
      sectionStartTime,
      children,
      ...rest
    } = this.props;
    const notesPerBar = quartersPerMinute * notesPerQuarter;
    return (<div className="Section">
      {React.Children.map(this.props.children, (component, index) => {
        const barStartTime = (notesPerBar * index) + sectionStartTime;
        return React.cloneElement(component, {...rest, barStartTime, notesPerQuarter, quartersPerMinute});
      })}
      </div>);
  }
}
