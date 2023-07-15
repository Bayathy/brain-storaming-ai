import { ChatCreateModal } from "./chat-create-modal";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Chat/ChatCreateModal",
  component: ChatCreateModal,
} satisfies Meta<typeof ChatCreateModal>;

export default meta;

export const Default: StoryObj<typeof ChatCreateModal> = {};
