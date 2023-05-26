import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getSomethingFromDomain } from '@repro-app/domain-something';
import { IconRSSI } from './';

export default {
  component: IconRSSI,
  title: 'Components/IconRSSI',
} as ComponentMeta<typeof IconRSSI>;

// This line (and corresponding import in line 2) breaks the story
const truc = getSomethingFromDomain();

const Template: ComponentStory<typeof IconRSSI> = (args) => (
  <IconRSSI {...args} />
);
export const Optimal = Template.bind({});
Optimal.args = {};
