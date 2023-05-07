import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  IngredientBox,
  IngredientBoxProps,
} from "../../atoms/recipeDetail/IngredientBox";

export default {
  title: "Components/atoms/IngredientBox",
  component: IngredientBox,
} as Meta;

const Template: Story<IngredientBoxProps> = (args) => (
  <IngredientBox {...args} />
);

export const IngredientBoxPrimary = Template.bind({});
IngredientBoxPrimary.args = {
  children: "Primary",
};

export const IngredientBoxSecondary = Template.bind({});
IngredientBoxSecondary.args = {
  children: "Secondary",
};
