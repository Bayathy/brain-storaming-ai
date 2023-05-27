import type { PropsWithChildren } from "react";

import { css } from "@linaria/core";

const buttonStyle = css`  color: red;
`;

export function Button({ children }: PropsWithChildren): JSX.Element {
  return <button className={buttonStyle}>{children}</button>;
}
