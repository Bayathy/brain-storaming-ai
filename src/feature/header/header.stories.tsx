import { Header } from "./header";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

export const Default: StoryObj<typeof Header> = {
  args: {
    titleText: "AI storming",
  },
};
