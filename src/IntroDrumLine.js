import React, {Component} from 'react';

import Section from './Section';
import Bar from './Bar';
import Kick from './Kick';
import Rest from './Rest';

export default class IntroDrums extends Component {
  render() {
    return (
      <Section {...this.props}>
        <Bar>
          <Kick />
          <Rest />
          <Rest />
          <Rest />

          <Rest />
          <Rest />
          <Rest />
          <Kick />

          <Rest />
          <Kick />
          <Kick />
          <Rest />

          <Rest />
          <Rest />
          <Kick />
          <Rest />
        </Bar>
        <Bar>
          <Kick />
          <Rest />
          <Rest />
          <Rest />

          <Rest />
          <Rest />
          <Rest />
          <Rest />

          <Rest />
          <Kick />
          <Kick />
          <Rest />

          <Kick />
          <Rest />
          <Kick />
          <Rest />
        </Bar>
        <Bar>
          <Kick />
          <Rest />
          <Rest />
          <Rest />

          <Rest />
          <Rest />
          <Rest />
          <Kick />

          <Rest />
          <Kick />
          <Kick />
          <Rest />

          <Rest />
          <Rest />
          <Kick />
          <Rest />
        </Bar>
        <Bar>
          <Kick />
          <Rest />
          <Rest />
          <Rest />

          <Rest />
          <Rest />
          <Rest />
          <Rest />

          <Rest />
          <Kick />
          <Kick />
          <Rest />

          <Kick />
          <Rest />
          <Kick />
          <Rest />
        </Bar>
      </Section>
    );
  }
}
