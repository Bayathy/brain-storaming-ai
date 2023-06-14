import { css } from "@linaria/core";

type ChatLayoutProps = {
  chatList: JSX.Element;
  chatContent: JSX.Element;
};

const chatLayout = css`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: var(--chat-list-width) 1fr;
  gap: 1rem;
`;

export function ChatLayout({ chatList, chatContent }: ChatLayoutProps) {
  return (
    <div className={chatLayout}>
      <section>{chatList}</section>
      <section>{chatContent}</section>
    </div>
  );
}
