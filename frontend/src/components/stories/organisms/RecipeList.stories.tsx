import React from 'react';
import { Story, Meta } from '@storybook/react';

import { RecipeList, RecipeListProps } from '../../organisms/RecipeList';

export default {
  title: 'Components/atoms/RecipeList',
  component: RecipeList,
} as Meta;

const Template: Story<RecipeListProps> = (args) => <RecipeList {...args} />;

export const RecipeListPrimary = Template.bind({});
RecipeListPrimary.args = {
  children: 'Primary',
};

export const RecipeListSecondary = Template.bind({});
RecipeListSecondary.args = {
  children: 'Secondary',
};


