import React from 'react';
import { Story, Meta } from '@storybook/react';

import { RecipeCard, RecipeCardProps } from '../../molecules/RecipeCard';

export default {
  title: 'Components/atoms/RecipeCard',
  component: RecipeCard,
} as Meta;

const Template: Story<RecipeCardProps> = (args) => <RecipeCard {...args} />;

export const RecipeCardPrimary = Template.bind({});
RecipeCardPrimary.args = {
  children: 'Primary',
  alt: 'test',
  title: 'test',
  time: '15分',
};

export const RecipeCardSecondary = Template.bind({});
RecipeCardSecondary.args = {
  children: 'Secondary',
  alt: 'test',
  title: 'test',
  time: '15分',
};


