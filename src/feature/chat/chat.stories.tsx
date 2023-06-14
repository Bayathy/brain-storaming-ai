import { Chat } from "./chat";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Chat/Chat",
  component: Chat,
} satisfies Meta<typeof Chat>;

export default meta;

export const Default: StoryObj<typeof Chat> = {};
