import React from "react";
import { Story, Meta } from "@storybook/react";

import { Text, TextProps } from "../../atoms/elements/Text";

export default {
  title: "Components/atoms/Text",
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const TextPrimary = Template.bind({});
TextPrimary.args = {
  children: "Primary",
};

export const TextSecondary = Template.bind({});
TextSecondary.args = {
  children: "Secondary",
};
