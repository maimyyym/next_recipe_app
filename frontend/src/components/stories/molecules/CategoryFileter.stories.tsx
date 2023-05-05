import React from 'react';
import { Story, Meta } from '@storybook/react';

import { CategoryFilter, CategoryFilterProps } from '../../molecules/CategoryFilter'

export default {
  title: 'Components/atoms/CategoryFilter',
  component: CategoryFilter,
} as Meta;

const Template: Story<CategoryFilterProps> = (args) => <CategoryFilter {...args} />;

export const CategoryFilterPrimary = Template.bind({});
CategoryFilterPrimary.args = {
  children: 'Primary',
};

export const CategoryFilterSecondary = Template.bind({});
CategoryFilterSecondary.args = {
  children: 'Secondary',
};


