import { Icon } from "@iconify/react";
import { css } from "@linaria/core";
import * as Modal from "@radix-ui/react-dialog";

import { Button } from "../../../shared/Button";

const dialogOverLay = css`
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0/25%);
`;

const dialogContent = css`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 20rem;
  padding: var(--spacing-md);
  background-color: white;
  border-radius: 10px;
  transform: translate(-50%, -50%);
`;

const dialogHeader = css`
  display: flex;
  justify-content: space-between;
`;

const dialogFormInput = css`
  padding: 4px;
  border: black 1px solid;
  border-radius: 8px;
`;

const dialogForm = css`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const dialogCloseButton = css`
  padding: 4px;
  border-radius: 999px;

  :hover {
    background-color: var(--background);
  }
`;

const dialogFooter = css`
  display: flex;
  justify-content: flex-end;
`;

const dialogFormSubmitButton = css`
  padding: 4px;
  padding-inline: 16px;
  color: white;
  background: var(--primary);
  border-radius: 8px;
`;

export function ChatCreateModal() {
  return (
    <Modal.Root>
      <Modal.Trigger asChild>
        <Button>追加する</Button>
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.DialogOverlay className={dialogOverLay} />
        <Modal.Content className={dialogContent}>
          <div className={dialogHeader}>
            <Modal.Title>新しいチャットの作成</Modal.Title>
            <Modal.Close className={dialogCloseButton}>
              <Icon icon="ic:baseline-close" />
            </Modal.Close>
          </div>
          <form className={dialogForm}>
            <label htmlFor="title">タイトル</label>
            <input className={dialogFormInput} type="text" id="title"></input>
          </form>
          <div className={dialogFooter}>
            <button type="submit" className={dialogFormSubmitButton}>
              作成
            </button>
          </div>
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  );
}
