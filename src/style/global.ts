import { css } from "@linaria/core";

export const globalStyle = css`
  :global() {
    * {
      margin: 0;
      padding: 0;

      --backgorund: #fff;
    }

    body {
      background-color: var(--backgorund);
    }
  }
`;
