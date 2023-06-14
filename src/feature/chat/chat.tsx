import { ChatLayout } from "./chat-layout/chat-layout";
import { ChatList } from "./chat-list/chat-list";

export function Chat() {
  return (
    <ChatLayout
      chatList={<ChatList />}
      chatContent={<div>test</div>}
    />
  );
}
