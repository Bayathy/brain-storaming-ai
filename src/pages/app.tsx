import { Header } from "../feature/header";
import { Menu } from "../feature/menu";
import { RootLayout } from "../shared/Layout/RootLayout/root-layout";
import { globalStyle } from "../style/global";
import { Router, Route } from "wouter";
import { Home } from "./home";

export function App() {
  return (
    <div className={globalStyle}>
      <RootLayout
        header={<Header titleText="AI-storming" />}
        menu={
          <Menu
            menuListItems={[
              {
                id: 1,
                icon: "ic:baseline-chat",
                itemTitle: "Home",
                acitveState: "active",
              },
              {
                id: 2,
                icon: "ic:twotone-event-note",
                itemTitle: "Memo",
                acitveState: "none",
              },
              {
                id: 3,
                icon: "ic:baseline-settings",
                itemTitle: "Settings",
                acitveState: "none",
              },
              {
                id: 4,
                icon: "ic:baseline-account-circle",
                itemTitle: "Account",
                acitveState: "none",
              },
            ]}
          />
        }
        content={
          <Router>
            <Route path="/" component={Home} />
          </Router>
        }
      />
    </div>
  );
}
