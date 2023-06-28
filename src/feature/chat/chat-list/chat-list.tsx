import { css } from "@linaria/core";
import * as ScrollArea from "@radix-ui/react-scroll-area";

import { ChatCreateModal } from "../chat-create-modal/chat-create-modal";

import { ChatListItem } from "./components/chat-list-item";

import type { ChatRoom } from "../api/store/types";

type ChatListProps = {
  chatRoomList: ChatRoom[];
};

const container = css`
  position: fixed;
  width: var(--chat-list-width);
  height: 100%;
  padding: var(--spacing-sm);
  padding-top: var(--spacing-md);
  background-color: white;
`;

const buttonBox = css`
  display: flex;
  justify-content: flex-end;
  margin-top: var(--spacing-sm);
`;

const scrollAreaRoot = css`
  height: 100%;
  overflow: hidden;
  border-radius: 4px;

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
  padding: 2px;
  touch-action: none;
  user-select: none;

  &[data-orientation="vertical"] {
    width: var(--scrollbar-size);
  }
`;

const scrollAreaThumb = css`
  position: relative;
  flex: 1;
  background: rgb(0 0 0 / 30%);
  border-radius: var(--scrollbar-size);

  ::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    min-width: 44px;
    height: 100%;
    min-height: 44px;
    content: "";
    transform: translate(-50%, -50%);
  }
`;

export function ChatList({ chatRoomList }: ChatListProps) {
  return (
    <div className={container}>
      <h2 className={chaListTitle}>Chat List</h2>
      <div className={buttonBox}>
        <ChatCreateModal />
      </div>
      <ScrollArea.Root className={scrollAreaRoot}>
        <ScrollArea.Viewport className={scrollAreaViewPort}>
          <div>
            <ul className={chatList}>
              {chatRoomList.map((index) => (
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
