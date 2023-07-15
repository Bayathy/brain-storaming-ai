import { InlineIcon } from "@iconify/react";
import { css } from "@linaria/core";

import type { ChatItem } from "../../api/store/types";

const botChatBox = css`
  display: flex;
  gap: var(--spacing-sm);
  align-items: center;
  width: 30rem;
  padding: var(--spacing-sm);
  background-color: white;
  border-radius: 10px;

  &[data-author="bot"] {
    background-color: var(--secondary);
  }

  &[data-author="user"] {
    justify-content: space-between;
  }
`;

export function ChatBox({ author, text }: ChatItem) {
  return (
    <>
      {author === "bot" ? (
        <div data-author="bot" className={botChatBox}>
          <InlineIcon
            width={"auto"}
            height={"2rem"}
            icon={"fluent:bot-20-filled"}
          />
          <p>{text}</p>
        </div>
      ) : (
        <div data-author="user" className={botChatBox}>
          <p>{text}</p>
          <InlineIcon
            width={"auto"}
            height={"2rem"}
            icon={"fluent:bot-20-filled"}
          />
        </div>
      )}
    </>
  );
}
