import { css } from "@linaria/core";

export const globalStyle = css`
  :global() {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :root {
      --backgorund: #ebebeb;
      --primary: #008cff;
      --secondary: #07ca00;

      --padding-sm: 8px;
    }

    body {
      background-color: var(--backgorund);
      font-family: "Noto Sans JP", sans-serif;
    }
  }
`;
