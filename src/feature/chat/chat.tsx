import { ChatContent } from "./chat-content";
import { ChatLayout } from "./chat-layout/chat-layout";
import { ChatList } from "./chat-list/chat-list";

export function Chat() {
  return (
    <ChatLayout
      chatList={<ChatList chatListItems={[{ id: "1", title: "testです。" }]} />}
      chatContent={<ChatContent />}
    />
  );
}
