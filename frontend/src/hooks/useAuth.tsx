import React, { useState, useContext, createContext } from 'react';

const authContext = createContext({});

export function useAuth(): any {
  return useContext(authContext);
}

export function useProvideAuth(): any {
  const [user, setUser] = useState(null);

  const signin = (): void => {
    // request to sign_in
    setUser(null);
  };

  const signout = (): void => {
    // request to sign_ou
    setUser(null);
  };

  return {
    user,
    signin,
    signout,
  };
}

export function ProvideAuth({ children }: any): any {
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
