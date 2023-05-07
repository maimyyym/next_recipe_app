import React from "react";
import { Story, Meta } from "@storybook/react";

import { RecipeTitle, RecipeTitleProps } from "../../atoms/recipes/RecipeTitle";

export default {
  title: "Components/atoms/RecipeTitle",
  component: RecipeTitle,
} as Meta;

const Template: Story<RecipeTitleProps> = (args) => <RecipeTitle {...args} />;

export const RecipeTitlePrimary = Template.bind({});
RecipeTitlePrimary.args = {
  children: "Primary",
};

export const RecipeTitleSecondary = Template.bind({});
RecipeTitleSecondary.args = {
  children: "Secondary",
};
