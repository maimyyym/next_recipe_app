import React from "react";
import { Story, Meta } from "@storybook/react";

import { Input, InputProps } from "../../atoms/elements/Input";

export default {
  title: "Components/atoms/Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const InputPrimary = Template.bind({});
InputPrimary.args = {
  type: "text",
  id: "label",
  name: "main",
  disabled: true,
  value: "",
};

export const InputSecondary = Template.bind({});
InputSecondary.args = {
  type: "text",
  id: "label",
  name: "main",
  disabled: true,
  value: "",
};
