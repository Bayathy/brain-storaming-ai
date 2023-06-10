import { Icon } from "@iconify/react";
import { css } from "@linaria/core";
import * as Tooltip from "@radix-ui/react-tooltip";

export type MenuListItemProps = {
  key: number;
  itemTitle: string;
  icon: string;
};

const menuButton = css`
  height: 2rem;
  width: 2rem;
  border-radius: 10px;

  :hover {
    background: var(--backgorund);
  }
`;

const menuIcon = css`
  margin: auto;
  font-size: 1.5rem;
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

export function MenuListItem({ icon, itemTitle }: MenuListItemProps) {
  return (
    <li>
      <Tooltip.Provider>
        <Tooltip.Root delayDuration={300}>
          <Tooltip.Trigger asChild>
            <button className={menuButton}>
              <Icon className={menuIcon} icon={icon} />
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
}
