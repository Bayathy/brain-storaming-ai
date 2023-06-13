import { ChatList } from "./components/chat-list";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ChatList",
  component: ChatList,
} satisfies Meta<typeof ChatList>;

export default meta;

export const Default: StoryObj<typeof ChatList> = {};
