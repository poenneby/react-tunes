import React, {Component} from 'react';

import Section from './Section';
import Bar from './Bar';
import MoogBass from './MoogBass';
import Rest from './Rest';

export default class BassLine extends Component {
  render() {
    return (
      <Section {...this.props}>
        <Bar>
          <MoogBass note="F2" />
          <Rest />
          <Rest />
          <Rest />
          <MoogBass note="F3" />
          <Rest />
          <Rest />
          <MoogBass note="D#2" />
          <Rest />
          <MoogBass  note="D#3" />
          <MoogBass note="C2" />
          <Rest />
          <MoogBass note="C3" />
          <Rest />
          <MoogBass note="D#2" />
          <Rest />
        </Bar>
        <Bar>
          <MoogBass note="F2" />
          <Rest />
          <Rest />
          <Rest />
          <MoogBass note="F3" />
          <Rest />
          <Rest />
          <Rest />
          <Rest />
          <MoogBass note="C2" />
          <MoogBass note="C3" />
          <Rest />
          <MoogBass note="D#3" />
          <Rest />
          <MoogBass note="F3" />
          <Rest />
        </Bar>
        <Bar>
          <MoogBass note="C#2" />
          <Rest />
          <Rest />
          <Rest />
          <MoogBass note="C#3" />
          <Rest />
          <Rest />
          <MoogBass note="D#2" />
          <Rest />
          <MoogBass note="D#3" />
          <MoogBass note="C2" />
          <Rest />
          <MoogBass note="C3" />
          <Rest />
          <MoogBass note="D#2" />
          <Rest />
        </Bar>
        <Bar>
          <MoogBass note="F3" />
          <Rest />
          <Rest />
          <Rest />
          <Rest />
          <Rest />
          <Rest />
          <Rest />
          <Rest />
          <MoogBass note="D#3" />
          <MoogBass note="C3" />
          <Rest />
          <MoogBass note="A#2" />
          <Rest />
          <MoogBass note="G#2" />
          <Rest />
        </Bar>
      </Section>
    );
  }
}
