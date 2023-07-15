import { css } from "@linaria/core";

type RootLayoutProps = {
  menu: React.ReactNode;
  content: React.ReactNode;
};

const layout = css`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: var(--menu-width) 1fr;
  width: 100%;
`;

const contentContainer = css`
  position: relative;
`;

export function RootLayout({ menu, content }: RootLayoutProps) {
  return (
    <div className={layout}>
      <div className={contentContainer}>{menu}</div>
      <div className={contentContainer}>{content}</div>
    </div>
  );
}
