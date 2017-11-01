import React, {Component} from 'react';

import Section from './Section';
import Bar from './Bar';
import Rest from './Rest';

export default class FourBarsRest extends Component {
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
          <Rest />
          <Rest />
          <Rest />

          <Rest />
          <Rest />
          <Rest />
          <Rest />
        </Bar>
      </Section>
    );
  }
}
