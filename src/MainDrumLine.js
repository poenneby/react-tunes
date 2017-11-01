import React, {Component} from 'react';

import Section from './Section';
import Bar from './Bar';
import Kick from './Kick';
import Snare from './Snare';
import Rest from './Rest';

export default class DrumLine extends Component {
  render() {
    return (
      <Section {...this.props}>
        <Bar>
          <Kick />
          <Rest />
          <Rest />
          <Rest />
          <Snare />
          <Rest />
          <Rest />
          <Kick />
          <Rest />
          <Kick />
          <Kick />
          <Rest />
          <Snare />
          <Rest />
          <Rest />
          <Rest />
        </Bar>
        <Bar>
          <Kick />
          <Rest />
          <Rest />
          <Rest />
          <Snare />
          <Rest />
          <Rest />
          <Kick />
          <Rest />
          <Kick />
          <Kick />
          <Rest />
          <Snare />
          <Rest />
          <Rest />
          <Rest />
        </Bar>
        <Bar>
          <Kick />
          <Rest />
          <Rest />
          <Rest />
          <Snare />
          <Rest />
          <Rest />
          <Kick />
          <Rest />
          <Kick />
          <Kick />
          <Rest />
          <Snare />
          <Rest />
          <Rest />
          <Rest />
        </Bar>
        <Bar>
          <Kick />
          <Rest />
          <Rest />
          <Rest />
          <Snare />
          <Rest />
          <Rest />
          <Kick />
          <Rest />
          <Kick />
          <Kick />
          <Rest />
          <Snare />
          <Rest />
          <Rest />
          <Rest />
        </Bar>
      </Section>
    );
  }
}
