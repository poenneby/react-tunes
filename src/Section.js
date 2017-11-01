import React, {Component} from "react";

export default class Section extends Component {
  render() {
    const {
      quartersPerMinute,
      notesPerQuarter = 4,
      sectionStartTime,
    } = this.props;
    const notesPerBar = quartersPerMinute * notesPerQuarter;
    const {children, ...propsWithoutChildren} = this.props;
    return (<div className="Section">
      {React.Children.map(this.props.children, (component, index) => {
        const barStartTime = (notesPerBar * index) + sectionStartTime;
        return React.cloneElement(component, {...propsWithoutChildren, barStartTime, notesPerQuarter, quartersPerMinute});
      })}
      </div>);
  }
}
