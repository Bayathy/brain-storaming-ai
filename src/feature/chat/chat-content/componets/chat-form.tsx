import { css } from "@linaria/core";

import { Button } from "../../../../shared/Button";
const chatForm = css`
  position: fixed;
  display: flex;
  width: 100%;
`;

const inputForm = css`
  border-radius: var(--spacing-sm);
  width: 80%;
`;

export function ChatForm() {
  return (
    <form className={chatForm}>
      <input type="text" className={inputForm} />
      <Button type="submit">追加</Button>
    </form>
  );
}
