import { css } from "@linaria/core";

import { Button } from "../../../../shared/Button";

const chatForm = css`
  background-color: white;
  border-radius: 10px;
  display: flex;
  position: fixed;
  bottom: 32px;
  padding: var(--spacing-md);
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 30rem;
`;

const chatFormInput = css`
  outline: 2px solid var(--border-black);
  border-radius: 10px;
  height: 2rem;
  padding: var(--spacing-sm);
  width: 70%;

  :focus {
    outline: 2px solid var(--primary);
  }
`;

export function ChatForm() {
  return (
    <form className={chatForm}>
      <input type="text" className={chatFormInput} />
      <Button>送信する</Button>
    </form>
  );
}
