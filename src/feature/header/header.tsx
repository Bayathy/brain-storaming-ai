import { css } from "@linaria/core";

type HeaderProps = {
  titleText: string;
};

const header = css`
  position: fixed;
  width: 100%;
  height: var(--header-height);
  background: white;
`;

const headerContent = css`
  display: flex;
  align-items: center;
  height: 100%;
  padding-inline: var(--spacing-sm);
  margin: auto;
`;

const title = css`
  font-size: 1.5rem;
  font-weight: normal;
`;

export function Header({ titleText }: HeaderProps) {
  return (
    <header className={header}>
      <div className={headerContent}>
        <h1 className={title}>{titleText}</h1>
      </div>
    </header>
  );
}
