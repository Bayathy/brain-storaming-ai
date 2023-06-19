import { atom } from "recoil";

import type { ChatRoom } from "./types";

export const chatRoomListStore = atom<ChatRoom[]>({
  key: "chatListState",
  default: [],
});

export const selectChatRoomStore = atom<ChatRoom | null>({
  key: "selectChatRoomState",
  default: undefined,
});
