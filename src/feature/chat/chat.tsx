import { useRecoilState } from "recoil";

import { chatRoomListStore, selectChatRoomStore } from "./api/store/chat";
import { ChatContent } from "./chat-content";
import { ChatLayout } from "./chat-layout/chat-layout";
import { ChatList } from "./chat-list/chat-list";

export function Chat() {
  const [chatRoomList] = useRecoilState(chatRoomListStore);
  const [selectChatRoom] = useRecoilState(selectChatRoomStore);

  return (
    <ChatLayout
      chatList={<ChatList chatRoomList={chatRoomList} />}
      chatContent={
        <ChatContent
          chatItemList={selectChatRoom?.chatItemList}
          title={selectChatRoom?.title}
        />
      }
    />
  );
}
