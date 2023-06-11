import { css } from "@linaria/core";
import { ChatListItem } from "./components/chat-list-item";

import * as ScrollArea from "@radix-ui/react-scroll-area";

const chatList = css`
  width: var(--chat-list-width);
  border-radius: 4px;

  /* overflow-y: hidden; */
  height: 100vh;
  position: fixed;

  /* box-shadow: 0 2px 10px black; */
  background-color: white;

  --scrollbar-size: 10px;
`;

const chaListTitle = css`
  font-size: 1.4rem;
`;

const scrollAreaViewPort = css`
  position: relative;
  width: inherit;
  height: 100%;
  border-radius: inherit;
`;

const scrollAreaScrollBar = css`
  display: flex;

  /* ensures no selection */
  user-select: none;

  /* disable browser handling of all panning and zooming gestures on touch devices */
  touch-action: none;
  padding: 2px;
  transition: background 160ms ease-out;

  & [data-orientation="horizontal"] {
    flex-direction: column;
    height: var(--scrollbar-size);
  }
`;

const scrollAreaThumb = css`
  flex: 1;
  background: var(--mauve10);
  border-radius: var(--scrollbar-size);
  position: relative;

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

export function ChatList() {
  return (
    <ScrollArea.Root className={chatList}>
      <ScrollArea.Viewport className={scrollAreaViewPort}>
        <div>
          <h2 className={chaListTitle}>Chat List</h2>
          <ul>
            {Array.from(Array(10).keys()).map((key) => (
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
      <ScrollArea.Corner className="ScrollAreaCorner" />
    </ScrollArea.Root>
  );
}
