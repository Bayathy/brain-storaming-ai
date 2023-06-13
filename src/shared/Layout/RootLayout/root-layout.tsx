import { css } from "@linaria/core";

type RootLayoutProps = {
  menu: React.ReactNode;
  content: React.ReactNode;
};

const layout = css`
  width: 100%;
  display: grid;
  grid-template-columns: var(--menu-width) 1fr;
  grid-template-rows: 100%;
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
