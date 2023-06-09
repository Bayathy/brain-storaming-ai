import { css } from "@linaria/core";

import { MenuListItem } from "./components/menu-list-item";

import type { MenuListItemProps } from "./components/menu-list-item";

type MenuProps = {
  headerTitle: string;
  menuListItems: MenuListItemProps[];
};

const menu = css`
  position: fixed;
  display: grid;
  height: 100vh;
  width: max-content;
  background-color: white;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
`;

const menuHeader = css`
  display: grid;
  align-items: center;
  padding: var(--padding-sm);
  height: 5rem;
`;

const menuList = css`
  padding-inline: var(--padding-sm);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export function Menu({ headerTitle, menuListItems }: MenuProps) {
  return (
    <nav className={menu}>
      <div className={menuHeader}>
        <h1>{headerTitle}</h1>
      </div>
      <div>
        <ul className={menuList}>
          {menuListItems.map((index) => (
            <MenuListItem {...index} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
