import { ViewHeader } from "./view-header";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Header",
  component: ViewHeader,
} satisfies Meta<typeof ViewHeader>;

export default meta;

export const Default: StoryObj<typeof ViewHeader> = {
  args: {
    titleText: "AI storming",
  },
};
