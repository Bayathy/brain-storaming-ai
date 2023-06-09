import { Icon } from "@iconify/react";
import { css } from "@linaria/core";

type MenuProps = {
  headerTitle: string;
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

const menuButton = css`
  display: grid;
  width: 10rem;
  height: 3rem;
  font-size: 1.3rem;
  text-align: center;
  align-items: center;
  grid-template-columns: 1.3rem auto;
  padding-inline: var(--padding-sm);
  border-radius: 10px;
  :hover {
    background: var(--backgorund);
  }
`;

const menuIcon = css`
  width: 100%;
  height: 100%;
`;

export function Menu({ headerTitle }: MenuProps) {
  return (
    <nav className={menu}>
      <div className={menuHeader}>
        <h1>{headerTitle}</h1>
      </div>
      <div>
        <ul className={menuList}>
          <li>
            <button className={menuButton}>
              <Icon className={menuIcon} icon={"ic:baseline-chat"} />
              Menu1
            </button>
          </li>
          <li>
            <button className={menuButton}>
              <Icon className={menuIcon} icon={"ic:baseline-chat"} />
              Menu1
            </button>
          </li>
          <li>
            <button className={menuButton}>
              <Icon className={menuIcon} icon={"ic:baseline-chat"} />
              Menu1
            </button>
          </li>
          <li>
            <button className={menuButton}>
              <Icon className={menuIcon} icon={"ic:baseline-chat"} />
              Menu1
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
