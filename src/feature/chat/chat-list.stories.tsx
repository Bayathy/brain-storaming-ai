import { Meta, StoryObj } from "@storybook/react";
import { ChatList } from "./chat-list";

const meta = {
  title: "ChatList",
  component: ChatList,
} satisfies Meta<typeof ChatList>;

export default meta;

export const Default: StoryObj<typeof ChatList> = {};
