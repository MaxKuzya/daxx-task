import { useEffect, useState } from "react";
import LoginDataService from "../services/LoginDataService";

export const useUserInfo = (username) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(username);
    LoginDataService.isUserExist(username).then((res) => {
      setUser(res);
    });
  }, [setUser, username]);

  // Return the user object and auth methods
  return {
    isUserExist: user,
  };
};
