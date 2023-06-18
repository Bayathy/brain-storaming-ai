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
  margin-inline: var(--spacing-md);
`;

const pageTitle = css`
  font-size: 2rem;
  margin-top: var(--spacing-md);
`;

const pageContent = css`
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
