import type { Preview } from "@storybook/react";
import React from "react";
import { globalStyle } from "../src/style/global";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={globalStyle}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
