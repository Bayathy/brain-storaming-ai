import { ViewHeader } from "../components/feature/view-header";
import { RootLayout } from "../components/ui/Layout/RootLayout/root-layout";
import { globalStyle } from "../style/global";

export function App() {
  return (
    <div className={globalStyle}>
      <RootLayout
        header={<ViewHeader titleText="AI storming" />}
        content={<p>test</p>}
        footer={<></>}
      />
    </div>
  );
}
