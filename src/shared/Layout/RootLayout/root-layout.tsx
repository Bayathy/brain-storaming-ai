import { css } from "@linaria/core";

type RootLayoutProps = {
  menu: React.ReactNode;
  content: React.ReactNode;
};

const layout = css`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: var(--menu-width) 1fr;
`;

const menuBlock = css`
  position: relative;
  width: max-content;
`;

export function RootLayout({ menu, content }: RootLayoutProps) {
  return (
    <div className={layout}>
      <div className={menuBlock}>{menu}</div>
      <div>{content}</div>
    </div>
  );
}
