import { css } from "@linaria/core";
import * as ScrollArea from "@radix-ui/react-scroll-area";

import { ChatListItem } from "./components/chat-list-item";

const chatListContainar = css`
  width: var(--chat-list-width);
  border-radius: 4px;
  overflow: hidden;
  height: 100vh;
  position: fixed;
  box-shadow: 0 2px 10px black/0.7;
  background-color: white;

  --scrollbar-size: 8px;
`;

const chaListTitle = css`
  font-size: 1.4rem;
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

const chatList = css`
  margin: var(--spacing-sm);
`;

export function ChatList() {
  return (
    <ScrollArea.Root className={chatListContainar}>
      <ScrollArea.Viewport className={scrollAreaViewPort}>
        <div className={chatList}>
          <h2 className={chaListTitle}>Chat List</h2>
          <ul>
            {[...Array.from({ length: 5 }).keys()].map((key) => (
              <ChatListItem key={key}></ChatListItem>
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
  );
}
