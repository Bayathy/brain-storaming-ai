import { Menu } from "../feature/menu";
import { RootLayout } from "../shared/Layout/RootLayout/root-layout";
import { globalStyle } from "../style/global";

export function App() {
  return (
    <div className={globalStyle}>
      <RootLayout
        menu={
          <Menu
            headerTitle="AI Storming"
            menuListItems={[
              {
                key: 1,
                icon: "ic:baseline-chat",
                itemTitle: "Home",
              },
              {
                key: 2,
                icon: "ic:baseline-chat",
                itemTitle: "Memo",
              },
              {
                key: 3,
                icon: "ic:baseline-chat",
                itemTitle: "Settings",
              },
              {
                key: 4,
                icon: "ic:baseline-chat",
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
