import React, { useEffect } from 'react';
import { useUserInfo } from "../../utils/useUserInfo";
import { Redirect, useParams } from "react-router-dom";
import ActivationForm from "./ActivationForm";
import { useMessage } from '../../utils/useMessage';

function ActivationHandler() {
  const { username } = useParams();
  const { isUserExist } = useUserInfo(username);
  const { addMessage } = useMessage();

  useEffect(() => {
    if (isUserExist) {
      addMessage('User already exist!');
    }
  }, [isUserExist, addMessage])

  return !isUserExist ? (
    <ActivationForm username={username} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
      }}
    />
  );
}

export default React.memo(ActivationHandler);
