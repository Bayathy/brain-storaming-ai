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

      --menu-width: 3rem;
      --chat-list-width: 13rem;

      --spacing-sm: 8px;
      --spacing-md: 16px;
      --spacing-lg: 24px;
      --spacing-xl: 32px;
    }

    body {
      background-color: var(--backgorund);
      font-family: "Noto Sans JP", sans-serif;
    }
  }
`;
