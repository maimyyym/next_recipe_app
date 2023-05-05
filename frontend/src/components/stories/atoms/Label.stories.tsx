import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Label, LabelProps } from '../../atoms/elements/Label';

export default {
  title: 'Components/atoms/Label',
  component: Label,
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const LabelPrimary = Template.bind({});
LabelPrimary.args = {
  htmlFor: 'test',
  children: 'Primary',
};

export const LabelSecondary = Template.bind({});
LabelSecondary.args = {
  children: 'Secondary',
  htmlFor: 'test',
};


