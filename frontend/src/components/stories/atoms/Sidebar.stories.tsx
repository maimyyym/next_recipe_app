import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Sidebar, SidebarProps } from '../../atoms/Sidebar';

export default {
  title: 'Components/atoms/Sidebar',
  component: Sidebar,
} as Meta;

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const SidebarPrimary = Template.bind({});
SidebarPrimary.args = {
  children: 'Primary',
};

export const SidebarSecondary = Template.bind({});
SidebarSecondary.args = {
  children: 'Secondary',
};


