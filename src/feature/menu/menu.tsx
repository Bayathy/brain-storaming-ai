import { css } from "@linaria/core";
import { useRecoilState } from "recoil";

import { menuActiveStore } from "./api/active-state";
import { MenuListItem } from "./components/menu-list-item";

import type { MenuListItemProps } from "./components/menu-list-item";

type MenuProps = {
  menuListItems: MenuListItemProps[];
};

const menu = css`
  position: fixed;
  display: grid;
  height: 100%;
  width: var(--menu-width);
  background-color: white;
  justify-content: center;
  z-index: 1000;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`;

const menuList = css`
  padding-inline: var(--spacing-sm);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;
`;

export function Menu({ menuListItems }: MenuProps) {
  const [activeState] = useRecoilState(menuActiveStore);

  return (
    <nav className={menu}>
      <ul className={menuList}>
        {menuListItems.map((index) => (
          <MenuListItem
            key={index.id}
            {...index}
            acitveState={activeState === index.id ? "active" : "none"}
          />
        ))}
      </ul>
    </nav>
  );
}
