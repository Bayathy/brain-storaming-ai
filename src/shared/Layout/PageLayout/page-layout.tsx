import { css } from "@linaria/core";

type PageLayoutProps = {
  title: string;
  children: JSX.Element;
};

const layout = css`
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: var(--spacing-lg);
  min-height: 100vh;
`;

const pageTitle = css`
  padding: var(--spacing-sm);
  font-size: 1.4rem;
  background-color: white;
`;

const pageContent = css`
  height: 100%;
  margin-inline: var(--spacing-md);
`;

export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <main className={layout}>
      <h1 className={pageTitle}>{title}</h1>
      <div className={pageContent}>{children}</div>
    </main>
  );
}
