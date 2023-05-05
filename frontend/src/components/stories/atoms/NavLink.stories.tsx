import React from 'react';
import { Story, Meta } from '@storybook/react';

import { NavLink, NavLinkProps } from '../../atoms/elements/NavLink';

export default {
  title: 'Components/atoms/NavLink',
  component: NavLink,
} as Meta;

const Template: Story<NavLinkProps> = (args) => <NavLink {...args} />;

export const NavLinkPrimary = Template.bind({});
NavLinkPrimary.args = {
  children: 'Primary',
  href: '/'
};

export const NavLinkSecondary = Template.bind({});
NavLinkSecondary.args = {
  children: 'Secondary',
  href: '/'
};


