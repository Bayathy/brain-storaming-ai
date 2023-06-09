import { Menu } from "./menu";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Menu",
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;

export const Default: StoryObj<typeof Menu> = {
  args: {
    headerTitle: "Menu",
    menuListItems: [
      {
        icon: "ic:baseline-chat",
        itemTitle: "Home",
      },
      {
        icon: "ic:baseline-chat",
        itemTitle: "Memo",
      },
      {
        icon: "ic:baseline-chat",
        itemTitle: "Settings",
      },
      {
        icon: "ic:baseline-chat",
        itemTitle: "Account",
      },
    ],
  },
};
