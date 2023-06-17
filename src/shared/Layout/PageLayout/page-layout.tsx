import { css } from "@linaria/core";

type PageLayoutProps = {
  title: string;
  children: JSX.Element;
};

const layout = css`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  margin-inline: var(--spacing-md);
`;

const pageTitle = css`
  font-size: 2rem;
  border-bottom: 2px solid var(--border-black);
`;

export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <main className={layout}>
      <h1 className={pageTitle}>{title}</h1>
      <div>{children}</div>
    </main>
  );
}
