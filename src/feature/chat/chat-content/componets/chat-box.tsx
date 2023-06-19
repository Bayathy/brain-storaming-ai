import { InlineIcon } from "@iconify/react";
import { css } from "@linaria/core";

type ChatBoxProps = {
  authorIsBot?: boolean;
};

const botChatBox = css`
  background-color: white;
  border-radius: 10px;
  padding: var(--spacing-sm);
  width: 30rem;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);

  &[data-author="bot"] {
    background-color: var(--secondary);
  }

  &[data-author="user"] {
    justify-content: space-between;
  }
`;

export function ChatBox({ authorIsBot }: ChatBoxProps) {
  return (
    <>
      {authorIsBot ? (
        <div data-author="bot" className={botChatBox}>
          <InlineIcon
            width={"auto"}
            height={"2rem"}
            icon={"fluent:bot-20-filled"}
          />
          <p>〇〇が考えられます。</p>
        </div>
      ) : (
        <div data-author="user" className={botChatBox}>
          <p>〇〇が考えられます。</p>
          <InlineIcon
            width={"auto"}
            height={"2rem"}
            icon={"fluent:bot-20-filled"}
          />
        </div>
      )}
    </>
  );
}
