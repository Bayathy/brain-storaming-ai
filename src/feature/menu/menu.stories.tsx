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
        key: 1,
        icon: "ic:baseline-chat",
        itemTitle: "Home",
      },
      {
        key: 2,
        icon: "ic:baseline-chat",
        itemTitle: "Memo",
      },
      {
        key: 3,
        icon: "ic:baseline-chat",
        itemTitle: "Settings",
      },
      {
        key: 4,
        icon: "ic:baseline-chat",
        itemTitle: "Account",
      },
    ],
  },
};
