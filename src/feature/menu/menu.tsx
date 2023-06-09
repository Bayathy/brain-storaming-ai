import { css } from "@linaria/core";

import { MenuListItem } from "./components/menu-list-item";

import type { MenuListItemProps } from "./components/menu-list-item";

type MenuProps = {
  headerTitle: string;
  menuListItems: MenuListItemProps[];
};

const menu = css`position: fixed;
  margin: 1% 8px;
  display: grid;
  height: 98%;
  width: max-content;
  background-color: white;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  border-radius: 10px;
`;

const menuHeader = css`display: grid;
  align-items: center;
  padding: var(--spacing-lg);
  height: min-content;
  font-size: 1.5rem;
`;

const menuList = css`padding-inline: var(--spacing-sm);
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
