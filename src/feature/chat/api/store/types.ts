export type ChatItem = {
  text: string;
  author: "bot" | "user";
};

export type ChatRoom = {
  title: string;
  chatItemList: ChatItem[];
};
