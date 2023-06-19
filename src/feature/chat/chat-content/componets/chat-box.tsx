import { InlineIcon } from "@iconify/react";
import { css } from "@linaria/core";

import type { ChatItem } from "../../api/store/types";

const botChatBox = css`
  background-color: white;
  border-radius: 10px;
  padding: var(--spacing-sm);
  width: 30rem;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);

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
