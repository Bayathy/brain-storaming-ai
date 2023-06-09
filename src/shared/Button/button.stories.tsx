// Button.stories.ts|tsx

import { userEvent, within } from "@storybook/testing-library";

import { Button } from "./button";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "test",
    color: "primary",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    await userEvent.click(button);
  },
};

export const Secondary: Story = {
  args: {
    children: "test",
    color: "secondary",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    await userEvent.click(button);
  },
};
