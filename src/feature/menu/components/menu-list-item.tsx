import { memo } from "react";

import { Icon } from "@iconify/react";
import { css } from "@linaria/core";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useSetRecoilState } from "recoil";

import { menuActiveStore } from "../api/active-state";

export type MenuListItemProps = {
  id: number;
  itemTitle: string;
  icon: string;
  acitveState: "active" | "none";
};

const menuListItem = css`
  width: 100%;
`;

const menuButton = css`
  height: 100%;
  width: 100%;
  border-radius: 10px;

  & [data-active="active"] {
    color: var(--primary);
  }

  :hover {
    background: var(--background);
  }
`;

const menuIcon = css`
  margin: auto;
`;

const toolTipContent = css`
  background-color: var(--primary);
  color: white;
  border-radius: 10px;
  padding: var(--spacing-sm) var(--spacing-lg);
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 75%);
  animation-duration: 200ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  animation-name: slide-left-and-fade;

  @keyframes slide-left-and-fade {
    from {
      opacity: 0;
      transform: translateX(2px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const toolTipArrow = css`
  fill: var(--primary);
`;

export const MenuListItem = memo<MenuListItemProps>(function ({
  id,
  icon,
  itemTitle,
  acitveState,
}) {
  const setActiveState = useSetRecoilState(menuActiveStore);

  return (
    <li className={menuListItem}>
      <Tooltip.Provider>
        <Tooltip.Root delayDuration={300}>
          <Tooltip.Trigger asChild>
            <button
              onClick={() => {
                setActiveState(id);
              }}
              className={menuButton}
            >
              <Icon
                data-active={acitveState}
                className={menuIcon}
                width={"70%"}
                icon={icon}
              />
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className={toolTipContent}
              side="right"
              sideOffset={5}
            >
              {itemTitle}
              <Tooltip.Arrow className={toolTipArrow} />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </li>
  );
});
