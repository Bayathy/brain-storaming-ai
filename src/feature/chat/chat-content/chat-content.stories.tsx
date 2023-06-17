import { ChatContent } from "./chat-content";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chat/ChatContent",
    component: ChatContent,
} satisfies Meta<typeof ChatContent>;

export default meta;

export const Default: StoryObj<typeof ChatContent> = {};
