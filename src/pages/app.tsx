import { Header } from "../feature/header";
import { Menu } from "../feature/menu";
import { RootLayout } from "../shared/Layout/RootLayout/root-layout";
import { globalStyle } from "../style/global";

export function App() {
  return (
    <div className={globalStyle}>
      <RootLayout
        header={<Header titleText="AI-storming" />}
        menu={
          <Menu
            menuListItems={[
              {
                key: 1,
                icon: "ic:baseline-chat",
                itemTitle: "Home",
              },
              {
                key: 2,
                icon: "ic:twotone-event-note",
                itemTitle: "Memo",
              },
              {
                key: 3,
                icon: "ic:baseline-settings",
                itemTitle: "Settings",
              },
              {
                key: 4,
                icon: "ic:baseline-account-circle",
                itemTitle: "Account",
              },
            ]}
          />
        }
        content={<p>test</p>}
      />
    </div>
  );
}
