import { ChatForm } from "./chat-form";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Chat/ChatForm",
  component: ChatForm,
} satisfies Meta<typeof ChatForm>;

export default meta;

export const Default: StoryObj<typeof ChatForm> = {};
