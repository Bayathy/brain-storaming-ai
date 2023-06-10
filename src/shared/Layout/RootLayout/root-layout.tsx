import { css } from "@linaria/core";

type RootLayoutProps = {
  header: React.ReactNode;
  menu: React.ReactNode;
  content: React.ReactNode;
};

const layout = css`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: var(--menu-width) auto;
`;

const innerLayout = css`
  display: grid;
  gap: 1rem;
  grid-template-rows: auto 1fr;
`;

export function RootLayout({ header, menu, content }: RootLayoutProps) {
  return (
    <div className={layout}>
      <div>{menu}</div>
      <div className={innerLayout}>
        <div>{header}</div>
        <div>{content}</div>
      </div>
    </div>
  );
}
