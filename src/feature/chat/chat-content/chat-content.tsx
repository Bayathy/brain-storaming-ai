import { css } from "@linaria/core";

import { PageLayout } from "../../../shared/Layout/PageLayout";

import { ChatForm } from "./componets/chat-form";

const chatFormContainer = css`
  position: relative;
  width: 100%;
`;

export function ChatContent() {
    return (
        <PageLayout title="Chat">
            <div>
                <div className={chatFormContainer}>
                    <ChatForm />
                </div>
            </div>
        </PageLayout>
    );
}
