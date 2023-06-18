import { css } from "@linaria/core";
import * as ScrollArea from "@radix-ui/react-scroll-area";

import { ChatListItem } from "./components/chat-list-item";

import type { ChatListItemProps } from "./components/chat-list-item";

type ChatListProps = {
  chatListItems: ChatListItemProps[];
};

const container = css`
  position: fixed;
  background-color: white;
  width: var(--chat-list-width);
  height: 100%;
  padding: var(--spacing-sm);
  padding-top: var(--spacing-md);
`;

const scrollAreaRoot = css`
  border-radius: 4px;
  overflow: hidden;
  height: 100%;

  --scrollbar-size: 8px;
`;

const chatList = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: var(--spacing-lg);
`;

const chaListTitle = css`
  font-size: 1.4rem;
  border-bottom: 2px solid var(--secondary);
`;

const scrollAreaViewPort = css`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;

const scrollAreaScrollBar = css`
  display: flex;
  user-select: none;
  touch-action: none;
  padding: 2px;

  &[data-orientation="vertical"] {
    width: var(--scrollbar-size);
  }
`;

const scrollAreaThumb = css`
  flex: 1;
  background: rgb(0 0 0 / 30%);
  position: relative;
  border-radius: var(--scrollbar-size);

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`;

export function ChatList({ chatListItems }: ChatListProps) {
  return (
    <div className={container}>
      <h2 className={chaListTitle}>Chat List</h2>
      <ScrollArea.Root className={scrollAreaRoot}>
        <ScrollArea.Viewport className={scrollAreaViewPort}>
          <div>
            <ul className={chatList}>
              {chatListItems.map((index) => (
                <ChatListItem key={index.id} {...index} />
              ))}
            </ul>
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className={scrollAreaScrollBar}
          orientation="vertical"
        >
          <ScrollArea.Thumb className={scrollAreaThumb} />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  );
}
