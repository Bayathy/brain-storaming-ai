import type { ComponentPropsWithoutRef } from "react";
import * as React from "react";

import { css } from "@linaria/core";

type ButtonProps = {
  color?: "primary" | "secondary" | "extra";
} & ComponentPropsWithoutRef<"button">;

const buttonStyle = css`color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 10px;

  &[data-color="primary"] {
    background: var(--primary);

    :hover {
      opacity: 0.8;
    }
  }

  &[data-color="secondary"] {
    background-color: var(--secondary);

    :hover {
      opacity: 0.8;
    }
  }

  :disabled {
    background-color: gray;
  }
`;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function ({ children, color = "primary", ...props }, ref) {
    return (
      <button className={buttonStyle} ref={ref} {...props} data-color={color}>
        {children}
      </button>
    );
  }
);
