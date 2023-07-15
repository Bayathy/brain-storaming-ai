import { css } from "@linaria/core";

import { Button } from "../../../../shared/Button";

const chatForm = css`
  position: fixed;
  bottom: 32px;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 30rem;
  padding: var(--spacing-md);
  background-color: white;
  border-radius: 10px;
`;

const chatFormInput = css`
  width: 70%;
  height: 2rem;
  padding: var(--spacing-sm);
  border-radius: 10px;
  outline: 2px solid var(--border-black);

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
