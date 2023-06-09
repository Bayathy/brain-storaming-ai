import { Header } from "../feature/header";
import { RootLayout } from "../shared/Layout/RootLayout/root-layout";
import { globalStyle } from "../style/global";

export function App() {
  return (
    <div className={globalStyle}>
      <RootLayout
        header={<Header titleText="AI storming" />}
        content={<p>test</p>}
        footer={<></>}
      />
    </div>
  );
}
