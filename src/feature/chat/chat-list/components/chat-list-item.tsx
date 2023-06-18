import { css } from "@linaria/core";

export type ChatListItemProps = {
  id: string;
  title: string;
};

const chatListItem = css`
  height: 6rem;
  border-radius: 10px;
  border: 2px solid var(--border-black);
  padding: var(--spacing-sm);
  line-clamp: 3;
  -webkit-line-clamp: 3;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -2px rgb(0 0 0 / 10%);

  :hover {
    background-color: var(--background);
  }
`;

const chatListText = css`
  word-wrap: break-word;
  width: 100%;
  height: 100%;
  text-overflow: clip;
  font-size: 1rem;
  cursor: pointer;
`;

const chatListButton = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
`;

export function ChatListItem({ title, id }: ChatListItemProps) {
  return (
    <li className={chatListItem}>
      <button className={chatListButton} onClick={() => console.log(id)}>
        <p className={chatListText}>{title}</p>
      </button>
    </li>
  );
}
