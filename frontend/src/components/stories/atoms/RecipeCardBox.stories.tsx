import React from 'react';
import { Story, Meta } from '@storybook/react';

import { RecipeCardBox, RecipeCardBoxProps } from '../../atoms/recipes/RecipeCardBox';

export default {
  title: 'Components/atoms/RecipeCardBox',
  component: RecipeCardBox,
} as Meta;

const Template: Story<RecipeCardBoxProps> = (args) => <RecipeCardBox {...args} />;

export const RecipeCardBoxPrimary = Template.bind({});
RecipeCardBoxPrimary.args = {
  children: 'Primary',
};

export const RecipeCardBoxSecondary = Template.bind({});
RecipeCardBoxSecondary.args = {
  children: 'Secondary',
};


