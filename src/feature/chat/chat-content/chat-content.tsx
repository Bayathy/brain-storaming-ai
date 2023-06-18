import { css } from "@linaria/core";

import { PageLayout } from "../../../shared/Layout/PageLayout";

import { ChatBox } from "./componets/chat-box";
import { ChatForm } from "./componets/chat-form";

const contentsContainer = css`
  position: relative;
  width: 100%;
  height: 100%;
`;

const chatContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function ChatContent() {
  return (
    <PageLayout title="〇〇するアイデア">
      <div className={contentsContainer}>
        <div className={chatContainer}>
          <ChatBox />
          <ChatForm />
        </div>
      </div>
    </PageLayout>
  );
}
