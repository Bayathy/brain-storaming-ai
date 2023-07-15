import { css } from "@linaria/core";

export const globalStyle = css`
  :global() {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :root {
      --background: #ebebeb;
      --primary: #008cff;
      --secondary: #c3ffc1;

      --header-height: 64px;

      --menu-width: 4rem;
      --chat-list-width: 13rem;

      --border-black: rgba(0, 0, 0, 0.2);

      --spacing-sm: 8px;
      --spacing-md: 16px;
      --spacing-lg: 24px;
      --spacing-xl: 32px;
    }

    body {
      background-color: var(--background);
      font-family: "Noto Sans JP", sans-serif;
    }
  }
`;
