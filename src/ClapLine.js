import React, {Component} from 'react';

import Section from './Section';
import Bar from './Bar';
import Clap from './Clap';
import Rest from './Rest';

export default class ClapLine extends Component {
  render() {
    return (
      <Section {...this.props}>
        <Bar>
          <Rest />
          <Rest />
          <Rest />
          <Rest />

          <Rest />
          <Rest />
          <Rest />
          <Rest />

          <Rest />
          <Rest />
          <Rest />
          <Rest />

          <Rest />
          <Rest />
          <Rest />
          <Rest />
        </Bar>
        <Bar>
          <Rest />
          <Rest />
          <Rest />
          <Rest />

          <Rest />
          <Rest />
          <Rest />
          <Rest />

          <Rest />
          <Rest />
          <Rest />
          <Rest />

          <Rest />
          <Rest />
          <Rest />
          <Rest />
        </Bar>
        <Bar>
          <Rest />
          <Rest />
          <Rest />
          <Rest />

          <Rest />
          <Rest />
          <Rest />
          <Rest />

          <Rest />
          <Rest />
          <Rest />
          <Rest />

          <Rest />
          <Rest />
          <Rest />
          <Rest />
        </Bar>
        <Bar>
          <Rest />
          <Rest />
          <Rest />
          <Rest />

          <Rest />
          <Rest />
          <Rest />
          <Rest />

          <Rest />
          <Clap />
          <Rest />
          <Clap />

          <Rest />
          <Clap gain={0.6} />
          <Clap gain={0.4} />
          <Clap gain={0.3} />
        </Bar>
      </Section>
    );
  }
}
