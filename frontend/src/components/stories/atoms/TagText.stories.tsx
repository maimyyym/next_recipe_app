import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TagText, TagTextProps } from '../../atoms/elements/TagText';

export default {
  title: 'Components/atoms/TagText',
  component: TagText,
} as Meta;

const Template: Story<TagTextProps> = (args) => <TagText {...args} />;

export const TagTextPrimary = Template.bind({});
TagTextPrimary.args = {
  children: 'Primary',
};

export const TagTextSecondary = Template.bind({});
TagTextSecondary.args = {
  children: 'Secondary',
};


