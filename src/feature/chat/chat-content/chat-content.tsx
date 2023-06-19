import { css } from "@linaria/core";

import { PageLayout } from "../../../shared/Layout/PageLayout";

import { ChatBox } from "./componets/chat-box";
import { ChatForm } from "./componets/chat-form";

import type { ChatRoom } from "../api/store/types";

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

export function ChatContent({ chatItemList, title }: Partial<ChatRoom>) {
  return (
    <>
      {chatItemList && title && (
        <PageLayout title={title}>
          <div className={contentsContainer}>
            <div className={chatContainer}>
              {chatItemList.map((index) => (
                <ChatBox {...index} key={index.id} />
              ))}
            </div>
            <div className={chatFormContainer}>
              <ChatForm />
            </div>
          </div>
        </PageLayout>
      )}
    </>
  );
}
