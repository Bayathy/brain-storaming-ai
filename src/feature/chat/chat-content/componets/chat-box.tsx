import { css } from "@linaria/core";

const chatBox = css`
  flex: 1;
  background-color: white;
  border-radius: 10px;
`;

export function ChatBox() {
  return (
    <div className={chatBox}>
      <p>text</p>
    </div>
  );
}
