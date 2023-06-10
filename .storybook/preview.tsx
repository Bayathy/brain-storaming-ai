import type { Preview } from "@storybook/react";
import React from "react";
import { globalStyle } from "../src/style/global";
import "@unocss/reset/tailwind.css";
import "@fontsource/noto-sans-jp";
import { RecoilRoot } from "recoil";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    background: {
      default: "default",
      values: [
        {
          name: "default",
          value: "#",
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <RecoilRoot>
        <div className={globalStyle}>
          <Story />
        </div>
      </RecoilRoot>
    ),
  ],
};

export default preview;
