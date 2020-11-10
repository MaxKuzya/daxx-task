import { createContext, useContext, useState } from 'react';
import LoginDataService from '../services/LoginDataService';
import AuthService from '../services/AuthService';

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    return AuthService.login(username, password)
      .then(response => {
        setUser(response.user);

        return response.user;
      });
  };

  const signup = (username, password) => {
    return LoginDataService
      .createUser(username, password)
      .then(response => {
        setUser(response.user);
        return response.user;
      });
  };

  const logout = () => {
    return AuthService
      .logout()
      .then(() => {
        setUser(false);
      });
  };

  const changePassword = (username, password) => {
    return LoginDataService.changePassword(username, password)
      .then(() => {
        return true;
      });
  };

  // Return the user object and auth methods
  return {
    user,
    login,
    signup,
    logout,
    changePassword
  };
}
