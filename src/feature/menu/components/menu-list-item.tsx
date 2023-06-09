import { Icon } from "@iconify/react";
import { css } from "@linaria/core";

export type MenuListItemProps = {
  key: number;
  itemTitle: string;
  icon: string;
};

const menuButton = css`
  display: grid;
  width: 10rem;
  height: 3rem;
  font-size: 1.3rem;
  align-items: center;
  grid-template-columns: 1.3rem auto;
  padding-inline: var(--spacing-sm);
  border-radius: 10px;
  :hover {
    background: var(--backgorund);
  }
`;

const menuIcon = css`
  width: 100%;
  height: 100%;
`;

export function MenuListItem({ itemTitle, icon }: MenuListItemProps) {
  return (
    <li>
      <button className={menuButton}>
        <Icon className={menuIcon} icon={icon} />
        {itemTitle}
      </button>
    </li>
  );
}
