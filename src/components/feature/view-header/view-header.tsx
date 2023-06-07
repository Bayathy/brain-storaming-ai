import { css } from "@linaria/core";

type HeaderProps = {
  titleText: string;
};

const header = css`
  width: 100%;
  height: 64px;
  background: var(--primary);
`;

const headerContent = css`
  max-width: 1000px;
  height: 100%;
  display: flex;
  align-items: center;
  padding-inline: var(--padding-sm);
  margin: auto;
`;

const title = css`
  font-size: 1.5rem;
  font-weight: normal;
  color: white;
`;

export function ViewHeader({ titleText }: HeaderProps) {
  return (
    <header className={header}>
      <div className={headerContent}>
        <h1 className={title}>{titleText}</h1>
      </div>
    </header>
  );
}
