import React, {Component} from 'react';

import Section from './Section';
import Bar from './Bar';
import Hihat from './Hihat';

export default class IntroDrums extends Component {
  render() {
    return (
      <Section {...this.props}>
        <Bar>
          <Hihat gain={0.6} />
          <Hihat />
          <Hihat />
          <Hihat />

          <Hihat />
          <Hihat />
          <Hihat gain={0.6} />
          <Hihat />

          <Hihat />
          <Hihat />
          <Hihat gain={0.6} />
          <Hihat />

          <Hihat gain={0.6} />
          <Hihat />
          <Hihat />
          <Hihat />
        </Bar>
        <Bar>
          <Hihat />
          <Hihat />
          <Hihat gain={0.6} />
          <Hihat />

          <Hihat />
          <Hihat />
          <Hihat />
          <Hihat />

          <Hihat gain={0.6} />
          <Hihat />
          <Hihat />
          <Hihat />

          <Hihat gain={0.6} />
          <Hihat />
          <Hihat />
          <Hihat />
        </Bar>
        <Bar>
          <Hihat gain={0.6} />
          <Hihat />
          <Hihat />
          <Hihat />

          <Hihat />
          <Hihat />
          <Hihat gain={0.6} />
          <Hihat />

          <Hihat />
          <Hihat />
          <Hihat gain={0.6} />
          <Hihat />

          <Hihat gain={0.6} />
          <Hihat />
          <Hihat />
          <Hihat />
        </Bar>
        <Bar>
          <Hihat />
          <Hihat />
          <Hihat gain={0.6} />
          <Hihat />

          <Hihat />
          <Hihat />
          <Hihat />
          <Hihat />

          <Hihat gain={0.6} />
          <Hihat />
          <Hihat />
          <Hihat />

          <Hihat gain={0.6} />
          <Hihat />
          <Hihat />
          <Hihat />
        </Bar>
      </Section>
    );
  }
}
