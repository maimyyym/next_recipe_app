import React from 'react';
import { Story, Meta } from '@storybook/react';

import { RecipeDetail, RecipeDetailProps } from '../../organisms/RecipeDetail'

export default {
  title: 'Components/atoms/RecipeDetail',
  component: RecipeDetail,
} as Meta;

const Template: Story<RecipeDetailProps> = (args) => <RecipeDetail {...args} />;

export const RecipeDetailPrimary = Template.bind({});
RecipeDetailPrimary.args = {
    alt: 'test',
    title: '鶏の照り焼き',
    children: 'test',
    ingredient: 'testtest',
    description: 'testtest'

};

export const RecipeDetailSecondary = Template.bind({});
RecipeDetailSecondary.args = {
    alt: 'test',
    title: '鶏の照り焼き',
    children: 'test',
    ingredient: 'testtest',
    description: 'testtest'
};


