import { Story } from "@storybook/react";
import React from "react";
import Home from "../../pages/index";

export default {
  title: "Pages/Home",
  component: Home,
};

const Template: Story = () => <Home />;

export const Primary = Template.bind({});
