import { Meta, Story } from "@storybook/react";
import React from "react";
import ButtonWithBackgroundColor, { Props } from "../../components/ButtonWithBackgroundColor";

export default {
  title: "Parts/Button",
  component: ButtonWithBackgroundColor,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<Props> = (args) => <ButtonWithBackgroundColor {...args} />;

export const Yellow = Template.bind({});
Yellow.args = {
  backgroundColor: "yellow",
  children: "きいろ",
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "green",
  children: "みどり",
};

export const Default = Template.bind({});
Default.args = {
  children: "デフォルト",
};
