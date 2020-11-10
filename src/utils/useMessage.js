import { createContext, useContext, useEffect, useState } from "react";

const messageContext = createContext();

export function ProvideMessage({ children }) {
  const auth = useProvideMessage();
  return (
    <messageContext.Provider value={auth}>{children}</messageContext.Provider>
  );
}

export const useMessage = () => {
  return useContext(messageContext);
};

const useProvideMessage = () => {
  const [message, addMessage] = useState("");

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        addMessage("");
      }, 3000);
    }
  }, [message]);

  return {
    message,
    addMessage,
  };
};
