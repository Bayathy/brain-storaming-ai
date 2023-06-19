import { css } from "@linaria/core";

import { PageLayout } from "../../../shared/Layout/PageLayout";

import { ChatForm } from "./componets/chat-form";

const contentsContainer = css`
  position: relative;
  width: 100%;
  height: 100%;
`;

const chatFormContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const chatContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-lg);
`;

export function ChatContent() {
  return (
    <PageLayout title="〇〇するアイデア">
      <div className={contentsContainer}>
        <div className={chatContainer}></div>
        <div className={chatFormContainer}>
          <ChatForm />
        </div>
      </div>
    </PageLayout>
  );
}
