import { atom } from "recoil";

export const menuActiveStore = atom<number>({
  key: "menuActiveStore",
  default: 1,
});
