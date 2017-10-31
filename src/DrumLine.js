import React, {Component} from 'react';

import Section from './Section';
import Bar from './Bar';
import Kick from './Kick';
import Clap from './Clap';
import Rest from './Rest';

export default class DrumLine extends Component {
  render() {
    return (
      <Section {...this.props}>
        <Bar>
          <Kick {...this.props} />
          <Rest />
          <Rest />
          <Rest />
          <Clap />
          <Rest />
          <Rest />
          <Kick />
          <Rest />
          <Kick />
          <Kick />
          <Rest />
          <Clap />
          <Rest />
          <Rest />
          <Rest />
        </Bar>
        <Bar>
          <Kick />
          <Rest />
          <Rest />
          <Rest />
          <Clap />
          <Rest />
          <Rest />
          <Kick />
          <Rest />
          <Kick />
          <Kick />
          <Rest />
          <Clap />
          <Rest />
          <Rest />
          <Rest />
        </Bar>
        <Bar>
          <Kick />
          <Rest />
          <Rest />
          <Rest />
          <Clap />
          <Rest />
          <Rest />
          <Kick />
          <Rest />
          <Kick />
          <Kick />
          <Rest />
          <Clap />
          <Rest />
          <Rest />
          <Rest />
        </Bar>
        <Bar>
          <Kick />
          <Rest />
          <Rest />
          <Rest />
          <Clap />
          <Rest />
          <Rest />
          <Kick />
          <Rest />
          <Kick />
          <Kick />
          <Rest />
          <Clap />
          <Rest />
          <Rest />
          <Rest />
        </Bar>
      </Section>
    );
  }
}
