import { RootLayout } from "../components/Layout/RootLayout/root-layout";
import { Header } from "../feature/header";
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
