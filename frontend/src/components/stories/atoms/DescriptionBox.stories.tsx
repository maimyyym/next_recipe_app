import React from 'react';
import { Story, Meta } from '@storybook/react';

import { DescriptionBox, DescriptionBoxProps } from '../../atoms/recipeDetail/DescriptionBox';

export default {
  title: 'Components/atoms/DescriptionBox',
  component: DescriptionBox,
} as Meta;

const Template: Story<DescriptionBoxProps> = (args) => <DescriptionBox {...args} />;

export const DescriptionBoxPrimary = Template.bind({});
DescriptionBoxPrimary.args = {
  children: 'Primary',
};

export const DescriptionBoxSecondary = Template.bind({});
DescriptionBoxSecondary.args = {
  children: 'Secondary',
};


