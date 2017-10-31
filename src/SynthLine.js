import React, {Component} from 'react';

import Section from './Section';
import Bar from './Bar';
import Synth from './Synth';
import Rest from './Rest';

export default class SynthLine extends Component {
  render() {
    return (
      <Section {...this.props}>
        <Bar>
          <Synth note="F4" />
          <Rest />
          <Rest />
          <Rest />
          <Synth note="G#4" />
          <Rest />
          <Rest />
          <Synth note="F4" />
          <Rest />
          <Synth note="F4" />
          <Synth note="A#4" />
          <Rest />
          <Synth note="F4" />
          <Rest />
          <Synth note="D#4" />
          <Rest />
        </Bar>
        <Bar>
          <Synth note="F4" />
          <Rest />
          <Rest />
          <Rest />
          <Synth note="C5" />
          <Rest />
          <Rest />
          <Synth note="F4" />
          <Rest />
          <Synth note="F4" />
          <Synth note="C#5" />
          <Rest />
          <Synth note="C5" />
          <Rest />
          <Synth note="G#4" />
          <Rest />
        </Bar>
        <Bar>
          <Synth note="F4" />
          <Rest />
          <Synth note="C5" />
          <Rest />
          <Synth note="F5" />
          <Rest />
          <Synth note="F4" />
          <Synth note="D#4" />
          <Rest />
          <Synth note="D#4" />
          <Synth note="C4" />
          <Rest />
          <Synth note="G4" />
          <Rest />
          <Synth note="F4" />
          <Rest />
        </Bar>
      </Section>
    );
  }
}
