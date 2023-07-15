import { Menu } from "./menu";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Menu",
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;

export const Default: StoryObj<typeof Menu> = {
  args: {
    menuListItems: [
      {
        id: 1,
        icon: "ic:baseline-chat",
        itemTitle: "Home",
        acitveState: "active",
      },
      {
        id: 2,
        icon: "ic:twotone-event-note",
        itemTitle: "Memo",
        acitveState: "none",
      },
      {
        id: 3,
        icon: "ic:baseline-settings",
        itemTitle: "Settings",
        acitveState: "none",
      },
      {
        id: 4,
        icon: "ic:baseline-account-circle",
        itemTitle: "Account",
        acitveState: "none",
      },
    ],
  },
};
