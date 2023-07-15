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
  justify-content: center;
  width: var(--menu-width);
  height: 100%;
  background-color: white;
  border-right: 1px solid var(--border-black);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px -1px rgb(0 0 0 / 10%);
`;

const menuList = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding-inline: var(--spacing-sm);
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
