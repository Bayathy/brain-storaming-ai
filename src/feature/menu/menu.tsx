import { css } from "@linaria/core";

import { MenuListItem } from "./components/menu-list-item";

import type { MenuListItemProps } from "./components/menu-list-item";

type MenuProps = {
  menuListItems: MenuListItemProps[];
};

const menu = css`
  position: fixed;
  display: grid;
  height: 100%;
  width: max-content;
  background-color: white;
  justify-content: center;
`;

const menuList = css`
  padding-inline: var(--spacing-sm);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;
`;

export function Menu({ menuListItems }: MenuProps) {
  return (
    <nav className={menu}>
      <ul className={menuList}>
        {menuListItems.map((index) => (
          <MenuListItem {...index} />
        ))}
      </ul>
    </nav>
  );
}
