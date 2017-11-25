import React, {Component} from 'react';

export default class Song extends Component {
  render() {
    const {children, ...propsWithoutChildren} = this.props;
    return React.Children.map(this.props.children, (child) => (
      React.cloneElement(child, {...propsWithoutChildren})
    ));
  }
}
