import React from "react";
import { useMessage } from "../../utils/useMessage";
import { MessageDialog } from "./MessageDialog.styled";
import { Container } from "../Container";

function MessageDialogComponent() {
  const { message } = useMessage();

  return message ? (
    <MessageDialog>
      <Container>{message}</Container>
    </MessageDialog>
  ) : null;
}

export default React.memo(MessageDialogComponent);
