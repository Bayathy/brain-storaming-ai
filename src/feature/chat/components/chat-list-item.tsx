import { css } from "@linaria/core";

const chatListItem = css`
  height: 6rem;
  border-radius: 10px;
  padding: var(--spacing-sm);
  line-clamp: 3;
  -webkit-line-clamp: 3;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -2px rgb(0 0 0 / 10%);
`;

const chatListText = css`
  overflow-wrap: break-word;
  text-overflow: clip;
  font-size: 1rem;
`;

export function ChatListItem() {
  return (
    <li className={chatListItem}>
      <p className={chatListText}>test</p>
    </li>
  );
}
