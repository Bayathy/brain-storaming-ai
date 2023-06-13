import { css } from "@linaria/core";

type HeaderProps = {
  titleText: string;
};

const header = css`
  width: 100%;
  height: var(--header-height);
  position: fixed;
  background: white;
`;

const headerContent = css`
  height: 100%;
  display: flex;
  align-items: center;
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
