import { css } from "@linaria/core";

import type { ChatRoom } from "../../api/store/types";

const chatListItem = css`
  height: 6rem;
  padding: var(--spacing-sm);
  overflow: hidden;
  border: 2px solid var(--border-black);
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -2px rgb(0 0 0 / 10%);
  -webkit-line-clamp: 3;
  line-clamp: 3;

  :hover {
    background-color: var(--background);
  }
`;

const chatListText = css`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  text-overflow: clip;
  word-wrap: break-word;
  cursor: pointer;
`;

const chatListButton = css`
  display: flex;
  align-items: start;
  justify-content: start;
  width: 100%;
  height: 100%;
`;

export function ChatListItem({ title, id }: ChatRoom) {
  return (
    <li className={chatListItem}>
      <button className={chatListButton} onClick={() => console.log(id)}>
        <p className={chatListText}>{title}</p>
      </button>
    </li>
  );
}
