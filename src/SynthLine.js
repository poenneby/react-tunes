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
          <Synth note="F4" length={2} />
          <Rest />
          <Rest />
          <Rest />
          <Synth note="G#4" length={2} />
          <Rest />
          <Rest />
          <Synth note="F4" length={1.5} />
          <Rest />
          <Synth note="F4" length={1} />
          <Synth note="A#4" length={1.5} />
          <Rest />
          <Synth note="F4" length={1} />
          <Rest />
          <Synth note="D#4" length={1}/>
          <Rest />
        </Bar>
        <Bar>
          <Synth note="F4" length={2}/>
          <Rest />
          <Rest />
          <Rest />
          <Synth note="C5" length={1.5}/>
          <Rest />
          <Rest />
          <Synth note="F4" length={1.5}/>
          <Rest />
          <Synth note="F4" length={1.5}/>
          <Synth note="C#5" length={1}/>
          <Rest />
          <Synth note="C5" length={1.5}/>
          <Rest />
          <Synth note="G#4" length={1.5}/>
          <Rest />
        </Bar>
        <Bar>
          <Synth note="F4" length={1.5}/>
          <Rest />
          <Synth note="C5" length={1.5}/>
          <Rest />
          <Synth note="F5" length={1.5}/>
          <Rest />
          <Synth note="F4" length={1}/>
          <Synth note="D#4" length={1.5}/>
          <Rest />
          <Synth note="D#4" length={1}/>
          <Synth note="C4" length={1.5}/>
          <Rest />
          <Synth note="G4" length={1.5}/>
          <Rest />
          <Synth note="F4" length={6}/>
          <Rest />
        </Bar>
      </Section>
    );
  }
}
