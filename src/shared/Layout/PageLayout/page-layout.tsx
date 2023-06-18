import { css } from "@linaria/core";

type PageLayoutProps = {
  title: string;
  children: JSX.Element;
};

const layout = css`
  position: relative;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: var(--spacing-lg);
`;

const pageTitle = css`
  font-size: 1.4rem;
  background-color: white;
  padding: var(--spacing-sm);
`;

const pageContent = css`
  margin-inline: var(--spacing-md);
  height: 100%;
`;

export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <main className={layout}>
      <h1 className={pageTitle}>{title}</h1>
      <div className={pageContent}>{children}</div>
    </main>
  );
}
