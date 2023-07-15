export type ChatItem = {
  id: string;
  text: string;
  author: "bot" | "user";
};

export type ChatRoom = {
  id: string;
  title: string;
  chatItemList: ChatItem[];
};
