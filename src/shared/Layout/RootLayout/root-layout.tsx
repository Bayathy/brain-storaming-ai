import { css } from "@linaria/core";

type RootLayoutProps = {
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
};

const layout = css`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template: "header" auto "content" 1fr "footer" auto/ 1fr;
`;

export function RootLayout({ header, content, footer }: RootLayoutProps) {
  return (
    <div className={layout}>
      <div>{header}</div>
      <div>{content}</div>
      <div>{footer}</div>
    </div>
  );
}
