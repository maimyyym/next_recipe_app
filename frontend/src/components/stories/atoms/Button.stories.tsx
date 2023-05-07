import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "../../atoms/elements/Button";

export default {
  title: "Components/atoms/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  children: "Primary",
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  children: "Secondary",
};
